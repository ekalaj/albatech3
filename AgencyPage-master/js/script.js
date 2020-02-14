$(function () {

    // Main_slider
    $('.slick_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });

    // sponser
    $('.sopnser_logo').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,

    });

    // counter

    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });


});