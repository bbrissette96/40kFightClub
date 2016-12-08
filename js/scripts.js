/**
 * Created by Beau on 11/30/2016.
 */
$(document).ready(function(){
    $('.carousel').carousel();
    $('.modal').modal();
    $('.carousel-item').click(function () {
        event.preventDefault();
    });
});
$('.carousel.carousel-slider').carousel({full_width: true});

