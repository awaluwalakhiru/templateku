$(function()
{
    $(window).scroll(function(e)
    {
        var top = $(this).scrollTop();
        var hi = $('.card').height();
        console.log(top);
        console.log(hi);
    });
});