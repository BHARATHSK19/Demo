/**
 * React Bits Pro: Scroll Stack Component
 * Native ESM implementation for high-performance scroll-driven card stacking.
 * Cards pin, stack, scale, dim, and blur as subsequent cards scroll over them.
 * 
 * Reference: https://pro.reactbits.dev/docs/components/scroll-stack
 */

export function initScrollStack(containerElement, options = {}) {
  const container = typeof containerElement === 'string'
    ? document.querySelector(containerElement)
    : containerElement;

  if (!container) return null;

  const config = {
    peek: parseFloat(container.dataset.peek || options.peek || 26),
    scaleStep: parseFloat(container.dataset.scaleStep || options.scaleStep || 0.038),
    dim: parseFloat(container.dataset.dim || options.dim || 0.12),
    blur: parseFloat(container.dataset.blur || options.blur || 1.5),
    topOffset: parseFloat(container.dataset.topOffset || options.topOffset || 96),
    ...options
  };

  const getVisibleCards = () => {
    return Array.from(container.querySelectorAll('.scroll-stack-card')).filter(
      (card) => !card.classList.contains('is-filtered-out') && card.offsetParent !== null
    );
  };

  function updateIndices() {
    const visibleCards = getVisibleCards();
    visibleCards.forEach((card, idx) => {
      card.style.setProperty('--stack-index', idx);
      card.style.setProperty('--stack-z', idx + 1);
      card.style.setProperty('--stack-peek', `${config.peek}px`);
      card.style.setProperty('--stack-top', `${config.topOffset}px`);
    });
  }

  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateStackEffects);
  }

  function updateStackEffects() {
    ticking = false;
    const visibleCards = getVisibleCards();
    if (!visibleCards.length) return;

    const windowH = window.innerHeight;

    visibleCards.forEach((card, idx) => {
      // Check subsequent cards covering this card
      let totalCoverProgress = 0;
      for (let j = idx + 1; j < visibleCards.length; j++) {
        const nextCard = visibleCards[j];
        const nextRect = nextCard.getBoundingClientRect();
        const nextStickyTop = config.topOffset + j * config.peek;
        
        // Progress of nextCard moving from its initial view into sticky position
        const dist = nextRect.top - nextStickyTop;
        const triggerDistance = windowH * 0.55;
        if (dist < triggerDistance) {
          const progress = Math.max(0, Math.min(1, 1 - (dist / triggerDistance)));
          totalCoverProgress += progress;
        }
      }

      // Calculate stacking transformations
      const scale = Math.max(0.86, 1 - totalCoverProgress * config.scaleStep);
      const opacity = Math.max(0.45, 1 - totalCoverProgress * config.dim);
      const blurPx = Math.min(6, totalCoverProgress * config.blur);
      const shiftY = totalCoverProgress * -6;

      card.style.setProperty('--stack-scale', scale.toFixed(3));
      card.style.setProperty('--stack-opacity', opacity.toFixed(2));
      card.style.setProperty('--stack-blur', `${blurPx.toFixed(1)}px`);
      card.style.setProperty('--stack-y', `${shiftY.toFixed(1)}px`);
    });
  }

  // Bind events
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    updateIndices();
    onScroll();
  }, { passive: true });

  const refreshHandler = () => {
    updateIndices();
    setTimeout(onScroll, 40);
  };
  window.addEventListener('scrollstack:refresh', refreshHandler);

  // Initial call
  updateIndices();
  onScroll();

  return {
    refresh: refreshHandler,
    destroy: () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scrollstack:refresh', refreshHandler);
    }
  };
}
