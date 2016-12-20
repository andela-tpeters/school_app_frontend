module.exports = function() {
    // Owl Carousel
    // Disable click when dragging
    function disableClick() {
        $('.owl-carousel .property').css('pointer-events', 'none');
    }
    // Enable click after dragging
    function enableClick() {
        $('.owl-carousel .property').css('pointer-events', 'auto');
    }



    // if ($('.owl-carousel').length > 0) {
    //     if ($('.carousel-full-width').length > 0) {
    //         setCarouselWidth();
    //     }
    //     if ( parseInt( $('.testimonials-carousel').find('.item').length ) <= 1 ) {
    //         t_f_test = false;
    //     } else {
    //         t_f_test = true;
    //     }

    $(".testimonials-carousel").owlCarousel({
        items: 1,
        responsiveBaseWidth: ".testimonial",
        pagination: true,
        nav: true,
        slideSpeed: 700,
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
    });
    // }
    function sliderLoaded() {
        $('#slider').removeClass('loading');
        document.getElementById("loading-icon").remove();
        centerSlider();
    }

    function animateDescription() {
        var $description = $(".slide .overlay .info");
        $description.addClass('animate-description-out');
        $description.removeClass('animate-description-in');
        setTimeout(function() {
            $description.addClass('animate-description-in');
        }, 400);
    }

    // Set Owl Carousel width
    function setCarouselWidth() {
        $('.carousel-full-width').css('width', $(window).width());
    }

}