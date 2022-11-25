$(function(){
    //Карусель 
    var lpuSwiper = new Swiper('.catalog-item_slider', {
        loop: true,
        spaceBetween:12,
        slidesPerView:3,
        centeredSlides:false,
        watchOverflow:false,
        navigation: {
            nextEl: '.catalog-item_slider-next',
            prevEl: '.catalog-item_slider-prev',
        },
        pagination: {
            el: '.catalog-item_slider-pagination',
            clickable: true,
        }
    });


})