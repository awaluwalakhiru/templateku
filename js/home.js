$('.card').hide();
$('nav.load').hide();
$(function (e) {
    $('.card').each(function (i) {
        $(this).delay(500 * (i + 1)).slideDown(500 * (1 + i), function () {
            $('nav.load').delay(500 * ($('.card').length) + 500).slideDown(5000);
        });
    });
})