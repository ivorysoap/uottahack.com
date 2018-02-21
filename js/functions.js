//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > $('.navbar-nav').outerHeight()) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top /* - $('.navbar-nav').outerHeight() */
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//FAQ accordion JS
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(150).removeClass('open');
    }

    $('.accordion-section-title').click(function(e) {
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
            $(this).addClass('active');
            $('.accordion ' + currentAttrValue).slideDown(150).addClass('open');
        }

        e.preventDefault();
    });

    setInterval(function() {
        let start = Date.now();
        let end = new Date("02/17/2018 8:00");
        let diff = new Date(end - start) / 1000;

        // calculate (and subtract) whole days
        let days = Math.floor(diff / 86400);
        diff -= days * 86400;
        let hours = Math.floor(diff / 3600) % 24;
        diff -= hours * 3600;
        let mins = Math.floor(diff / 60) % 60;
        diff -= mins * 60;
        let seconds = Math.floor(diff % 60);

        document.getElementById("countdown-days").textContent = days > 0 ? days : "0";
        document.getElementById("countdown-hours").textContent = hours> 0 ? hours : "0";
        document.getElementById("countdown-minutes").textContent = mins > 0 ? mins : "0";
        document.getElementById("countdown-seconds").textContent = seconds > 0 ? seconds : "0";
    }, 100);

});

//MailChimp JS Function for the subscribe button
// function showMailingPopUp() {
//     require(["mojo/signup-forms/Loader"], function(L){
//         L.start({"baseUrl":"mc.us16.list-manage.com","uuid":"0d17aed384fbbc8c0739e835b","lid":"8e7cdd5f11"}) })
//     document.cookie = "MCEvilPopupClosed=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
// };
