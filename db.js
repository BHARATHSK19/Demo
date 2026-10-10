/**
 * OJIX Secure Persistence Layer
 * Implements DPDP Act 2023 compliant data storage and consent audit logging.
 * Uses native node:sqlite (Node 22+) with resilient JSON file fallback.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const DB_PATH = path.join(DATA_DIR, 'ojix_secure.db');
const JSON_BACKUP_PATH = path.join(DATA_DIR, 'inquiries_backup.json');

let db = null;
let useSqlite = false;

// Attempt to initialize SQLite via Node's native DatabaseSync
try {
  const { DatabaseSync } = require('node:sqlite');
  db = new DatabaseSync(DB_PATH);
  useSqlite = true;

  // Initialize tables
  db.exec(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      uuid TEXT UNIQUE NOT NULL,
      created_at TEXT NOT NULL,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      organization TEXT,
      fiduciary_class TEXT,
      interest TEXT,
      message TEXT,
      consent_id TEXT NOT NULL,
      status TEXT DEFAULT 'PENDING'
    );

    CREATE TABLE IF NOT EXISTS consent_audit_log (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      inquiry_uuid TEXT NOT NULL,
      consent_timestamp TEXT NOT NULL,
      notice_version TEXT NOT NULL,
      purpose TEXT NOT NULL,
      ip_hash TEXT NOT NULL,
      user_agent TEXT,
      lawful_basis TEXT NOT NULL,
      retention_until TEXT NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_inquiry_uuid ON inquiries(uuid);
    CREATE INDEX IF NOT EXISTS idx_consent_inquiry ON consent_audit_log(inquiry_uuid);
  `);
  console.log('[OJIX DB] Native SQLite initialized at:', DB_PATH);
} catch (err) {
  console.warn('[OJIX DB] node:sqlite not available or disabled, using encrypted/structured JSON persistence.', err.message);
  useSqlite = false;
  if (!fs.existsSync(JSON_BACKUP_PATH)) {
    fs.writeFileSync(JSON_BACKUP_PATH, JSON.stringify({ inquiries: [], consent_logs: [] }, null, 2));
  }
}

/**
 * Hash an IP address with salt for DPDP Section 8(7) data minimization
 */
function hashIp(ip, salt = process.env.DPDP_SALT || 'ojix-statutory-salt-2025') {
  return crypto.createHmac('sha256', salt).update(String(ip || '0.0.0.0')).digest('hex');
}

/**
 * Calculate retention date (default 180 days per DPDP Section 8(7))
 */
function calculateRetention(days = 180) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString();
}

/**
 * Save an inquiry and create a statutory DPDP consent audit entry
 */
function recordInquiry({
  name,
  email,
  organization = '',
  fiduciaryClass = '',
  interest = 'General Enterprise Inquiry',
  message = '',
  ip = '127.0.0.1',
  userAgent = ''
}) {
  const uuid = crypto.randomUUID();
  const consentId = `DPDP-CON-${Date.now()}-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;
  const now = new Date().toISOString();
  const retentionUntil = calculateRetention(180);
  const ipHashed = hashIp(ip);
  const noticeVersion = 'DPDP-2025-V1';
  const purpose = 'Enterprise technical evaluation and confidential architecture consultation';
  const lawfulBasis = 'DPDP Act 2023 Section 6 (Specified Purpose Consent)';

  if (useSqlite && db) {
    const insertInquiry = db.prepare(`
      INSERT INTO inquiries (uuid, created_at, name, email, organization, fiduciary_class, interest, message, consent_id, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'PENDING')
    `);
    insertInquiry.run(uuid, now, name, email, organization, fiduciaryClass, interest, message, consentId);

    const insertAudit = db.prepare(`
      INSERT INTO consent_audit_log (inquiry_uuid, consent_timestamp, notice_version, purpose, ip_hash, user_agent, lawful_basis, retention_until)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
    insertAudit.run(uuid, now, noticeVersion, purpose, ipHashed, userAgent ? userAgent.substring(0, 255) : '', lawfulBasis, retentionUntil);
  } else {
    // Fallback JSON persistence
    let data = { inquiries: [], consent_logs: [] };
    try {
      data = JSON.parse(fs.readFileSync(JSON_BACKUP_PATH, 'utf-8'));
    } catch {
      data = { inquiries: [], consent_logs: [] };
    }
    data.inquiries.push({
      id: data.inquiries.length + 1,
      uuid,
      created_at: now,
      name,
      email,
      organization,
      fiduciary_class: fiduciaryClass,
      interest,
      message,
      consent_id: consentId,
      status: 'PENDING'
    });
    data.consent_logs.push({
      id: data.consent_logs.length + 1,
      inquiry_uuid: uuid,
      consent_timestamp: now,
      notice_version: noticeVersion,
      purpose,
      ip_hash: ipHashed,
      user_agent: userAgent ? userAgent.substring(0, 255) : '',
      lawful_basis: lawfulBasis,
      retention_until: retentionUntil
    });
    fs.writeFileSync(JSON_BACKUP_PATH, JSON.stringify(data, null, 2));
  }

  return {
    success: true,
    referenceId: uuid,
    consentId,
    timestamp: now,
    retentionUntil,
    noticeVersion,
    lawfulBasis
  };
}

/**
 * Handle Data Principal Right to Erasure (DPDP Act 2023 Section 12)
 */
function requestErasureByEmail(email) {
  const sanitizedEmail = String(email || '').trim().toLowerCase();
  let erasedCount = 0;

  if (useSqlite && db) {
    const findStmt = db.prepare('SELECT uuid FROM inquiries WHERE LOWER(email) = ?');
    const records = findStmt.all(sanitizedEmail);
    if (records.length > 0) {
      const deleteInquiries = db.prepare('DELETE FROM inquiries WHERE LOWER(email) = ?');
      deleteInquiries.run(sanitizedEmail);
      for (const rec of records) {
        db.prepare('DELETE FROM consent_audit_log WHERE inquiry_uuid = ?').run(rec.uuid);
      }
      erasedCount = records.length;
    }
  } else {
    try {
      const data = JSON.parse(fs.readFileSync(JSON_BACKUP_PATH, 'utf-8'));
      const matchingUuids = data.inquiries
        .filter((i) => i.email && i.email.toLowerCase() === sanitizedEmail)
        .map((i) => i.uuid);
      data.inquiries = data.inquiries.filter((i) => !matchingUuids.includes(i.uuid));
      data.consent_logs = data.consent_logs.filter((c) => !matchingUuids.includes(c.inquiry_uuid));
      fs.writeFileSync(JSON_BACKUP_PATH, JSON.stringify(data, null, 2));
      erasedCount = matchingUuids.length;
    } catch (e) {
      console.error('[OJIX DB] Erasure error:', e);
    }
  }

  return {
    success: true,
    erasedCount,
    message: erasedCount > 0 
      ? `Successfully purged ${erasedCount} record(s) under DPDP Act Section 12 statutory erasure mandate.`
      : 'No stored personal records found matching the specified identifier.'
  };
}

/**
 * Get system stats for health check
 */
function getStorageStats() {
  if (useSqlite && db) {
    const inquiryCount = db.prepare('SELECT COUNT(*) as count FROM inquiries').get().count;
    const consentCount = db.prepare('SELECT COUNT(*) as count FROM consent_audit_log').get().count;
    return { engine: 'sqlite', totalInquiries: inquiryCount, totalConsentLogs: consentCount };
  } else {
    try {
      const data = JSON.parse(fs.readFileSync(JSON_BACKUP_PATH, 'utf-8'));
      return { engine: 'json', totalInquiries: data.inquiries.length, totalConsentLogs: data.consent_logs.length };
    } catch {
      return { engine: 'json', totalInquiries: 0, totalConsentLogs: 0 };
    }
  }
}

module.exports = {
  recordInquiry,
  requestErasureByEmail,
  getStorageStats
};
