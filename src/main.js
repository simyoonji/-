$(function(){
    $(".affiliate__list").mouseover(function(){
        $("#affiliate").addClass("active");
    });
    $(".affiliate__list").mouseleave(function(){
        $("#affiliate").removeClass("active");
    });
});


$(".company__inserted > ul > li").click(function(){
    $(this).find('.inserted_list').slideToggle();
});
