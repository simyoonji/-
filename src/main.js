$(function(){
    $(".affiliate__list").mouseover(function(){
        $("#affiliate").addClass("active");
    });
    $(".affiliate__list").mouseleave(function(){
        $("#affiliate").removeClass("active");
    });
});

