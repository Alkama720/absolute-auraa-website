/* =========================================================
   ABSOLUT AURAA — Animations
   Scroll-triggered animations, counters, parallax, mouse glow
   ========================================================= */

(function() {
  // ── Scroll Animations (IntersectionObserver) ──
  const animatedElements = document.querySelectorAll(
    '.animate-on-scroll, .animate-scale, .animate-left, .animate-right'
  );

  if (animatedElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    animatedElements.forEach(el => observer.observe(el));
  }

  // ── Counter Animations ──
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.dataset.count);
          Utils.animateCounter(el, target, 2200);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(el => counterObserver.observe(el));

  // ── Mouse Follow Glow ──
  const mouseGlow = document.getElementById('mouseGlow');
  if (mouseGlow && Utils.getVW() >= 1024) {
    document.addEventListener('mousemove', Utils.throttle((e) => {
      mouseGlow.style.left = e.clientX + 'px';
      mouseGlow.style.top = e.clientY + 'px';
    }, 30));
  }

  // ── Parallax Effect ──
  const parallaxElements = document.querySelectorAll('.parallax');
  if (parallaxElements.length > 0 && Utils.getVW() >= 1024) {
    window.addEventListener('scroll', Utils.throttle(() => {
      const scrollY = window.scrollY;
      parallaxElements.forEach(el => {
        const speed = parseFloat(el.dataset.speed) || 0.1;
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    }, 16));
  }
})();
