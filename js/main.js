/**
 * Created by Avi on 24.12.2014.
 */
$(document).ready(function() {
    initSlider();
    initReviewsSlider();
    setHeight();
    refresh();
    initIso();
initProjectItem();
    //initFilter();
    $(window).resize(setHeight);
})


function initSlider() {
    $('.js-slider').flexslider({
        animation: "slide"
    });
}

function initReviewsSlider() {
    $('.js-slider-reviews').flexslider({
        animation: "slide"
    });
}

function setHeight() {
    if($('.b-promo').get(0)) {
        $('.b-promo').css({
            height: ($(window).height()-100) + 'px'
        });
    }
}

function refresh() {
    $('.js-reload-feed').on('click', function() {
            var $this = $(this);
            if(!$this.hasClass('spin')){
                $this.addClass('spin');
            }
            else{
                $this.removeClass('spin');
                setTimeout(function(){
                    $this.addClass('spin');
                },10);
            }
        $('.b-feed .flex-next').trigger('click');
    })
}

function initIso() {
    if($('.projects__list').get(0)) {
        var $container = $('.projects__list');

        $container.isotope({
            itemSelector: '.projects__item',
            layoutMode: 'fitRows'
        });
        var filters = {};

        $('#filters').on( 'click', '.filter-item', function() {
            var $this = $(this);
            // get group key
            var $buttonGroup = $this.parents('.button-group');
            var filterGroup = $buttonGroup.attr('data-filter-group');
            // set filter for group
            filters[ filterGroup ] = $this.attr('data-filter');
            // combine filters
            var filterValue = '';
            for ( var prop in filters ) {
                filterValue += filters[ prop ];
            }
            $container.isotope({ filter: filterValue });
        });

        $('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', '.filter-item', function() {
                $buttonGroup.find('.active').removeClass('active');
                $( this ).addClass('active');
            });
        });
    }
}


function initProjectItem() {
    var $container = $('.project-img__list');
// initialize
    $container.masonry({
        columnWidth: 470,
        itemSelector: '.project-item__img'
    });
}