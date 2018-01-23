$(function() {

    var t = 0;

    $(function() {
        /* выбор города */
        $('.delivery_list').click(function(){
            fun();

            $(".cities_list").slideToggle('fast');

        });
        $('ul.cities_list li').click(function(){
            fun();
            var tx = $(this).html();
            $(".cities_list").slideUp('fast');

            $(".delivery_list span").html(tx);
        });
    });
    $(document).mouseup(function(e) {
        var div = $('#one');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('#btn').css('background-image','url("../img/angle.png")');
            t = 0;
            $(".cities_list").slideUp('fast');
        }
    });
    var fun = function() {
        if (t == 0) {
            $('#btn').css('background-image','url("../img/angle-up.png")');
            t++;
        } else {
            $('#btn').css('background-image','url("../img/angle.png")');
            t = 0;}
    };
    $(document).ready(function()  {
        $('.two').click(function()  {
            $(this).css('background', 'white');
        });
    });

});