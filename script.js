window.addEventListener('scroll', function () {
    var nav = document.getElementById('nav');
    if (window.scrollY > 50) { // Change 50 to desired scroll position
        nav.style.backgroundColor = '#ff6600'; // Background color when scrolled
    } else {
        nav.style.backgroundColor = '#333'; // Initial background color
    }
});
