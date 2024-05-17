window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    overlay.addEventListener('animationend', () => {
        overlay.style.display = 'none';
    });
});
