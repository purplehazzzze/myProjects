            // SERVICES

$("#web-tab").on("click", function(){
    $(".services-content").css("display", "none");
    $("#web").css("display", "flex");

    $(".services-menu-item").removeClass("active");
    $("#web-tab").addClass("active");
})

$("#graphic-tab").on("click", function(){
    $(".services-content").css("display", "none");
    $("#graphic").css("display", "flex");

    $(".services-menu-item").removeClass("active");
    $("#graphic-tab").addClass("active");
})

$("#support-tab").on("click", function(){
    $(".services-content").css("display", "none");
    $("#support").css("display", "flex");

    $(".services-menu-item").removeClass("active");
    $("#support-tab").addClass("active");
})

$("#app-tab").on("click", function(){
    $(".services-content").css("display", "none");
    $("#app").css("display", "flex");

    $(".services-menu-item").removeClass("active");
    $("#app-tab").addClass("active");
})
$("#marketing-tab").on("click", function(){
    $(".services-content").css("display", "none");
    $("#marketing").css("display", "flex");

    $(".services-menu-item").removeClass("active");
    $("#marketing-tab").addClass("active");
})
$("#seo-tab").on("click", function(){
    $(".services-content").css("display", "none");
    $("#seo").css("display", "flex");

    $(".services-menu-item").removeClass("active");
    $("#seo-tab").addClass("active");
})

                // LOAD MORE

$("#our-work-btn").on ("click", function (){
    $("#load-more").slideToggle( "slow", function() {
    });
    $("#load-more").css("display", "flex");
    $("#our-work-btn").css("display", "none");
})


            // FILTER
$("#graphic-design").on ("click", function (){
    $("#load-more").show( "slow", function() {
    });
    $("#load-more").css("display", "flex");
    $("#our-work-btn").css("display", "none");

    $(".our-work-img").css("display", "none");
    $(".graphic-design-img").css("display", "block");

    $(".our-work-menu-item").css("border", "2px solid #DADADA");
    $("#graphic-design").css("border", "2px solid #18CFAB");
})


$("#web-design").on ("click", function (){
    $("#load-more").show( "slow", function() {
    });
    $("#load-more").css("display", "flex");
    $("#our-work-btn").css("display", "none");

    $(".our-work-img").css("display", "none");
    $(".web-design-img").css("display", "block");

    $(".our-work-menu-item").css("border", "2px solid #DADADA");
    $("#web-design").css("border", "2px solid #18CFAB");
})

$("#landing-pages").on ("click", function (){
    $("#load-more").show( "slow", function() {
    });
    $("#load-more").css("display", "flex");
    $("#our-work-btn").css("display", "none");

    $(".our-work-img").css("display", "none");
    $(".landing-img").css("display", "block");

    $(".our-work-menu-item").css("border", "2px solid #DADADA");
    $("#landing-pages").css("border", "2px solid #18CFAB");
})

$("#wordpress").on ("click", function (){
    $("#load-more").show( "slow", function() {
    });
    $("#load-more").css("display", "flex");
    $("#our-work-btn").css("display", "none");

    $(".our-work-img").css("display", "none");
    $(".wordpress-img").css("display", "block");

    $(".our-work-menu-item").css("border", "2px solid #DADADA");
    $("#wordpress").css("border", "2px solid #18CFAB");
})

$("#all").on ("click", function (){
    $("#load-more").show( "slow", function() {
    });
    $("#load-more").css("display", "flex");
    $("#our-work-btn").css("display", "none");

    $(".our-work-img").css("display", "block");

    $(".our-work-menu-item").css("border", "2px solid #DADADA");
    $("#all").css("border", "2px solid #18CFAB");

})

            // Carousel

$(document).ready(function(){
    $('.avatar-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.reviews-carousel',

        centerMode: true,
        centerPadding: '1px',
        focusOnSelect: true,
        prevArrow: '.prev',
        nextArrow: '.next',


});
    $('.reviews-carousel').slick({
        slidesToScroll: 1,
        slidesToShow: 1,

        arrows: false,
        fade: true,
        asNavFor: '.avatar-carousel'
    });
});
