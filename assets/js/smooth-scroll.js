$(document).ready(function(){

    $("highlights").on('click', function(event) {
    if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 800, function(){
    window.location.hash = hash;
    
});
}
});
});
    
$(document).ready(function(){
       
    $("#us").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){
        window.location.hash = hash;
        });
        }
        });
        });

$(document).ready(function(){

            $("#contact").on('click', function(event) {
            if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
            });
            }
            });
            });

$(document).ready(function(){

         $("#begin").on('click', function(event) {
         if (this.hash !== "") {
         event.preventDefault();
         var hash = this.hash;
         $('html, body').animate({
         scrollTop: $(hash).offset().top
         }, 800, function(){
         window.location.hash = hash;
           });
           }
           });
           });
