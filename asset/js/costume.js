//AUTOMATION TEXT CHANGED
var current = 1;
var height = $('.roles').height();
var numberDivs = $('.roles').children().length;
var first = $('.roles div:nth-child(1)');
setInterval(function () {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 2000);

//SMOOTH SCROLL
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        var target = $(this.hash);
        if (target.length) {
            $("html, body").animate({
                    scrollTop: target.offset().top
                },
                1000
            );
        }
    });
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });
});
