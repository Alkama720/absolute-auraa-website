/* =========================================================
   ABSOLUT AURAA — Navigation
   Sticky nav, mobile menu, smooth scroll, active section
   ========================================================= */

(function() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navOverlay = document.getElementById('navOverlay');
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section[id]');

  // ── Sticky Nav ──
  function handleScroll() {
    const scrollY = window.scrollY;

    if (scrollY > 80) {
      navbar.classList.remove('nav--transparent');
      navbar.classList.add('nav--solid');
    } else {
      navbar.classList.add('nav--transparent');
      navbar.classList.remove('nav--solid');
    }

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      if (scrollY > 600) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    // Update active nav link
    updateActiveSection();
  }

  window.addEventListener('scroll', Utils.throttle(handleScroll, 50));
  handleScroll(); // Initial call

  // ── Mobile Menu ──
  if (navToggle && navOverlay) {
    navToggle.addEventListener('click', () => {
      const isOpen = navOverlay.classList.contains('active');

      if (isOpen) {
        navToggle.classList.remove('active');
        navOverlay.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        Utils.unlockScroll();
      } else {
        navToggle.classList.add('active');
        navOverlay.classList.add('active');
        navToggle.setAttribute('aria-expanded', 'true');
        Utils.lockScroll();
      }
    });

    // Close on link click
    navOverlay.querySelectorAll('.nav__link, .btn').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navOverlay.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        Utils.unlockScroll();
      });
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navOverlay.classList.contains('active')) {
        navToggle.classList.remove('active');
        navOverlay.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        Utils.unlockScroll();
      }
    });
  }

  // ── Active Section Highlight ──
  function updateActiveSection() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('nav__link--active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('nav__link--active');
      }
    });
  }

  // ── Back to Top ──
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
