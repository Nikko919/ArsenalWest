const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header__menu');
const headerLinks = document.querySelectorAll('.header__list-item');
const headerLogo = document.querySelector('.header__box-logo')
document.addEventListener('click', burgerMenu);
function burgerMenu(event) {
    if (event.target.closest('.burger')) {
        burger.classList.toggle('_active')
        header.classList.toggle('_active')
    };
    if (!event.target.closest('.burger')) {
        burger.classList.remove('_active')
        header.classList.remove("_active")
    }
    if (burger.classList.contains('_active')) {
        headerMenu.classList.add('_active')
        headerLogo.classList.add('_active')
        header.classList.add("_active")
    }
    if (!burger.classList.contains('_active')) {
        headerMenu.classList.remove('_active')
        headerLogo.classList.remove('_active')
        header.classList.remove("_active")
    }
}


// swiper

// const swiper = new Swiper('.swiper', {

//     direction: '',
//     loop: true,


//     pagination: {
//         el: '.swiper-pagination',
//     },
// });



var swiper = new Swiper(".brands__swiper", {
    spaceBetween: 10,
    // centeredSlides: true,
    autoplay: {
        delay: 2500,
        // disableOnInteraction: false,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    pagination: {

        el: ".swiper-pagination",
        clickable: true,
    },
    // slidesPerView: 2,
    slidesPerGroup: 4,
    breakpoints: {
        370: {
            slidesPerView: 2,
        },
        990: {
            slidesPerView: 1,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});

var swiper = new Swiper(".SwiperProduct", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
