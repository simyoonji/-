$(function(){
    // affiliate list show/hide
    let $accListTitle = $('.acc__list-pc > a');
    let $accListSub = $('.acc__list_sub-pc');
    let $affMain = $('.aff__main');
    let ON = 'on';

    $(function(){
        $($accListTitle).on('click',function(){
            $(this).next($accListSub).toggleClass(ON);
            $(this).parent('li').siblings('li').children($accListSub).removeClass(ON);
            $(this).parent('li').toggleClass(ON).siblings('li').removeClass(ON);
            // 
            if($accListSub.hasClass(ON)){
                $affMain.stop().addClass(ON);
            }else {
                $affMain.stop().removeClass(ON);
            }
        });
    });

    // inserted list toggle
    let $insertList = $('.inserted > li > h6');
    let SLIDE = 'slide';

    $(function(){
        $($insertList).on("click",function(){
            $(this).next("ul").toggleClass(SLIDE);
            $(this).parent("li").siblings("li").children("ul").removeClass(SLIDE);
        });
    });

   // footer contact slide
    let $ctList = $('.contact__lf ul > li');
    let $ctListHide = $('.contact__lf ul > li:nth-of-type(n+2)');
    let $ctRight = $('.contact__rt');

   $(function(){
    $($ctList).eq(0).on("click",function(){
        $($ctListHide).stop().toggleClass(ON);
        $($ctRight).stop().toggleClass(ON);
    });
   });

}); //FN

