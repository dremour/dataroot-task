$(document).ready(function() {
    $('.hamburger-menu__icon').on("click", function(event) {
        console.log('hamburgerClicked');
        $('.wrapper').toggleClass('blur');
        $('.hamburger-menu__content').toggleClass('active');
        //$(event.target).toggleClass('active');
        $(document.body).toggleClass('hideoverflow');
        event.preventDefault();
        event.stopPropagation();
    })
});