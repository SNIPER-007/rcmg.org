// Hamburger toggle
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '&#9776;';
const header = document.querySelector('header');
const nav = document.querySelector('nav ul');
if (header && nav) {
  header.appendChild(hamburger);
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

// Close mobile nav on link click
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      nav.classList.remove('show');
    }
  });
});

// Tap-based dropdown for Gallery (desktop only)
const galleryToggle = document.querySelector('.dropdown-toggle');
if (galleryToggle) {
  galleryToggle.addEventListener('click', (e) => {
    if (window.innerWidth > 768) {
      e.preventDefault();
      const dropdown = galleryToggle.parentElement;
      dropdown.classList.toggle('open');
    }
  });
}

// Counter Animation

const counters = document.querySelectorAll('.counter');

const animateCounters = () => {

  counters.forEach(counter => {

    const target = +counter.dataset.target;

    let current = 0;

    const increment = target / 100;

    const update = () => {

      current += increment;

      if(current < target){
        counter.innerText = Math.ceil(current);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }

    };

    update();

  });

};

window.addEventListener('load', animateCounters);