//Nav
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

// Scroll
const scrollEl = document.querySelector('#horizontal-scroll');
const dots = document.querySelectorAll('.portfolio__scroll-circle');
const scrollImg = document.querySelectorAll('.portfolio__img');

let portfolioImgWidth;
let currentScrollPosition; 

    scrollImg.forEach(el => {
        portfolioImgWidth = el.offsetWidth;
    });

    scrollEl.addEventListener('scroll', () => {
        currentScrollPosition = scrollEl.scrollLeft;
        
        if(currentScrollPosition < (portfolioImgWidth/2)){
            removeActiveClass(1);
            dots[0].classList.add('active');
        } else if (currentScrollPosition > (portfolioImgWidth/2) && currentScrollPosition < (portfolioImgWidth+25+(portfolioImgWidth/2)) ){
            removeActiveClass(0);
            removeActiveClass(2);
            dots[1].classList.add('active');
        } else if (currentScrollPosition > (portfolioImgWidth+25+(portfolioImgWidth/2))&& currentScrollPosition < ((2*portfolioImgWidth)+25+(portfolioImgWidth/2))){
            removeActiveClass(1);
            removeActiveClass(3);
            dots[2].classList.add('active');
        } else if (currentScrollPosition > ((2*portfolioImgWidth)+25+(portfolioImgWidth/2)) && currentScrollPosition < ((3*portfolioImgWidth)+25+(portfolioImgWidth/2))){
            removeActiveClass(2);
            removeActiveClass(4);
            dots[3].classList.add('active');
        } else if (currentScrollPosition > ((3*portfolioImgWidth)+25+(portfolioImgWidth/2)) && currentScrollPosition < ((4*portfolioImgWidth)+25+(portfolioImgWidth/2))){
            removeActiveClass(3);
            removeActiveClass(5);
            dots[4].classList.add('active');
        }  else if (currentScrollPosition > ((4*portfolioImgWidth)+25+(portfolioImgWidth/2)) && currentScrollPosition < ((5*portfolioImgWidth)+25+(portfolioImgWidth/2))){
            removeActiveClass(4);
            removeActiveClass(6);
            dots[5].classList.add('active');
        }  else if (currentScrollPosition > ((5*portfolioImgWidth)+25+(portfolioImgWidth/2)) && currentScrollPosition < ((6*portfolioImgWidth)+25+(portfolioImgWidth/2))){
            removeActiveClass(5);
            dots[6].classList.add('active');
        }  
    });

    function removeActiveClass(num) {
        dots[num].classList.remove('active');
    }
