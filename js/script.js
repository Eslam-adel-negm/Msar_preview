/*global $, console, document*/



$(function () {

    'use strict';

    //// Open Menu In Mobile View

    $('.burger-icon').on('click', function () {
        $('.nav-menu .menu-item').toggleClass('menu_item_open');
    });


    ///// viewportChecker

    $(document).ready(function () {
        $('.viewport').viewportChecker();
    });


    ///// parallax

    var scene = document.getElementById('scene')
    var parallax = new Parallax(scene)


    //    Smooth Scroll 

    $('a.header-about-more').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.services-section').offset().top - 110 }, 1000);
    });
});

///// Loading Screen

$(window).load(function () {

    "use strict";

    // Loading Elements

    //        $(".loading").delay(1000).queue(function (next) {
    //            $(this).addClass("loaded");
    //            next();
    //            $("body").removeClass("overflow-hidden");
    //        });

    $(".loading").addClass("loaded").delay(2000).fadeOut(0, function () {

        // Show The Scroll

        $("body").removeClass("overflow-hidden");

        $(this).remove();



    });
});