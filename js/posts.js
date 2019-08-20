$('.card').hide();
$(function()
{
    $('.card').each(function(i)
    {
        $(this).delay(500 * (i + 1)).slideDown(1000 * (i + 1));
    });
});