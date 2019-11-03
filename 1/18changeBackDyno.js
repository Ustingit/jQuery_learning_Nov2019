$(window).ready(function(){
    var wHeight = $(window).height(); //без учёта отступов и высоты рамки

    $('.slide')
    .height(wHeight)
    .scrollie({
        scrollOffset: -50,
        scrollingInView: function(elem) {
            var bgColor = elem.data('background');

            $('body').css('background-color', bgColor);
        }
    })
})