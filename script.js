// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-links');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

// Close mobile nav on link click
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768 && nav.classList.contains('show')) {
      nav.classList.remove('show');
    }
  });
});

// Dropdown toggle (mobile only)
document.querySelectorAll('.dropdown > a').forEach(dropdownLink => {
  dropdownLink.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const menu = dropdownLink.nextElementSibling;
      if (menu && menu.classList.contains('dropdown-menu')) {
        menu.classList.toggle('show');
      }
    }
  });
});

// Stats Counter Animation (if data-target is set)
const counters = document.querySelectorAll('.counter');
const speed = 100;

const animateCounters = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    if (!isNaN(target)) {
      const updateCount = () => {
        const current = +counter.innerText;
        const increment = target / speed;
        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 50);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    }
  });
};

window.addEventListener('load', animateCounters);


