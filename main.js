// スマホナビの表示・非表示
$(function(){
  const hum = $('#hamburger,.close')
  const nav = $('.sp-nav')
  hum.on('click',function(){
    nav.toggleClass('toggle');
  });
});

// ボタンの表示／非表示を切り替える関数
const updateButton = () => {
    if ($(window).scrollTop() >= 300) {
      // 300px以上スクロールされた
      // ボタンを表示
      $('.back-to-top').fadeIn();
    } else {
      // ボタンを非表示
      $('.back-to-top').fadeOut();
    }
  };
  
  // スクロールされる度にupdateButtonを実行
  $(window).on('scroll', updateButton);
  
  // ボタンをクリックしたらページトップにスクロールする
  $('.back-to-top').on('click', (e) => {
    // ボタンのhrefに遷移しない
    e.preventDefault();
  
    // 600ミリ秒かけてトップに戻る
    $('html, body').animate({ scrollTop: 0 }, 600);
  });
  
  // ページの途中でリロード（再読み込み）された場合でも、ボタンが表示されるようにする
  updateButton();


  // アンカーリンク
  $(function(){
    $('a[href^="#"]').click(function(){
      var speed = 600;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });