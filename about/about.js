function updateStatusBarColor(theme) {
    var color = theme === 'dark' ? '#030f05' : '#f0fdf4';
    var meta = document.getElementById('dynamic-theme-color');
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'theme-color';
        meta.id = 'dynamic-theme-color';
        document.head.appendChild(meta);
    }
    meta.content = color;
}

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
    window.location.reload();
}

var themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

document.getElementById('year').textContent = new Date().getFullYear();

var reveals = document.querySelectorAll('.reveal');
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

reveals.forEach(function (item) {
    observer.observe(item);
});
