/* =========================================================
   ABSOLUT AURAA — Booking Form
   Client-side validation and UX
   ========================================================= */

(function() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  const submitBtn = document.getElementById('bookSubmit');

  // Set minimum date to today
  const dateInput = document.getElementById('bookDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  // Validation rules
  const validators = {
    bookName: {
      validate: (val) => val.trim().length >= 2,
      errorId: 'bookNameError'
    },
    bookPhone: {
      validate: (val) => /^[\+]?[\d\s-]{10,15}$/.test(val.trim()),
      errorId: 'bookPhoneError'
    },
    bookEmail: {
      validate: (val) => val === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      errorId: 'bookEmailError'
    },
    bookTreatment: {
      validate: (val) => val !== '',
      errorId: 'bookTreatmentError'
    }
  };

  function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    const validator = validators[fieldId];
    if (!field || !validator) return true;

    const isValid = validator.validate(field.value);
    const group = field.closest('.form-group');

    if (isValid) {
      group.classList.remove('form-group--error');
    } else {
      group.classList.add('form-group--error');
    }

    return isValid;
  }

  // Real-time validation on blur
  Object.keys(validators).forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (field) {
      field.addEventListener('blur', () => validateField(fieldId));
      field.addEventListener('input', () => {
        const group = field.closest('.form-group');
        if (group.classList.contains('form-group--error')) {
          validateField(fieldId);
        }
      });
    }
  });

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    Object.keys(validators).forEach(fieldId => {
      if (!validateField(fieldId)) isValid = false;
    });

    if (!isValid) {
      // Focus first error field
      const firstError = form.querySelector('.form-group--error .form-input, .form-group--error .form-select');
      if (firstError) firstError.focus();
      return;
    }

    // Simulate submission
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span style="display:inline-flex;align-items:center;gap:0.5rem;">Sending... <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:rotate 1s linear infinite"><circle cx="12" cy="12" r="10" stroke-dasharray="30 60"/></svg></span>';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    setTimeout(() => {
      submitBtn.innerHTML = '✓ Request Sent Successfully!';
      submitBtn.style.background = 'var(--success)';
      submitBtn.style.opacity = '1';

      // Reset after delay
      setTimeout(() => {
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = '';
      }, 3000);
    }, 1500);
  });
})();
