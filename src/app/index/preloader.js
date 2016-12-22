module.exports = {
    preloader: function() { return $('#page-preloader');},
    spinner1: function() { return this.preloader().find('.gps_ring');},
    spinner2: function() { return this.preloader().find('.gps_ring2');},
    fade: function() {
        this.preloader().fadeOut('slow');
        this.spinner1().fadeOut();
        this.spinner2().fadeOut();
    }, 

    show: function() {
        this.preloader().fadeIn('slow');
        this.spinner1().fadeIn();
        this.spinner2().fadeIn();
    }
}