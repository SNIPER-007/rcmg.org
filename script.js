// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');
if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

// Dropdown on mobile
document.querySelectorAll('.dropdown > a').forEach(dropdownLink => {
  dropdownLink.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdownLink.nextElementSibling.classList.toggle('show');
    }
  });
});

// Stats animation
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
        counter.innerText = target;
      }
    };
    if (counter.hasAttribute('data-target')) {
      updateCount();
    }
  });
};
window.addEventListener('load', animateCounters);
