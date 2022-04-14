$(document).ready(function(){
  var bodyWidth = $('body').width();
  if (bodyWidth > 1024) {
    $(window).scroll(function(){
      var scroll = $(window).scrollTop(); //현재 스크롤 위치
      var pageHeight = $(document).height() - $(window).height(); //페이지 전체 높이
      var pageHeight_start = pageHeight * 0.2;
      var pageHeight_end = pageHeight * 0.85;

      if ( pageHeight_start > scroll & scroll > 160 ) {
        $(".productLeft").removeClass("is_scrollEnd").addClass("is_scroll160");
      }
      else if ( pageHeight_end < scroll ) {
        $(".productLeft").removeClass("is_scroll160").addClass("is_scrollEnd");
        $(".fixed_fr").css('z-index', '-1');
      }
      else if ( 159 > scroll & pageHeight_start > scroll ) {
        $(".productLeft").removeClass("is_scroll160");
        $(".fixed_fr").css('z-index', 'unset');
      }
    });
  }

  $('.productImgSmall').on("click", function() {
    var smallSrc = $(this).attr("src");
    var bigSrc = $('.productImgBig').attr("src");

    $(this).attr("src", bigSrc);
    $('.productImgBig').attr("src", smallSrc);
  });
})