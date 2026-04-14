$(function () {
    lucide.createIcons();
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        autoplay: {
            delay: 3000, // 3초마다 넘어감
            disableOnInteraction: false, // 터치 후에도 계속 autoplay
        },
        // Navigation arrows
        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },

        pagination: {
            clickable: true,
            el: '.main_visual .page',
        },

    });
});