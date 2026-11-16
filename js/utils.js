/* =========================================================
   ABSOLUT AURAA — Utilities
   Shared helper functions
   ========================================================= */

const Utils = {
  /**
   * Debounce a function
   */
  debounce(fn, delay = 100) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  },

  /**
   * Throttle a function
   */
  throttle(fn, limit = 100) {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        fn(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  /**
   * Animate a number counter
   */
  animateCounter(el, target, duration = 2000) {
    const decimals = parseInt(el.dataset.decimals) || 0;
    const start = 0;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = start + (target - start) * ease;

      if (decimals > 0) {
        el.textContent = current.toFixed(decimals);
      } else {
        el.textContent = Math.floor(current).toLocaleString();
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        if (decimals > 0) {
          el.textContent = target.toFixed(decimals);
        } else {
          el.textContent = target.toLocaleString();
        }
        // Add suffix if needed
        if (target >= 1000 && decimals === 0) {
          // Keep the number as is
        }
      }
    };

    requestAnimationFrame(update);
  },

  /**
   * Get viewport width
   */
  getVW() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  },

  /**
   * Check if element is in viewport
   */
  isInViewport(el, offset = 0) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
      rect.bottom >= 0
    );
  },

  /**
   * Lock body scroll
   */
  lockScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = this.getScrollbarWidth() + 'px';
  },

  /**
   * Unlock body scroll
   */
  unlockScroll() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  },

  /**
   * Get scrollbar width
   */
  getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }
};
