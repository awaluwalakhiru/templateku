$('.content').hide();
$('.card').hide();
$(function () {
    $('.content').delay(100).slideDown(500, function () {
        $('.card').delay(100).slideDown(1000);
    });
});