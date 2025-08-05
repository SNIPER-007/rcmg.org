// Mobile Hamburger Menu
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

// Dropdown toggle for mobile
document.querySelectorAll('.dropdown > a').forEach(dropdownLink => {
  dropdownLink.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdownLink.nextElementSibling.classList.toggle('show');
    }
  });
});

// Smooth Scrolling for nav links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      e.preventDefault();
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: 'smooth'
      });

      // Close menu on mobile after click
      if (window.innerWidth <= 768) {
        nav.classList.remove('show');
      }
    }
  });
});

// Stats Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 100;
const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 50);
      } else {
        counter.innerText = target + '+';
      }
    };
    updateCount();
  });
};

window.addEventListener('load', animateCounters);
