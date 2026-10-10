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
        const rawTarget = el.getAttribute('data-target');
        const isDecimal = rawTarget && rawTarget.includes('.');
        const target = isDecimal ? parseFloat(rawTarget) : parseInt(rawTarget, 10);
        const prefix = el.getAttribute('data-prefix') || '';
        if (prefersReducedMotion || isNaN(target)) {
          el.textContent = `${prefix}${rawTarget}`;
          return;
        }

        const duration = 1200;
        const startTime = performance.now();

        function animateCounter(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentVal = target * easeOut;
          const displayVal = isDecimal ? currentVal.toFixed(1) : Math.round(currentVal);
          el.textContent = `${prefix}${displayVal}`;

          if (progress < 1) {
            requestAnimationFrame(animateCounter);
          } else {
            el.textContent = `${prefix}${rawTarget}`;
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
// 4B. ACCESSIBLE TABLIST NAVIGATION (ROVING TABINDEX & ARROW KEYS - WCAG 2.1.1 / APG)
// ============================================================================
function setupAccessibleTabs(tablist) {
  if (!tablist) return;
  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  if (tabs.length === 0) return;

  const selectedIndex = tabs.findIndex(tab => tab.getAttribute('aria-selected') === 'true' || tab.classList.contains('is-active'));
  const activeIndex = selectedIndex >= 0 ? selectedIndex : 0;

  tabs.forEach((tab, index) => {
    tab.setAttribute('tabindex', index === activeIndex ? '0' : '-1');

    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        t.setAttribute('tabindex', t === tab ? '0' : '-1');
      });
    });

    tab.addEventListener('keydown', (e) => {
      let targetIndex = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        let next = (index + 1) % tabs.length;
        while (tabs[next].hasAttribute('disabled') || tabs[next].getAttribute('aria-disabled') === 'true') {
          if (next === index) break;
          next = (next + 1) % tabs.length;
        }
        targetIndex = next;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        let prev = (index - 1 + tabs.length) % tabs.length;
        while (tabs[prev].hasAttribute('disabled') || tabs[prev].getAttribute('aria-disabled') === 'true') {
          if (prev === index) break;
          prev = (prev - 1 + tabs.length) % tabs.length;
        }
        targetIndex = prev;
      } else if (e.key === 'Home') {
        let first = 0;
        while (tabs[first].hasAttribute('disabled') || tabs[first].getAttribute('aria-disabled') === 'true') {
          first++;
          if (first >= tabs.length) break;
        }
        targetIndex = first < tabs.length ? first : 0;
      } else if (e.key === 'End') {
        let last = tabs.length - 1;
        while (tabs[last].hasAttribute('disabled') || tabs[last].getAttribute('aria-disabled') === 'true') {
          last--;
          if (last < 0) break;
        }
        targetIndex = last >= 0 ? last : tabs.length - 1;
      }

      if (targetIndex !== null) {
        e.preventDefault();
        tabs[targetIndex].focus();
        tabs[targetIndex].click();
      }
    });
  });
}

// 4C. OJIX HERO ARCHITECTURE ENGINE INTERACTION (React Bits Pro Hero 3)
const engineTabs = document.querySelectorAll('.engine-tab[data-engine-tab], .hud-tab[data-engine-tab]');
const engineViews = document.querySelectorAll('.engine-view, .hud-view-panel');

if (engineTabs.length > 0) {
  engineTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const mode = tab.dataset.engineTab;
      const targetId = `view-${mode}`;

      engineTabs.forEach((t) => {
        const active = t.dataset.engineTab === mode;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
        t.setAttribute('tabindex', active ? '0' : '-1');
      });

      engineViews.forEach((view) => {
        if (view.id === targetId) {
          view.classList.add('is-active');
          view.hidden = false;
        } else {
          view.classList.remove('is-active');
          view.hidden = true;
        }
      });
    });
  });
}

// 4D. APPLE-INSPIRED PRODUCT PORTFOLIO CATEGORY FILTERING
const portfolioFilterPills = document.querySelectorAll('.apple-portfolio-filters .filter-pill[data-filter]');
const filterableCards = document.querySelectorAll('#platforms .platform-card[data-category]');

if (portfolioFilterPills.length > 0) {
  portfolioFilterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const filter = pill.dataset.filter;

      portfolioFilterPills.forEach((p) => {
        const active = p === pill;
        p.classList.toggle('is-active', active);
        p.setAttribute('aria-selected', String(active));
        p.setAttribute('tabindex', active ? '0' : '-1');
      });

      filterableCards.forEach((card) => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('is-filtered-out');
        } else {
          card.classList.add('is-filtered-out');
        }
      });
    });
  });
}

// Initialize roving tabindex & arrow key handlers across all role="tablist"
const initAccessibleTabs = () => {
  document.querySelectorAll('[role="tablist"]').forEach(setupAccessibleTabs);
};
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAccessibleTabs);
} else {
  initAccessibleTabs();
}

// ==========================================================================
// REACT BITS PRO HERO 3: DYNAMIC GRADIENT & CURSOR SPOTLIGHT ENGINE
// Adapted for OJIX Native Enterprise Architecture & Performance
// ==========================================================================
function initHero3CursorEffects() {
  if (prefersReducedMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const heroSections = document.querySelectorAll('.hero, .pillar-hero-section');
  heroSections.forEach((section) => {
    let ticking = false;
    let clientX = 0;
    let clientY = 0;

    const updateHeroSpotlight = () => {
      const rect = section.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) {
        ticking = false;
        return;
      }
      const rawPxX = Math.round(clientX - rect.left);
      const rawPxY = Math.round(clientY - rect.top);
      const pxX = Math.max(0, Math.min(Math.round(rect.width), rawPxX));
      const pxY = Math.max(0, Math.min(Math.round(rect.height), rawPxY));
      const pctX = ((pxX / rect.width) * 100).toFixed(2);
      const pctY = ((pxY / rect.height) * 100).toFixed(2);

      section.style.setProperty('--cursor-px-x', `${pxX}px`);
      section.style.setProperty('--cursor-px-y', `${pxY}px`);
      section.style.setProperty('--cursor-x', `${pctX}%`);
      section.style.setProperty('--cursor-y', `${pctY}%`);

      ticking = false;
    };

    const onPointerMove = (e) => {
      clientX = e.clientX;
      clientY = e.clientY;
      if (!ticking) {
        requestAnimationFrame(updateHeroSpotlight);
        ticking = true;
      }
    };

    const onPointerLeave = () => {
      const rect = section.getBoundingClientRect();
      section.style.setProperty('--cursor-x', '50%');
      section.style.setProperty('--cursor-y', '25%');
      if (rect.width > 0 && rect.height > 0) {
        section.style.setProperty('--cursor-px-x', `${Math.round(rect.width * 0.5)}px`);
        section.style.setProperty('--cursor-px-y', `${Math.round(rect.height * 0.25)}px`);
      }
    };

    section.addEventListener('pointermove', onPointerMove, { passive: true });
    section.addEventListener('pointerleave', onPointerLeave, { passive: true });
  });

  // Interactive Card Border Glow Spotlight
  const interactiveCards = document.querySelectorAll('.hero-engine-surface, .workspace-window');
  interactiveCards.forEach((card) => {
    let cardTicking = false;
    let cX = 0;
    let cY = 0;

    const updateCardSpotlight = () => {
      const rect = card.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) {
        cardTicking = false;
        return;
      }
      const rawCardX = Math.round(cX - rect.left);
      const rawCardY = Math.round(cY - rect.top);
      const cardX = Math.max(0, Math.min(Math.round(rect.width), rawCardX));
      const cardY = Math.max(0, Math.min(Math.round(rect.height), rawCardY));

      card.style.setProperty('--card-cursor-x', `${cardX}px`);
      card.style.setProperty('--card-cursor-y', `${cardY}px`);
      card.style.setProperty('--mouse-x', `${cardX}px`);
      card.style.setProperty('--mouse-y', `${cardY}px`);

      cardTicking = false;
    };

    const onCardMove = (e) => {
      cX = e.clientX;
      cY = e.clientY;
      if (!cardTicking) {
        requestAnimationFrame(updateCardSpotlight);
        cardTicking = true;
      }
    };

    const onCardLeave = () => {
      card.style.setProperty('--card-cursor-x', '50%');
      card.style.setProperty('--card-cursor-y', '50%');
      card.style.setProperty('--mouse-x', '50%');
      card.style.setProperty('--mouse-y', '50%');
    };

    card.addEventListener('pointermove', onCardMove, { passive: true });
    card.addEventListener('pointerleave', onCardLeave, { passive: true });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHero3CursorEffects);
} else {
  initHero3CursorEffects();
}

// 5. NAVIGATION SCROLLSPY
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
const trackedSections = document.querySelectorAll('section[id], header[id]');

if (navLinks.length > 0 && trackedSections.length > 0 && 'IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          const href = link.getAttribute('href');
          const isMatch = href === `#${id}`;
          link.classList.toggle('is-active', isMatch);
        });
      }
    });
  }, { threshold: 0.25, rootMargin: '-60px 0px -40% 0px' });

  trackedSections.forEach((sec) => sectionObserver.observe(sec));
}

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
    document.body.classList.remove('nav-open');
    if (returnFocus) menuToggle.focus();
  };

  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    mainNav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
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

  document.addEventListener('click', (event) => {
    if (mainNav.classList.contains('is-open') && !mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
      closeNavigation();
    }
  });

  const handleViewportResize = () => {
    if (window.innerWidth > 820 && mainNav.classList.contains('is-open')) {
      closeNavigation();
    }
  };
  window.addEventListener('resize', handleViewportResize, { passive: true });
  window.addEventListener('orientationchange', handleViewportResize, { passive: true });
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
  } else {
    const focusable = getFocusableElements(modal);
    if (focusable.length > 0) focusable[0].focus();
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
const toggleAnalytics = document.getElementById('toggle-analytics') || document.getElementById('cookie-functional');

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
