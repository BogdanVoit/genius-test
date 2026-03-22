const mobileMenu = document.querySelector('.mobile-menu');
const menuBthOpen = document.querySelector('.menu-bth-open');
const menuBthClose = document.querySelector('.menu-bth-close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');


menuBthOpen.addEventListener('click', toggleMenu); 
menuBthClose.addEventListener('click', toggleMenu);
