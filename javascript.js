
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 10,
        loop: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
    });

