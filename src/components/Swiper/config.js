export const mainSwiperConfig = {
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 6,
        },
    },
    navigation: {
        prevEl: ".products-swiper-nav.swiper-prev",
        nextEl: ".products-swiper-nav.swiper-next",
    },
}

export const blogsSwiperConfig = {
    slidesPerView: 4,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        }
    },
    navigation: {
        prevEl: ".blogs-nav.swiper-prev",
        nextEl: ".blogs-nav.swiper-next",
    },
}

export const relatedProductsSwiperConfig = {
    slidesPerView: 4,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 5,
        }
    },
    navigation: {
        prevEl: ".related-products-nav.swiper-prev",
        nextEl: ".related-products-nav.swiper-next",
    },
}