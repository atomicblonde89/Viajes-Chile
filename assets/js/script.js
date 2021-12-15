$(function() {

    $("[data-toggle='tooltip']").tooltip(); /* Tooltip para Section: Quienes somos? */


    $(".card-title").click(function() { /* FadeToggle para Section: Destacados, en texto cards */
        $(".card-text").fadeToggle();
    });
    


});