// main.js
console.log('jquery...');

$(function(){
  // 마우스 오버시 메뉴 열림
  $('.depth1 > li').mouseover(function(){
    // class 추가되면 보임
    $('.depth2').addClass('show');
  });

  // 마우스가 나가면 메뉴 닫힘
  $('.depth1 > li').mouseout(function(){
    $('.depth2').removeClass('show');
  });
});