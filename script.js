// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
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
