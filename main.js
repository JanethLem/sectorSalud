$(document).ready(function(){
     //slider
    $(function (){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });
    });

    //scroll
    $('.subir').click(function(e){

        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //cANBIO DE TEMA 
    var theme = $("#theme");
    $("#to-gree").click(function () {
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function () {
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css");
    });

});

