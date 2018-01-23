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
function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event) {
            $(this).toggleClass('active');
            $(this).children("i").toggleClass("fa-caret-down");
            $(this).children("i").toggleClass("fa-caret-up");
            return false;
        });

        obj.opts.on('click',function() {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
};
$(function() {
    var dd = new DropDown( $('#dd') );
    var jumb_dd = new DropDown( $('#jumb_dd'));
    var two = new DropDown( $('#two') );
    var listing_sort = new DropDown( $('#listing_sort') );
    var listing_currency = new DropDown( $('#listing_currency') );

    $(document).click(function()  {
        $('.dropdown-wrapper').removeClass('active');
    });
});
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
/*$(document).ready(() => {
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {lat:50.4501,lng:30.523400000000038}
    });
});*/
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