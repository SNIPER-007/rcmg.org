// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);

        if (targetId === '' || targetId === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        }

        // Close hamburger menu if open
        if (nav.classList.contains('show')) {
            nav.classList.remove('show');
        }
    });
});

// Highlight Active Section in Navbar
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    document.querySelectorAll('section').forEach(section => {
        if (scrollPosition >= section.offsetTop - 100 && scrollPosition < section.offsetTop + section.offsetHeight) {
            document.querySelectorAll('nav ul li a').forEach(navLink => {
                navLink.classList.remove('active');
                if (navLink.getAttribute('href').substring(1) === section.id) {
                    navLink.classList.add('active');
                }
            });
        }
    });
});

// Video Controls - Auto Pause Other Videos
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('play', function () {
        document.querySelectorAll('video').forEach(otherVideo => {
            if (otherVideo !== video) {
                otherVideo.pause();
            }
        });
    });
});

// Hamburger Menu Toggle
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '&#9776;';

const header = document.querySelector('header');
const nav = document.querySelector('nav ul');

if (header && nav) {
    header.prepend(hamburger);

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
}

