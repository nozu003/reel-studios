$(document).ready(function(){

    var $header = $(".header__section4");
    var portfolio = $('.js--portfolio');

    portfolio.click(function(){
        portfoltioClick();
    });

    function portfoltioClick(){

        if($header.hasClass("header__section4--home") || $header.hasClass("header__section4--about")){
            $header.removeClass("header__section4--home header__section4--about animate__animated animate__pulse animate__slow");
            $header.addClass("header__section4--portfolio static-bg");
            $header.removeClass("portfolio--films-collection");
            
            $('.header__section4--portfolio-nav').removeClass("disp-none");
            $('.header__section4--portfolio-selection').removeClass("disp-none");
            $('.header__section4--portfolio-selection').addClass("disp-flex");
            $('.header__section4--portfolio-nav').addClass("disp-flex");

            $('.js--about').addClass("disp-none");
            $('.js--films').addClass("disp-none");
            $('.header__section4--credentials').addClass("disp-none");

            $('.header__section4--desc').addClass('hidden');
            $('.header__section4--desc').removeClass('visible animate__animated animate__fadeIn');

            $('.js--home').addClass('inactive-side-nav');
            $('.js--portfolio').addClass('active-side-nav');

            document.querySelector('.header__section4--portfolio-nav--portfol').innerHTML = "PORTFOLIOS ";
        }

        
    }

});