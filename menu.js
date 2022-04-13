(function($){
  $.fn.dropdown = function(){
    return this.each(function(){
      var $gnb = $(this),
          $menu = $gnb.find(".menu"),
          $depth1 = $gnb.find(".depth1"),
          $depth2 = $gnb.find(".depth2");
      
      $gnb.mouseenter(function(){
        gnbOn();
      }).mouseleave(function(){
        gnbOff();
      });
      
      $gnb.find("a").focusin(function(){
        gnbOn();
      }).focusout(function(){
        gnbOff();
      });
        
      function gnbOn(){
        $gnb.find($depth2).stop().animate({height: "220"});/*서브메뉴 높이 조절*/
      }
      
      function gnbOff(){
        $gnb.find($depth2).stop().animate({height: "0", overflow: "hidden"}); //"가 더 들어가있는 오류 수정 [ssun:20220315]
      }

    });
  }
})(jQuery);

if (matchMedia("screen and (min-width: 1024px)").matches) {
  $(function(){
  $(".dropdown").dropdown();
});
} else {
 $(function(){
});
}

/*전체메뉴*/

$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#gnb').toggleClass('open');

  $('body').toggleClass('scrollNon');
});
