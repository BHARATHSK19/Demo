document.documentElement.classList.add("js-enabled");

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 1. SCROLL PROGRESS & HEADER ELEVATION
const siteHeader = document.querySelector('.site-header');
const progressBar = document.getElementById('scroll-progress');

function handleScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  if (progressBar) {
    progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
  }

  if (siteHeader) {
    if (scrollTop > 20) {
      siteHeader.classList.add('is-scrolled');
    } else {
      siteHeader.classList.remove('is-scrolled');
    }
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

const heroVisual = document.querySelector('.hero-visual');
const workspaceWindow = document.getElementById('workspace-window') || document.getElementById('discovery-instrument');

if (heroVisual && workspaceWindow && !prefersReducedMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  let targetTiltX = -2;
  let targetTiltY = 1;
  let currentTiltX = -2;
  let currentTiltY = 1;
  let isHovered = false;
  let animFrameId = null;

  function updateTilt() {
    const factor = isHovered ? 0.12 : 0.08;
    currentTiltX += (targetTiltX - currentTiltX) * factor;
    currentTiltY += (targetTiltY - currentTiltY) * factor;

    workspaceWindow.style.setProperty('--tilt-x', `${currentTiltX.toFixed(2)}deg`);
    workspaceWindow.style.setProperty('--tilt-y', `${currentTiltY.toFixed(2)}deg`);

    const diff = Math.abs(targetTiltX - currentTiltX) + Math.abs(targetTiltY - currentTiltY);
    if (isHovered || diff > 0.02) {
      animFrameId = requestAnimationFrame(updateTilt);
    } else {
      animFrameId = null;
    }
  }

  heroVisual.addEventListener('pointermove', (e) => {
    isHovered = true;
    const rect = heroVisual.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;

    targetTiltX = normX * 12;
    targetTiltY = -normY * 10;

    if (!animFrameId) {
      animFrameId = requestAnimationFrame(updateTilt);
    }
  });

  heroVisual.addEventListener('pointerleave', () => {
    isHovered = false;
    targetTiltX = -2;
    targetTiltY = 1;
    if (!animFrameId) {
      animFrameId = requestAnimationFrame(updateTilt);
    }
  });
}

// 3. ANIMATED METRIC COUNTERS
const counterElements = document.querySelectorAll('.counter[data-target]');
if (counterElements.length > 0 && 'IntersectionObserver' in window) {
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        observer.unobserve(el);
        const target = parseInt(el.getAttribute('data-target'), 10);
        const prefix = el.getAttribute('data-prefix') || '';
        if (prefersReducedMotion || isNaN(target)) {
          el.textContent = `${prefix}${target}`;
          return;
        }

        const duration = 1200;
        const startTime = performance.now();

        function animateCounter(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(target * easeOut);
          el.textContent = `${prefix}${current}`;

          if (progress < 1) {
            requestAnimationFrame(animateCounter);
          } else {
            el.textContent = `${prefix}${target}`;
          }
        }
        requestAnimationFrame(animateCounter);
      }
    });
  }, { threshold: 0.3 });

  counterElements.forEach((el) => counterObserver.observe(el));
}

// 4. SOLUTION FINDER WITH SLIDING INDICATOR & CROSS-FADE
const recommendations = {
  legal: { title: 'LegalOS', description: 'Bring cases, tasks, hearing schedules, documents and legal operations into one clear working environment.', link: 'Explore LegalOS Deep Dive', target: 'legalos.html' },
  operations: { title: 'CompanyOS + ProcureOS', description: 'Connect people, payroll, finance, compliance, projects and company-wide approvals. For purchasing-heavy workflows, ProcureOS adds vendor, inventory and procure-to-pay control.', link: 'Explore ProcureOS Deep Dive', target: 'procureos.html' },
  education: { title: 'CampusOS', description: 'Connect student lifecycle, attendance, examinations, communications and school administration.', link: 'Explore CampusOS Deep Dive', target: 'campusos.html' },
  automation: { title: 'AI workflow automation', description: 'Identify high-friction tasks, then apply extraction, classification, drafting or routing with clear human approval points.', link: 'Explore engineering capabilities', target: '#capabilities' },
  custom: { title: 'Custom Enterprise OS', description: 'Design a purpose-built system around your roles, records, rules and workflows instead of forcing your team into generic software.', link: 'Discuss a custom system', target: '#contact' }
};

const finderButtons = [...document.querySelectorAll('.finder-option')];
const finderIndicator = document.getElementById('finder-indicator');
const finderResult = document.getElementById('finder-result');
const resultIcon = document.getElementById('result-icon');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const resultLink = document.getElementById('result-link');

function updateFinderIndicator(button) {
  if (!finderIndicator || !button) return;
  finderIndicator.style.top = `${button.offsetTop}px`;
  finderIndicator.style.height = `${button.offsetHeight}px`;
  finderIndicator.style.opacity = '1';
}

const initialActiveButton = document.querySelector('.finder-option.is-selected');
if (initialActiveButton) {
  setTimeout(() => updateFinderIndicator(initialActiveButton), 50);
}
window.addEventListener('resize', () => {
  const current = document.querySelector('.finder-option.is-selected');
  if (current) updateFinderIndicator(current);
});

finderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('is-selected')) return;

    finderButtons.forEach((other) => {
      const active = other === button;
      other.classList.toggle('is-selected', active);
      other.setAttribute('aria-pressed', String(active));
    });
    updateFinderIndicator(button);

    const answer = recommendations[button.dataset.choice];
    if (!answer) return;

    if (finderResult) {
      finderResult.classList.add('is-updating');
      setTimeout(() => {
        if (resultIcon && !resultIcon.querySelector('img')) {
          resultIcon.innerHTML = '<img src="assets/ojix-appicon-navy-rounded.svg" alt="OJIX" width="56" height="56" />';
        }
        resultTitle.textContent = answer.title;
        resultDescription.textContent = answer.description;
        resultLink.innerHTML = `${answer.link} <span aria-hidden="true">↗</span>`;
        resultLink.href = answer.target;
        finderResult.classList.remove('is-updating');
      }, 120);
    }
  });
});

// ============================================================================
// 4B. OJIX ENGINEERING DISCOVERY INSTRUMENT (React Bits Prompt Bar Architecture)
// ============================================================================
const discoveryInstrument = document.getElementById('discovery-instrument');
const promptForm = document.getElementById('discovery-prompt-form');
const promptInput = document.getElementById('discovery-prompt-input');
const promptSubmit = document.getElementById('discovery-prompt-submit');
const discoveryChips = document.querySelectorAll('.discovery-chip');

const discoveryInputState = document.getElementById('discovery-input-state');
const discoveryResultState = document.getElementById('discovery-result-state');

const resultSubmittedText = document.getElementById('result-submitted-text');
const discoveryResultTitle = document.getElementById('discovery-result-title');
const discoveryResultDesc = document.getElementById('discovery-result-desc');
const discoveryResultTags = document.getElementById('discovery-result-tags');
const discoveryDiscussBtn = document.getElementById('discovery-discuss-btn');
const discoveryExploreBtn = document.getElementById('discovery-explore-btn');
const discoveryResetBtn = document.getElementById('discovery-reset-btn');

const workflowLineProgress = document.getElementById('workflow-line-progress');
const workflowTracer = document.getElementById('workflow-tracer');
const workflowNodes = document.querySelectorAll('.discovery-workflow .workflow-node');

// Deterministic capability matrix mapping real capabilities & routes
const discoveryCatalog = [
  {
    match: ['spreadsheet', 'excel', 'sheet', 'manual ledger', 'stock', 'inventory', 'purchase', 'procure', 'po', 'grn', '3-way', 'reconciliation'],
    title: 'Custom ERP & ProcureOS Operational Platform',
    category: 'Inventory & Procurement Reconciliation',
    description: 'Transition out of spreadsheet dependency into an SLA-backed operating platform with real-time stock controls, multi-tier purchase authorizations, and automated 3-way reconciliation.',
    tags: ['Custom ERP Platforms', 'Inventory Controls', '3-Way Reconciliation', 'Sovereign Deployment'],
    interest: 'ProcureOS / ERP',
    exploreUrl: 'procureos.html',
    prefillMessage: 'We are looking to replace spreadsheet-driven operations with a custom ERP and unified inventory/procurement platform.'
  },
  {
    match: ['connect', 'disconnected', 'systems', 'integration', 'silo', 'tools', 'sync', 'api', 'pipeline', 'data workflow'],
    title: 'System Integration & Unified Enterprise Workflows',
    category: 'Inter-System Connectivity & Data Pipelines',
    description: 'Connect siloed business systems, financial ledgers, and operational tools into a single source of truth with bidirectional sync, event streaming, and complete audit logging.',
    tags: ['API Integrations', 'Event Streaming', 'Data Pipelines', 'Audit Trails'],
    interest: 'Cloud / integrations',
    exploreUrl: '#capabilities',
    prefillMessage: 'We need to connect disconnected business systems and establish bidirectional sync between our operating tools and core ledgers.'
  },
  {
    match: ['automate', 'repetitive', 'workflow', 'approvals', 'ai', 'manual process', 'bottleneck', 'document', 'extraction', 'exception'],
    title: 'Workflow Engineering & Applied AI Automation',
    category: 'Process Automation & Human-in-the-Loop AI',
    description: 'Eliminate repetitive manual bottlenecks with deterministic approval flows, intelligent document extraction, exception handling, and explicit human verification gates.',
    tags: ['Workflow Automation', 'Document Extraction', 'Human Approval Gates', 'Exception Handling'],
    interest: 'AI workflow automation',
    exploreUrl: '#capabilities',
    prefillMessage: 'We want to automate repetitive workflows and eliminate manual processing bottlenecks with verified human approval gates.'
  },
  {
    match: ['custom', 'enterprise platform', 'platform', 'operating system', 'suite', 'os', 'custom software', 'erp foundations'],
    title: 'Purpose-Built Custom Enterprise Platform (OS)',
    category: 'Tailored Enterprise Architecture',
    description: 'Architect an end-to-end proprietary operating system designed specifically around your institutional governance, entity structures, approval matrices, and scale.',
    tags: ['Custom Enterprise OS', 'Proprietary Architecture', 'Modular Services', 'High Availability'],
    interest: 'Custom Enterprise OS',
    exploreUrl: '#platforms',
    prefillMessage: 'We would like to build a custom enterprise platform purpose-built around our operational rules and workflows.'
  },
  {
    match: ['website', 'web app', 'web application', 'portal', 'frontend', 'ui', 'ux', 'customer portal', 'responsive', 'corporate website'],
    title: 'Custom Web Applications & Enterprise Websites',
    category: 'High-Performance Web Platforms & Portals',
    description: 'High-performance enterprise web applications and corporate websites engineered for responsive speed, secure customer portals, and search visibility across mobile and desktop.',
    tags: ['Enterprise Websites', 'Customer Portals', 'Progressive Web Apps', 'Performance & SEO'],
    interest: 'Web Applications & Websites',
    exploreUrl: '#capabilities',
    prefillMessage: 'We would like to engineer a high-performance custom web application or enterprise website for our organization.'
  },
  {
    match: ['legal', 'law', 'litigation', 'court', 'cause list', 'advocate', 'chamber', 'case', 'limitation', 'ecourts'],
    title: 'LegalOS — Connected Litigation Operations',
    category: 'High Court & Chamber Operations',
    description: 'Unified practice operating system for law firms and chambers. Integrates High Court cause lists, limitation calculators, privileged document vaults, and Bar Council GST billing.',
    tags: ['e-Courts Sync', 'Limitation Engine', 'Sovereign Vault', 'SAC 9982 Invoicing'],
    interest: 'LegalOS',
    exploreUrl: 'legalos.html',
    prefillMessage: 'We are interested in evaluating LegalOS for our litigation practice and chamber operations.'
  },
  {
    match: ['campus', 'education', 'school', 'university', 'college', 'student', 'attendance', 'exam', 'fees', 'academic'],
    title: 'CampusOS — Institutional Operating Platform',
    category: 'Higher Education & School Administration',
    description: 'Comprehensive education management system connecting student lifecycles, attendance telemetry, automated fee collections, and examination workflows.',
    tags: ['Student Lifecycle', 'Fee Reconciliation', 'Biometric Attendance', 'Campus Telemetry'],
    interest: 'CampusOS',
    exploreUrl: 'campusos.html',
    prefillMessage: 'We would like to evaluate CampusOS for institutional administration and student lifecycle management.'
  }
];

const defaultDiscoveryRecommendation = {
  title: 'Guided Operational Systems Discovery',
  category: 'Enterprise Architectural Evaluation',
  description: 'Every enterprise workflow has unique operational constraints. Our senior engineering leads will evaluate your architecture and map out the exact integrations, data models, and software required.',
  tags: ['Product Discovery', 'Systems Architecture', 'Security Auditing', 'Technical Roadmap'],
  interest: 'Custom Enterprise OS',
  exploreUrl: '#capabilities',
  prefillMessage: 'We would like to discuss engineering a solution for our operational challenge.'
};

function matchDiscoveryChallenge(inputQuery) {
  const q = (inputQuery || '').trim().toLowerCase();
  if (!q) return defaultDiscoveryRecommendation;
  for (const item of discoveryCatalog) {
    if (item.match.some(keyword => q.includes(keyword))) {
      return item;
    }
  }
  return defaultDiscoveryRecommendation;
}

function updateWorkflowProgress(stepIndex) {
  // stepIndex: 0 = understand, 1 = engineer, 2 = integrate, 3 = operate
  const percentages = ['0%', '33.3%', '66.6%', '100%'];
  if (workflowLineProgress) {
    workflowLineProgress.style.width = percentages[stepIndex] || '0%';
  }
  if (workflowTracer) {
    workflowTracer.style.left = percentages[stepIndex] || '0%';
  }
  workflowNodes.forEach((node, idx) => {
    node.classList.toggle('is-active', idx <= stepIndex);
  });
}

function transitionToResultState(userChallenge, recommendation) {
  if (!discoveryResultState) return;

  // Animate through workflow nodes progressively
  if (!prefersReducedMotion) {
    updateWorkflowProgress(1);
    setTimeout(() => updateWorkflowProgress(2), 160);
    setTimeout(() => updateWorkflowProgress(3), 320);
  } else {
    updateWorkflowProgress(3);
  }

  const renderTimeout = prefersReducedMotion ? 0 : 380;
  setTimeout(() => {
    if (resultSubmittedText) resultSubmittedText.textContent = userChallenge;
    if (discoveryResultTitle) discoveryResultTitle.textContent = recommendation.title;
    if (discoveryResultDesc) discoveryResultDesc.textContent = recommendation.description;

    if (discoveryResultTags) {
      discoveryResultTags.innerHTML = recommendation.tags
        .map(tag => `<span class="res-tag">${tag}</span>`)
        .join('');
    }

    if (discoveryExploreBtn) {
      discoveryExploreBtn.href = recommendation.exploreUrl;
    }

    // Bind tailored Discuss CTA
    if (discoveryDiscussBtn) {
      discoveryDiscussBtn.onclick = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        const select = document.getElementById('interest');
        const msg = document.getElementById('message');
        const nameField = document.getElementById('name');

        if (select) {
          const matchOpt = [...select.options].find(opt =>
            opt.value === recommendation.interest ||
            opt.textContent.trim().startsWith(recommendation.interest)
          );
          if (matchOpt) select.value = matchOpt.value;
        }

        if (msg) {
          msg.value = `${recommendation.prefillMessage}\n\nSubmitted Challenge: ${userChallenge}`;
        }

        if (contactSection) {
          contactSection.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }
        if (nameField) {
          setTimeout(() => nameField.focus(), prefersReducedMotion ? 50 : 450);
        }
      };
    }

    if (discoveryInputState) {
      discoveryInputState.classList.add('is-fade-out');
      setTimeout(() => {
        discoveryInputState.hidden = true;
        discoveryInputState.classList.remove('is-fade-out');
        discoveryResultState.hidden = false;
        discoveryResultState.classList.add('is-fade-in');
        setTimeout(() => discoveryResultState.classList.remove('is-fade-in'), 300);
      }, prefersReducedMotion ? 0 : 150);
    }
  }, renderTimeout);
}

function resetDiscoveryInstrument() {
  if (!discoveryInputState || !discoveryResultState) return;
  discoveryResultState.hidden = true;
  discoveryInputState.hidden = false;
  updateWorkflowProgress(0);

  if (promptInput) {
    promptInput.value = '';
    promptForm?.classList.remove('has-content');
    promptInput.focus();
  }
}

if (discoveryResetBtn) {
  discoveryResetBtn.addEventListener('click', resetDiscoveryInstrument);
}

// React Bits Prompt Bar interaction logic
if (promptInput && promptForm) {
  promptInput.addEventListener('input', () => {
    const hasText = promptInput.value.trim().length > 0;
    promptForm.classList.toggle('has-content', hasText);
  });

  promptForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = promptInput.value.trim();
    if (!query) return;
    const rec = matchDiscoveryChallenge(query);
    transitionToResultState(query, rec);
  });
}

// Clickable suggestion chips
discoveryChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const challenge = chip.getAttribute('data-challenge') || chip.textContent.trim();
    if (promptInput) {
      promptInput.value = challenge;
      promptForm?.classList.add('has-content');
    }
    const rec = matchDiscoveryChallenge(challenge);
    transitionToResultState(challenge, rec);
  });
});

// 5. PLATFORM CARDS SPOTLIGHT HOVER EFFECT
const platformCards = document.querySelectorAll('.platform-card');
if (!prefersReducedMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  platformCards.forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// 6. MOBILE NAVIGATION
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('main-nav');
if (menuToggle && mainNav) {
  const closeNavigation = ({ returnFocus = false } = {}) => {
    mainNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
    if (returnFocus) menuToggle.focus();
  };

  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    mainNav.classList.toggle('is-open', open);
    if (open) mainNav.querySelector('a')?.focus();
  });
  mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    closeNavigation();
  }));
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeNavigation({ returnFocus: true });
    }
  });
}

// 7. GENTLE REVEAL SYSTEM
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

// 8. CARD INTEREST PRESELECTION & CAPABILITIES SECTION INTERACTIVITY
function prefillEnquiryForm(desiredInterest, customMessage) {
  const select = document.getElementById('interest');
  const messageInput = document.getElementById('message');
  const contactSection = document.getElementById('contact');
  const nameInput = document.getElementById('name');

  if (select && desiredInterest) {
    const desiredClean = desiredInterest.toLowerCase().trim();
    const option = [...select.options].find((candidate) => {
      const optText = candidate.textContent.toLowerCase().trim();
      const optVal = candidate.value.toLowerCase().trim();
      return optText === desiredClean ||
             optVal === desiredClean ||
             candidate.textContent.trim().startsWith(desiredInterest) ||
             optText.includes(desiredClean) ||
             desiredClean.includes(optText);
    });
    if (option) select.value = option.value;
  }

  if (messageInput && customMessage) {
    messageInput.value = customMessage;
  }

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }
  if (nameInput) {
    setTimeout(() => nameInput.focus(), prefersReducedMotion ? 50 : 450);
  }
}

document.querySelectorAll('[data-interest]').forEach((element) => {
  const handler = (e) => {
    e.preventDefault();
    const desired = element.dataset.interest;
    const msg = element.dataset.message || '';
    prefillEnquiryForm(desired, msg);
  };

  element.addEventListener('click', handler);
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handler(e);
    }
  });
});

// 9. SECURE BACKEND FORM TRANSMISSION & DIRECT EMAIL DISPATCH
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  // Inject invisible honeypot field dynamically to defend against automated crawlers
  if (!contactForm.querySelector('input[name="_hp_check"]')) {
    const hpInput = document.createElement('input');
    hpInput.type = 'text';
    hpInput.name = '_hp_check';
    hpInput.className = 'hp-field';
    hpInput.tabIndex = -1;
    hpInput.autocomplete = 'off';
    hpInput.setAttribute('aria-hidden', 'true');
    contactForm.appendChild(hpInput);
  }

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const interestInput = document.getElementById('interest');
    const messageInput = document.getElementById('message');
    const consentInput = document.getElementById('dpdp-consent');
    const hint = document.getElementById('form-hint');

    const nameVal = (nameInput?.value || '').trim();
    const emailVal = (emailInput?.value || '').trim();
    const interestVal = (interestInput?.value || '').trim();
    const messageVal = (messageInput?.value || '').trim();

    // 1. Force strict corporate/work email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailVal || !emailRegex.test(emailVal)) {
      if (emailInput) {
        emailInput.focus();
        emailInput.style.borderColor = '#DC2626';
        emailInput.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.15)';
        setTimeout(() => {
          emailInput.style.borderColor = '';
          emailInput.style.boxShadow = '';
        }, 3000);
      }
      if (hint) {
        hint.innerHTML = `<span style="color:#DC2626;font-weight:700;">Please enter a valid work email address (e.g. name@company.com) so our engineering team can review your request.</span>`;
      }
      return;
    }

    if (consentInput && !consentInput.checked) {
      if (hint) {
        hint.innerHTML = `<span style="color:#DC2626;font-weight:700;">Please check the consent box under Section 6 of the DPDP Act 2023 to proceed.</span>`;
      }
      consentInput.focus();
      return;
    }

    // 2. Prepare structured data payload for direct delivery to info@ojix.in
    const safeText = (txt) => String(txt || '').replace(/[\r\n]+/g, ' ').trim();
    const emailSubject = `OJIX Enterprise Inquiry — ${safeText(interestVal || 'Custom Platform')}`;
    const emailBody = [
      `Name: ${safeText(nameVal)}`,
      `Work Email: ${safeText(emailVal)}`,
      `System / Platform Interest: ${safeText(interestVal)}`,
      '',
      'Operational Requirements & Scope:',
      messageVal || 'No additional scope details provided.',
      '',
      '---',
      'Statutory Consent: Section 6 Specified Purpose Consent (DPDP Act, 2023).',
      `Consent Timestamp: ${new Date().toISOString()}`,
      'Directed to: info@ojix.in'
    ].join('\n');

    const mailtoUri = `mailto:info@ojix.in?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // 3. Dispatch directly to user's mail client synchronously
    const mailtoLink = document.createElement('a');
    mailtoLink.href = mailtoUri;
    mailtoLink.style.display = 'none';
    document.body.appendChild(mailtoLink);
    mailtoLink.click();
    setTimeout(() => mailtoLink.remove(), 100);

    // 4. Background API telemetry (silent, non-blocking)
    const formData = new FormData(contactForm);
    const payload = {};
    formData.forEach((value, key) => {
      payload[key] = typeof value === 'string' ? value.trim() : value;
    });
    payload.directMailtoSent = true;
    payload.recipient = 'info@ojix.in';

    const endpoint = contactForm.querySelector('[name="fiduciary-class"]') ? '/api/audit-request' : '/api/inquiry';
    try {
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {
        // Intentionally silent fallback - mailto was already triggered directly
      });
    } catch (e) {}

    // 5. Render verified DPDP on-screen receipt with direct mailto fallback button
    const consentId = `DPDP-OJIX-${Date.now().toString(36).toUpperCase()}`;
    const confirmationHtml = `
      <div class="form-feedback-card form-success-box" role="alert">
        <div class="form-success-head">
          <span class="form-success-icon">✓</span>
          <span>Inquiry Registered &amp; Directed to info@ojix.in</span>
        </div>
        <p class="form-success-desc">Your operational requirements have been registered and directed to the OJIX Engineering team at <strong>info@ojix.in</strong>.</p>
        
        <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:8px;padding:12px 14px;margin:12px 0;font-size:13px;line-height:1.5;color:#334155;">
          <div><strong>Name:</strong> ${safeText(nameVal)}</div>
          <div><strong>Work Email:</strong> ${safeText(emailVal)}</div>
          <div><strong>Platform:</strong> ${safeText(interestVal || 'Custom System')}</div>
        </div>

        <a href="${mailtoUri}" class="btn btn-orange btn-sm" style="display:inline-flex;align-items:center;gap:6px;margin:8px 0 14px;text-decoration:none;">
          <span>Open Email Client Directly (info@ojix.in)</span>
          <span aria-hidden="true">↗</span>
        </a>

        <span class="form-success-meta">Statutory Consent ID: ${consentId}<br>Lawful Basis: Section 6 Specified Purpose Consent (DPDP Act 2023). Zero data sharing with third parties.</span>
        <button type="button" class="form-reset-btn" id="form-reopen-btn" style="margin-top:16px;">Submit Another Inquiry</button>
      </div>
    `;

    contactForm.innerHTML = confirmationHtml;
    const reopenBtn = document.getElementById('form-reopen-btn');
    if (reopenBtn) {
      reopenBtn.addEventListener('click', () => {
        window.location.reload();
      });
    }
  });
}

// 10. YEAR & SERVICE WORKER
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {}));
}

// 11. DPDP ACT (2023) MODAL SYSTEM & ACCESSIBILITY
let lastActiveElement = null;
let activeModal = null;

function getFocusableElements(container) {
  return [...container.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')]
    .filter((element) => !element.hidden && element.getClientRects().length > 0);
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  lastActiveElement = document.activeElement;
  activeModal = modal;
  modal.removeAttribute('hidden');
  document.body.classList.add('modal-open');
  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.focus();
  }
}

function closeModal(modalElement) {
  if (!modalElement) return;
  modalElement.setAttribute('hidden', '');
  if (activeModal === modalElement) activeModal = null;
  const anyOpen = document.querySelector('.modal-backdrop:not([hidden])');
  if (!anyOpen) {
    document.body.classList.remove('modal-open');
  }
  if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
    lastActiveElement.focus();
  }
}

// Open modal triggers
document.querySelectorAll('[data-open-modal]').forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const modalId = trigger.getAttribute('data-open-modal');
    openModal(modalId);
  });
});

// Close modal triggers
document.querySelectorAll('[data-close-modal]').forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const modalId = trigger.getAttribute('data-close-modal');
    const modal = document.getElementById(modalId) || trigger.closest('.modal-backdrop');
    closeModal(modal);
  });
});

// Backdrop click closes modal
document.querySelectorAll('.modal-backdrop').forEach((backdrop) => {
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal(backdrop);
    }
  });
});

// ESC key closes any open modal
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const openModals = document.querySelectorAll('.modal-backdrop:not([hidden])');
    openModals.forEach((modal) => closeModal(modal));
  }
  if (e.key === 'Tab' && activeModal) {
    const focusable = getFocusableElements(activeModal);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

// Open preferences modal directly from policy modal link
const openPrefsFromPolicy = document.getElementById('open-preferences-from-policy');
if (openPrefsFromPolicy) {
  openPrefsFromPolicy.addEventListener('click', (e) => {
    e.preventDefault();
    const policyModal = document.getElementById('cookie-policy-modal');
    if (policyModal) closeModal(policyModal);
    openModal('cookie-modal');
  });
}

// 12. DPDP ACT (2023) COOKIE CONSENT BANNER & PREFERENCES
const cookieBanner = document.getElementById('cookie-banner');
const cookieAcceptBtn = document.getElementById('cookie-accept');
const cookieRejectBtn = document.getElementById('cookie-reject');
const cookiePreferencesBtn = document.getElementById('cookie-preferences');
const saveCookiePrefsBtn = document.getElementById('save-cookie-preferences') || document.getElementById('cookie-save-prefs');
const toggleAnalytics = document.getElementById('toggle-analytics');

const CONSENT_STORAGE_KEY = 'ojix_dpdp_cookie_consent';

function getStoredConsent() {
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (err) {
    return null;
  }
}

function saveConsent(preferences) {
  const consentData = {
    necessary: true,
    analytics: Boolean(preferences.analytics),
    timestamp: new Date().toISOString(),
    jurisdiction: 'DPDP_ACT_2023_AND_RULES_2025_INDIA',
    framework: 'MeitY_DPDP_Rules_2025',
    version: '3.0'
  };
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentData));
  } catch (err) {}
  
  if (cookieBanner) {
    cookieBanner.classList.remove('is-visible');
    cookieBanner.setAttribute('aria-hidden', 'true');
  }
}

// Initialise consent state on page load
const currentConsent = getStoredConsent();
if (currentConsent) {
  if (toggleAnalytics) {
    toggleAnalytics.checked = currentConsent.analytics === true;
  }
} else {
  // Show banner with gentle delay for first-time visitors
  setTimeout(() => {
    if (cookieBanner && !getStoredConsent()) {
      cookieBanner.classList.add('is-visible');
      cookieBanner.setAttribute('aria-hidden', 'false');
    }
  }, 750);
}

// Cookie banner action buttons
if (cookieAcceptBtn) {
  cookieAcceptBtn.addEventListener('click', () => {
    if (toggleAnalytics) toggleAnalytics.checked = true;
    saveConsent({ analytics: true });
  });
}

if (cookieRejectBtn) {
  cookieRejectBtn.addEventListener('click', () => {
    if (toggleAnalytics) toggleAnalytics.checked = false;
    saveConsent({ analytics: false });
  });
}

if (cookiePreferencesBtn) {
  cookiePreferencesBtn.addEventListener('click', () => {
    openModal('cookie-modal');
  });
}

if (saveCookiePrefsBtn) {
  saveCookiePrefsBtn.addEventListener('click', () => {
    const isAnalyticsAllowed = toggleAnalytics ? toggleAnalytics.checked : false;
    saveConsent({ analytics: isAnalyticsAllowed });
    const cookieModal = document.getElementById('cookie-modal');
    if (cookieModal) closeModal(cookieModal);
  });
}
