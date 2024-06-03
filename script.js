window.addEventListener('scroll', function () {
    var nav = document.getElementById('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#ff6600';
    } else {
        nav.style.backgroundColor = '#333';
    }
});
