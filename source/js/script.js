$(function(){
  var nav_height = 70;

  /* スムーズスクロール */
  $('a[href^=#]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - nav_height;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  /* スクロールした時の処理 */
  var nav_offset = $("nav").offset().top;
  var philosophy_offset = $("#philosophy").offset().top;
  var works_offset = $("#works").offset().top;
  var member_offset = $("#member").offset().top;
  var about_offset = $("#about").offset().top;

  $(window).scroll(function(){
    /* ナビメニュー固定 */
    if($(this).scrollTop() > nav_offset) {
      $("nav").addClass("fixed");
      $("#philosophy").addClass("after-navfix");
    }else {
      $("nav").removeClass("fixed");
      $("#philosophy").removeClass("after-navfix");
    }

    /* 表示中メニューの色変え */
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop() + nav_height;
    if($(this).scrollTop()+nav_height > about_offset || scrollHeight - scrollPosition < 0 ) {
      $("nav li a").removeClass("active");
      $("nav li:nth-child(1) a").addClass("active");
    }else if($(this).scrollTop()+nav_height > member_offset) {
      $("nav li a").removeClass("active");
      $("nav li:nth-child(2) a").addClass("active");
    }else if($(this).scrollTop()+nav_height > works_offset) {
      $("nav li a").removeClass("active");
      $("nav li:nth-child(3) a").addClass("active");
    }else if($(this).scrollTop()+nav_height > philosophy_offset) {
      $("nav li a").removeClass("active");
      $("nav li:nth-child(4) a").addClass("active");
    }else {
      $("nav li a").removeClass("active");
    }
  });
});

