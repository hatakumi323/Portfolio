//スクロール発火イベント
window.addEventListener( "scroll" ,function(){

  //スクロールの高さを取得
  let scroll = window.pageYOffset;
  
  if( scroll > 4000 ){ 
    document.body.style.backgroundColor = '#FFC400';
  }else if( scroll > 3000 ){
    document.body.style.backgroundColor = '#43A047';
  }else if( scroll > 2000 ){
    document.body.style.backgroundColor = '#FF6F00';
  }else if( scroll > 1000 ){
    document.body.style.backgroundColor = '#0091EA';
  }else{
    document.body.style.backgroundColor = '#FF4081';
  }
  
});