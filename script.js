// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ✅ Intersection Observer for Hero & Skills Sections
const animatedSections = document.querySelectorAll('.hero, .skills');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

animatedSections.forEach(section => {
  observer.observe(section);
});

// ✅ Immediately Show Social Icons on Page Load (No Scroll Needed)
document.addEventListener("DOMContentLoaded", function () {
  const socialLinks = document.querySelector('.social-links');
  socialLinks.classList.add('animate');
});

// ✅ Tooltip + Icon Pop + Delayed Redirect
document.querySelectorAll('.clicked-tooltip').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = this.href;
    const icon = this.querySelector('i');

    // Tooltip show
    this.classList.add('show-tooltip');

    // 🔥 ICON POP-UP EFFECT
    if (icon) {
      icon.classList.remove('icon-pop'); // reset animation
      void icon.offsetWidth; // reflow
      icon.classList.add('icon-pop');
    }

    // Hide tooltip after 1.2s
    setTimeout(() => {
      this.classList.remove('show-tooltip');
    }, 1200);

    // Open link after 1.8s
    setTimeout(() => {
      window.open(href, '_blank');
    }, 1800);
  });
});