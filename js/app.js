/* =========================================================
   ABSOLUT AURAA — App Initialization
   ========================================================= */

(function() {
  // ── Preloader ──
  const preloader = document.getElementById('preloader');

  window.addEventListener('load', () => {
    setTimeout(() => {
      if (preloader) {
        preloader.classList.add('loaded');
        // Remove from DOM after transition
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 600);
      }
    }, 800);
  });

  // Fallback: Remove preloader after 3 seconds regardless
  setTimeout(() => {
    if (preloader && !preloader.classList.contains('loaded')) {
      preloader.classList.add('loaded');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 600);
    }
  }, 3000);

  // ── Smooth Scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ── Current year in footer ──
  const yearSpan = document.querySelector('.footer__bottom span:first-child');
  if (yearSpan) {
    yearSpan.innerHTML = yearSpan.innerHTML.replace('2026', new Date().getFullYear());
  }

  // ── Newsletter form ──
  const newsletterForm = document.querySelector('.footer__newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      const btn = newsletterForm.querySelector('button');

      if (input.value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        btn.innerHTML = '✓';
        btn.style.background = 'var(--success)';
        input.value = '';
        setTimeout(() => {
          btn.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
          btn.style.background = '';
        }, 2000);
      }
    });
  }

  // ── Lazy load images with IntersectionObserver ──
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          imgObserver.unobserve(img);
        }
      });
    }, { rootMargin: '100px' });

    lazyImages.forEach(img => imgObserver.observe(img));
  }

  // ── Console branding ──
  console.log(
    '%c✨ ABSOLUT AURAA Cosmetic Clinic',
    'color: #B8962E; font-size: 18px; font-weight: bold; font-family: Georgia, serif;'
  );
  console.log(
    '%cWhere Science Meets Elegance',
    'color: #6B5D4D; font-size: 12px; font-family: Georgia, serif;'
  );
})();
