// section affiliate toggle
function affSlide(){
    $(".affiliate__list").on("mouseover",function(){
        $("#affiliate").addClass("active");
    });
    $(".affiliate__list").on("mouseleave",function(){
        $("#affiliate").removeClass("active");
    });
}

$(function(){
    $(window).resize(function(){
        if($(window).width() > 1060) {
            affSlide().on;
            
        }else if($(window).width() <= 1060){
            affSlide().off;
        }
    });
});

// footer inserted toggle
$(function(){
    $(".inserted-m > li > h6").on("click",function(){
        $(this).next("ul").toggleClass("slide");
        $(this).parent("li").siblings("li").children("ul").removeClass("slide");
    });
});

