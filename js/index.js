

let nav=document.querySelector(".navigation-wrap");
window.onscroll=function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}



$(document).ready(function(){
    $(".sidemenu-toggler").click(function(){
        $(".sidemenu").addClass("active");
    });
    $(".close").click(function(){
        $(".sidemenu").removeClass("active");
    });
    $(window).scroll(function(){
      var sc=$(window).scrollTop();
      if(sc >150){
          $(".header").addClass("sticky");
      }
      else{
        $(".header").removeClass("sticky");
      }
    });   

    /**isotape***/
$(window).on("load",function(){
    var $container=$(".portfolioContainer");
    $container.isotope({
        filter:'*',
        animationOptions:{
            queue:true
        }
    });
    $('.portfolio-nav li').click(function(){
        $('.portfolio-nav.current').removeClass('current');
        $(this).addClass('current');
        var selector=$(this).attr('data-filter');
        $container.isotope({
            filter:selector,
            animationOptions:{
              queue:true
            }
        });
        return false;
    });
});

$('#portfolio-item').mixItUp();
});