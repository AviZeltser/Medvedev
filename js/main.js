/**
 * Created by Avi on 24.12.2014.
 */
$(document).ready(function() {
    initSlider();
    initVideo();
})


function initSlider() {
    $('.js-slider').flexslider({
        animation: "slide"
    });
}
