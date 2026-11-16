/* =========================================================
   ABSOLUT AURAA — Before & After Slider
   Interactive comparison slider
   ========================================================= */

(function() {
  const slider = document.getElementById('beforeAfterSlider');
  if (!slider) return;

  const handle = document.getElementById('beforeAfterHandle');
  const beforeImg = slider.querySelector('.before-after__img--before');
  let isDragging = false;

  function updatePosition(x) {
    const rect = slider.getBoundingClientRect();
    let percentage = ((x - rect.left) / rect.width) * 100;
    percentage = Math.max(5, Math.min(95, percentage));

    handle.style.left = percentage + '%';
    beforeImg.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
  }

  // Mouse events
  handle.addEventListener('mousedown', (e) => {
    isDragging = true;
    e.preventDefault();
  });

  slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    updatePosition(e.clientX);
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      updatePosition(e.clientX);
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch events
  handle.addEventListener('touchstart', (e) => {
    isDragging = true;
    e.preventDefault();
  });

  slider.addEventListener('touchstart', (e) => {
    isDragging = true;
    updatePosition(e.touches[0].clientX);
  });

  document.addEventListener('touchmove', (e) => {
    if (isDragging) {
      updatePosition(e.touches[0].clientX);
    }
  });

  document.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Keyboard accessibility
  handle.setAttribute('tabindex', '0');
  handle.setAttribute('role', 'slider');
  handle.setAttribute('aria-label', 'Comparison slider');
  handle.setAttribute('aria-valuemin', '0');
  handle.setAttribute('aria-valuemax', '100');
  handle.setAttribute('aria-valuenow', '50');

  handle.addEventListener('keydown', (e) => {
    const rect = slider.getBoundingClientRect();
    let current = parseFloat(handle.style.left) || 50;

    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      current = Math.max(5, current - 2);
      e.preventDefault();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      current = Math.min(95, current + 2);
      e.preventDefault();
    }

    handle.style.left = current + '%';
    beforeImg.style.clipPath = `inset(0 ${100 - current}% 0 0)`;
    handle.setAttribute('aria-valuenow', Math.round(current));
  });
})();
