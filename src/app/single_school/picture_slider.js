module.exports = function() {
    $("#owl-demo-2").owlCarousel({
        items : 3,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1024:{
                items:3
            }
        },
        pagination: true,
        nav: true,
        slideSpeed: 700,
        itemsDesktop: [1024,3],
        itemsDesktop: [480,1],
        loop:true,
        navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
        ]
    });
}

