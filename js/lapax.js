$('#js-nav-header').headroom({
    "offset": 205,
    "tolerance": 5,
    "classes": {
        "initial": "animated",

        // when scrolling up
        pinned: "header--pinned",

        // when scrolling down
        unpinned: "header--unpinned",

        // when above offset
        top: "header--top",

        // when below offset
        notTop: "header--not-top"
    }
});


var waypoints = $('.animation').waypoint(function(direction) {

    var animation = $(this.element).attr('data-animation');


    $(this.element).addClass(animation);
    $(this.element).addClass('animated');

}, {
    offset: '75%'
})

$.localScroll({
    target: '#lapax',
    queue: true,
    duration: 1000,
    hash: true

});

$("#screenshot").owlCarousel({
    items: 4
});

$("#customer").owlCarousel({
    items: 1,
    singleItem: true
});
