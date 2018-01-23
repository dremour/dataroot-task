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