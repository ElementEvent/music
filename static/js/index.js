$(function(){

  function setHtmlFontSize(){
    let html = document.documentElement;
    let hWidth = html.getBoundingClientRect().width;
    if( hWidth<=600 ){
      /*
      *
      * 计算元素的rem值 把屏幕分为15份
      * 然后用设计图的长度 如(750) 除以 15 = 50 (每份rem长度)
      * 然后量出#header 高度103px  使用 103 / 50 = 2.06(rem)
      *
      * */
      html.style.fontSize = hWidth / 15 + "px";
    }else {
      html.style.fontSize = 16 + "px";
    }
  }
  setHtmlFontSize();
  $(window).on('resize',function () {
    console.log(1);
    setHtmlFontSize();
  })
});
