/* =========================================================
   ABSOLUT AURAA — Testimonials Carousel
   Auto-playing carousel with dots and arrows
   ========================================================= */

(function() {
  const track = document.getElementById('testimonialTrack');
  const dotsContainer = document.getElementById('testimonialDots');
  const prevBtn = document.getElementById('testimonialPrev');
  const nextBtn = document.getElementById('testimonialNext');

  if (!track) return;

  const slides = track.querySelectorAll('.testimonials__slide');
  let currentIndex = 0;
  let slidesPerView = 3;
  let autoplayTimer;

  function updateSlidesPerView() {
    const vw = window.innerWidth;
    if (vw >= 1024) slidesPerView = 3;
    else if (vw >= 768) slidesPerView = 2;
    else slidesPerView = 1;
  }

  function getTotalPages() {
    return Math.max(1, slides.length - slidesPerView + 1);
  }

  function goTo(index) {
    const maxIndex = getTotalPages() - 1;
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    const percentage = (currentIndex * 100) / slidesPerView;
    track.style.transform = `translateX(-${percentage}%)`;
    updateDots();
  }

  function next() {
    if (currentIndex < getTotalPages() - 1) {
      goTo(currentIndex + 1);
    } else {
      goTo(0);
    }
  }

  function prev() {
    if (currentIndex > 0) {
      goTo(currentIndex - 1);
    } else {
      goTo(getTotalPages() - 1);
    }
  }

  function createDots() {
    dotsContainer.innerHTML = '';
    const total = getTotalPages();
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('button');
      dot.className = 'testimonials__dot' + (i === 0 ? ' testimonials__dot--active' : '');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.testimonials__dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('testimonials__dot--active', i === currentIndex);
    });
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(next, 5000);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  // Event listeners
  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); startAutoplay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); startAutoplay(); });

  // Pause on hover
  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);

  // Touch swipe
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoplay();
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    startAutoplay();
  }, { passive: true });

  // Responsive
  window.addEventListener('resize', Utils.debounce(() => {
    updateSlidesPerView();
    createDots();
    goTo(Math.min(currentIndex, getTotalPages() - 1));
  }, 200));

  // Init
  updateSlidesPerView();
  createDots();
  goTo(0);
  startAutoplay();
})();
