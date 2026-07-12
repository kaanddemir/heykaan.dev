// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll Spy
document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-center a');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var id = entry.target.getAttribute('id');
                // Clear active from all
                navLinks.forEach(function (link) { link.classList.remove('active'); });
                // Add active to matching
                navLinks.forEach(function (link) {
                    var href = link.getAttribute('href');
                    if (href === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px'
    });

    sections.forEach(function (section) { observer.observe(section); });

    window.addEventListener('scroll', function () {
        if (window.scrollY < 100) {
            navLinks.forEach(function (link) {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#overview') {
                    link.classList.add('active');
                }
            });
        }
    });
});
