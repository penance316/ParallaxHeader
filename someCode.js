/*global $ */
$(window).scroll(function () {
    'use strict';

    var wScroll = $(this).scrollTop();

    $('.logo').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.back-image').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.front-image').css({
        'transform': 'translate(0px, -' + wScroll / 40 + '%)'
    });

});