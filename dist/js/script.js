// Navbar Fixed
window.onscroll =function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const totop = document.querySelector('to-top')

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        totop.classList.remove('hidden');
        totop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        totop.classList.add('flex');
        totop.classList.remove('hidden');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});