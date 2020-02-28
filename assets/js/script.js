//Makes button "to the top" visible after some scrolling
$(document).ready(function(){
    if($(window).width() > 991) {
        $(window).scroll(function(){
            if($(this).scrollTop() > 290){
                $('#topBtn').css('visibility', 'visible');
                $('#topBtn').fadeIn();
            } else{
                $('#topBtn').fadeOut();
            }
        });   
        $('#topBtn').click(function(){
            $('html ,body').animate({scrollTop : 0}, 100);
        });
    }
});