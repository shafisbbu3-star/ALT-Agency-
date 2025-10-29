// Dark Mode Toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Navbar Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll Animation for Sections
const sections = document.querySelectorAll('.services, .portfolio, .contact');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight / 1.2;
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < trigger) {
      section.classList.add('visible');
    }
  });
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    navLinks.classList.remove('active');
  });
});

// Smooth Scroll for Contact Buttons
document.querySelectorAll('a[href="#contact"]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  });
});

// Active Menu Highlight on Scroll
const navItems = document.querySelectorAll('.nav-links a');
const pageSections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let current = '';
  pageSections.forEach(section => {
    if (scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

// Scroll To Top on Logo Click
const logo = document.querySelector('.logo');
logo.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fade-up Animation for Contact Section
const contactSection = document.querySelector('.contact');
window.addEventListener('scroll', () => {
  if (contactSection.getBoundingClientRect().top < window.innerHeight - 100) {
    contactSection.classList.add('visible');
  }
});
