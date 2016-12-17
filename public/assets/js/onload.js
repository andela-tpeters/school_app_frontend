
 //  Show counter after appear
    var $number = $('.number');
    var $grid;

    if ($number.length > 0 ) {
        $number.waypoint(function() {
            initCounter();
        }, { offset: '100%' });
    }

    //Masonry grid init
    function triggerMasonry() {
        if ( !$grid ) { return; }
        $grid.masonry({
            itemSelector: '.grid-item'
        });
    }

    $grid = $('.grid');
    // console.log($grid);
    // triggerMasonry();
    //Preloader
    var $preloader = $('#page-preloader');
    $preloader.fadeOut('slow');
    $spinner = $preloader.find('.gps_ring');
    $spinner2 = $preloader.find('.gps_ring2');
    $spinner.fadeOut();
    $spinner2.fadeOut();
