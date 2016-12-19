module.exports = {
    loader: function() {
        var $preloader = $('#page-preloader');
        $preloader.fadeOut('slow');
        var $spinner = $preloader.find('.gps_ring');
        var $spinner2 = $preloader.find('.gps_ring2');
    },
    fade: function() {
        $spinner.fadeOut();
        $spinner2.fadeOut();
    }
}