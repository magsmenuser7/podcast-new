// $(function () {
//     var swiperTestimonials = new Swiper('.swiper', {
//         autoplay: {
//             delay: 3000
//         },
//         speed: 2000,
//         slidesPerView: 1,
//         slidesPerGroup: 1,
//         spaceBetween: 10,
//         loop: false,
//         grabCursor: true,
//         breakpoints: {
//             // when window width is >= 360px
//             360: {
//                 slidesPerView: 1,
//             },
//             // when window width is >= 768px
//             768: {
//                 slidesPerView: 1,
//             },
//             // when window width is >= 1024px
//             1024: {
//                 slidesPerView: 1,
//             }
//         },
//         // If we need pagination
//         pagination: {
//             enabled: false,
//             el: '.swiper-pagination',
//             type: 'bullets',
//             clickable: true,
//         },
//     });

// });


$(function () {
    var swipercontainer = new Swiper('.swipers', {
        autoplay:{
            delay:1000
        },
        speed: 1000,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        loop: true,
        // grabCursor: true,
        breakpoints: {
            // when window width is >= 360px
            360: {
                slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 1,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
            }
        },
        // If we need pagination
        pagination: {
            enabled: false,
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

});


document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
});

