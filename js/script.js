$('.slider-1').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // initialSlide: 1,
    // centerMode: true,
    // centerPadding: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.slider-2').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: false,
    // prevArrow: '<button type="button" class="slider-prev-arrow"><img src="image/slider_prev_arrow.svg" alt="prevArrow"></button>',
    // nextArrow:
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});