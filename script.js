$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });

    /* smooth scrolling */
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        );
    });

});


/* download cv */
var buttons = document.querySelectorAll('.downloadButton');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    var pdfPath = 'cv.pdf';

    var link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'cv.pdf';

    link.click();
  });
});