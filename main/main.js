function updateStatusBarColor(theme) {
    // Colors from CSS variables for Navbar background
    // Dark: #030f05
    // Light: #f0fdf4
    var color = theme === 'dark' ? '#030f05' : '#f0fdf4';

    // Find or create dynamic meta tag
    var meta = document.getElementById('dynamic-theme-color');
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = "theme-color";
        meta.id = "dynamic-theme-color";
        document.head.appendChild(meta);
    }
    meta.content = color;
}

// Theme — default is dark
(function () {
    if (localStorage.theme === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        updateStatusBarColor('light');
    } else {
        updateStatusBarColor('dark');
    }
})();

function toggleTheme() {
    var html = document.documentElement;
    if (html.classList.contains('dark')) {
        localStorage.theme = 'light';
    } else {
        localStorage.theme = 'dark';
    }
    // Reload page to apply theme and update status bar color reliably on mobile devices
    window.location.reload();
}

var themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll Reveal
var reveals = document.querySelectorAll('.reveal');
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });
reveals.forEach(function (el) { observer.observe(el); });

// Scroll Spy
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-center a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                // Clear active from all
                navLinks.forEach(link => link.classList.remove('active'));
                // Add active to matching
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px'
    });

    sections.forEach(section => observer.observe(section));

    // Force Overview active when at top
    window.addEventListener('scroll', () => {
        if (window.scrollY < 100) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#overview') {
                    link.classList.add('active');
                }
            });
        }
    });
});
