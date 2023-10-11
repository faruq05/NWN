$(function () {
    //the shrinkHeader variable is where you tell the scroll effect to start.
    var shrinkHeader = 70;
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.header').addClass('smaller');
        }
        else {
            $('.header').removeClass('smaller');
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});

$(function () {
    //the shrinkHeader variable is where you tell the scroll effect to start.
    var shrinkHeader = 70;
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.brand').addClass('logomain');
        }
        else {
            $('.brand').removeClass('logomain');
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});

$(function () {
    //the shrinkHeader variable is where you tell the scroll effect to start.
    var shrinkHeader = 70;
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.brand2').addClass('logo_sc');
        }
        else {
            $('.brand2').removeClass('logo_sc');
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});