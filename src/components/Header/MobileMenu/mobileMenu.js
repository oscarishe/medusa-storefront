const burgerButton = document.querySelector('.header-mobile__burger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBackdrop = document.querySelector('.mobile-menu-backdrop');
const body = document.body;
const mobileMenuHandler = () => {
    mobileMenu.classList.toggle('active');
    body.classList.toggle('disabled-scroll');
}
burgerButton.addEventListener('click', mobileMenuHandler);
mobileMenuBackdrop.addEventListener('click', mobileMenuHandler);