$('.content').hide();
$('.card').hide();
$('.nav.load').hide();
$(function () {
    $('.content').delay(500).slideDown(1000, function () {
        $('.card').delay(500).slideDown(3000, function () {
            $('.nav.load').delay(500).slideDown(1000);
        });
    });
});