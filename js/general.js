$(document).ready(function() {
    //Prevent Page Reload on all # links
    $("a[href='#']").click(function(e) {
        e.preventDefault();
    });

    $(".trainer_card").on("mouseenter", function() {
        $(this).addClass("flip");
    });
    $(".trainer_card").on("mouseleave", function() {
        $(this).removeClass("flip");
    });

    $(".trainer_card").on("touchstart", function() {
        $(this)
            .closest(".trainers")
            .find(".trainer_card")
            .removeClass("flip");
        $(this).toggleClass("flip");
    });

    //slider
    var window_width = $(window).width(),
        slider_item = $(".home-banner-slider li").length;
    $(".home-banner-slider li:first-child").addClass('active');
    $(".home-banner-slider li").height(window_width * 0.246);
    $(".home-banner-slider li").width(window_width);
    $(".home-banner-slider ul").width(window_width * slider_item);

    //next click
    $(".next-btn").click(function() {
        if ($(".home-banner-slider li.active").next().length) {
            $(".home-banner-slider li.active").addClass('next').next().addClass('active');
            $(".home-banner-slider li.next").removeClass('active next');
            var current_active = $(".home-banner-slider li.active").index();
            $(".home-banner-slider ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");
        }
    })

    //prev click
    $(".prev-btn").click(function() {
        if ($(".home-banner-slider li.active").prev().length) {

            $(".home-banner-slider li.active").addClass('prev').prev().addClass('active');
            $(".home-banner-slider li.prev").removeClass('active prev');
            var current_active = $(".home-banner-slider li.active").index();
            $(".home-banner-slider ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");
        }
    })

    $(window).resize(function(event) {
        window_width = $(window).width(),
            slider_item = $(".home-banner-slider li").length;
        $(".home-banner-slider li:first-child").addClass('active');
        $(".home-banner-slider li").height(window_width * 0.246);
        $(".home-banner-slider li").width(window_width);
        $(".home-banner-slider ul").width(window_width * slider_item);
        var current_active = $(".home-banner-slider li.active").index();
        $(".home-banner-slider ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");

    });
    /*mobile menu*/
    $(".hamburger-menu").click(function() {
        $("html,body").toggleClass("open-menu");
    });

    $.fn.parallax = function(options) {
        var $$ = $(this);
        offset = $$.offset();
        var defaults = {
            start: 0,
            stop: offset.top + $$.height(),
            coeff: 0.95
        };
        var opts = $.extend(defaults, options);
        return this.each(function() {
            $(window).bind("scroll", function() {
                windowTop = $(window).scrollTop();
                if (windowTop >= opts.start && windowTop <= opts.stop) {
                    newCoord = windowTop * opts.coeff;
                    $$.css({
                        "background-position": "50%" + newCoord + "px"
                    });
                }
            });
        });
    };
    if ($(".parallax").length) {
        $(".parallax").parallax({ coeff: -0.3 });
    }
});
/* Window scroll */
$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $("body").addClass("small-header top-full");
    } else {
        $("body").removeClass("small-header");
    }
});
