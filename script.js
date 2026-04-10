// TrueClean Solutions LLC — Site Script

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  mobileMenu.classList.remove('open');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

// ===== CONTACT FORM =====
function handleSubmit(event) {
  event.preventDefault();

  const form = document.getElementById('contact-form');
  const success = document.getElementById('form-success');

  // Collect form data (wire this up to your CRM / GoHighLevel later)
  const data = {
    name:    form.name.value,
    phone:   form.phone.value,
    email:   form.email.value,
    service: form.service.value,
    message: form.message.value,
    smsConsent: form['sms-consent'].checked,
  };

  console.log('Form submitted:', data);

  // Show success message
  form.style.display = 'none';
  success.style.display = 'block';

  // Optional: send to a backend / webhook
  // fetch('/api/contact', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
}

// ===== SMOOTH SCROLL for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
