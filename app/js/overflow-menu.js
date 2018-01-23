$(document).ready(function() {
    $('.overflow-menu-wrapper').on('click', function(event) {
        var target;
        if ($(event.target).hasClass("fa")) {
            target = $(event.target).parent();
        } else {
            target = $(event.target);
        }
        $(target).toggleClass('active');
        console.log("overflow-menu toggle");
    });

    $('.overflow-menu-wrapper__white').on('click', function() {
        var target;
        if ($(event.target).hasClass("fa")) {
            target = $(event.target).parent();
        } else {
            target = $(event.target);
        }
        $(target).toggleClass('active');
        console.log("overflow-menu toggle");
    });
    $('.overflow-menu-wrapper__black').on('click', function() {
        var target;
        if ($(event.target).hasClass("fa")) {
            target = $(event.target).parent();
        } else {
            target = $(event.target);
        }
        $(target).toggleClass('active');
        console.log("overflow-menu toggle");
    });
});