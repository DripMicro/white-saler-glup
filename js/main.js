$(document).ready(function(){
    $('.logos').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    if ($('.bbb_viewed_slider').length) {
        var viewedSlider = $('.bbb_viewed_slider');
    
        viewedSlider.owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 6000,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                575: {
                    items: 1
                },
                768: {
                    items: 1
                },
                991: {
                    items: 2
                },
                1199: {
                    items: 2
                }
            }
        });
    
        if ($('.bbb_viewed_prev').length) {
            var prev = $('.bbb_viewed_prev');
            prev.on('click', function() {
                viewedSlider.trigger('prev.owl.carousel');
            });
        }
    
        if ($('.bbb_viewed_next').length) {
            var next = $('.bbb_viewed_next');
            next.on('click', function() {
                viewedSlider.trigger('next.owl.carousel');
            });
        }
    }
});