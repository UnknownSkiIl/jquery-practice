$(document).ready(function() {
    $('[href = "#sheldure"],.main_btn,.main_btna').on('click', function () {
        $('.overlay').animate({
            opacity: 'toggle'
        }, 400);
        $('.modal').animate({
            height: 'toggle'
        }, 400);
    });
    $('.close').on('click', function () {
        $('.overlay').animate({
            opacity: 'hide'
        }, 200);
        $('.modal').animate({
            height: 'hide'
        }, 200);
    });
});
