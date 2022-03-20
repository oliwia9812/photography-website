// Nav

const { getBaseApp } = require("browser-sync/dist/server/utils");

// ======
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

// Portfolio Scroll
// ===================
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

// Feedback  carousel
// =====================
const prevIcon = document.querySelector('.feedback__arrow-icon--prev');
const nextIcon = document.querySelector('.feedback__arrow-icon--next');
const track = document.querySelector('.feedback__carousel-track');
const slides = Array.from(track.children);
const dotsNav = document.querySelector('.feedback__scroll-position');
const dotsArray = Array.from(dotsNav.children);
let slideWidth = slides[0].getBoundingClientRect().width;

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left; + ')';
    currentSlide.classList.remove('feedback__current-slide');
    targetSlide.classList.add('feedback__current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('active');
    targetDot.classList.add('active');
}

const showHideArrows = (slides, prevIcon, nextIcon, targetIndex) => {
    if(targetIndex === 0) {
        prevIcon.classList.add('is-hidden');
        nextIcon.classList.remove('is-hidden');
    } else if(targetIndex === dotsArray.length-1){
        prevIcon.classList.remove('is-hidden');
        nextIcon.classList.add('is-hidden');
    } else {
        prevIcon.classList.remove('is-hidden');
        nextIcon.classList.remove('is-hidden');
    }
}



// Set slide position
const setSlidePosition = (slide, index) => {
    slide.style.left = index * slideWidth + 'px';
}

slides.forEach(setSlidePosition);

// Move slide to the left
prevIcon.addEventListener('click', () => {

    const currentSlide = track.querySelector('.feedback__current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.active');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
   
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    showHideArrows(slides, prevIcon, nextIcon, prevIndex);

});


// Move slide to the right
nextIcon.addEventListener('click', () => {

    const currentSlide = track.querySelector('.feedback__current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.active');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide)
    updateDots(currentDot, nextDot);
    showHideArrows(slides, prevIcon, nextIcon, nextIndex);

});


// Move to target slide when click dot
dotsNav.addEventListener('click',(e) => {

    const currentSlide = track.querySelector('.feedback__current-slide');
    const currentDot = dotsNav.querySelector('.active');
    const targetDot = e.target.closest('div');
    const targetIndex = dotsArray.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    showHideArrows(slides, prevIcon, nextIcon, targetIndex);

})







