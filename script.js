
// ===== Dark Mode =====
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ===== Navbar Toggle =====
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== Scroll Animation for Sections =====
const sections = document.querySelectorAll('.services, .portfolio, .contact');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight / 1.2;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.classList.add('visible');
    }
  });
});

// ===== Smooth Scroll for Navbar Links =====
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });

    // Close menu after click (for mobile)
    navLinks.classList.remove('active');
  });
});

// ===== Smooth Scroll for Any Contact Button =====
document.querySelectorAll('a[href="#contact"]').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===== Active Menu Highlight on Scroll =====
const navItems = document.querySelectorAll('.nav-links a');
const pageSections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  pageSections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ===== Scroll To Top When Clicking Logo =====
const logo = document.querySelector('.logo');
logo.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fade-up animation for Contact Section
const contactSection = document.querySelector('.contact');

window.addEventListener('scroll', () => {
  const sectionTop = contactSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 100;

  if (sectionTop < triggerPoint) {
    contactSection.classList.add('visible');
  }
});
