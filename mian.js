// ボタンの表示／非表示を切り替える関数
const updateButton = () => {
  if ($(window).scrollTop() >= 300) {
    // 300px以上スクロールされた
    // ボタンを表示
    $('.card-item').fadeIn();
  } else {
    // ボタンを非表示
    $('.card-item').fadeOut();
  }
};

// スクロールされる度にupdateButtonを実行
$(window).on('scroll', updateButton);

// ページの途中でリロード（再読み込み）された場合でも、ボタンが表示されるようにする
updateButton();