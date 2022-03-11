const hamburgerMenuWrapper = document.querySelector('.header__nav-menu-icon-wrapper');
const hamburgerMenu = document.querySelector('.header__nav-menu-icon'); 
const menuNav = document.querySelector('.header__mobile-nav-menu');
const mobileNavItems = document.querySelectorAll('.header__mobile-nav-item');

hamburgerMenuWrapper.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    menuNav.classList.toggle('active');

    mobileNavItems.forEach(item => {
        item.classList.toggle('active');
    });
});

