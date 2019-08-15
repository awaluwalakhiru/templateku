$(function () {
    $(window).scroll(function (e) {
        var top = $(this).scrollTop();
        if (top > 0) {
            var cards = $('.card');
            var cardsLength = $('.card').length;
            for (let i = 0; i < cardsLength; i++) {
                console.log(cards[i]);
            }
        }
    });
});