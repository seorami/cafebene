$(function(){

  var count = 1; // 이미지 번호

  // slider.js
  function set_slider(c){
    $('.slider img, .indicator  a')
        .removeClass('show');
  
    count = c;
  
    $('.slider img')
        .eq(c)
        .addClass('show');
  
    $('.indicator  a')
        .eq(c)
        .addClass('show');
  };
  
  
  function slider(){
    setInterval(function(){
        console.log(count);
        if(count > 2) count = 0;
        // 모든 이미지 비표시
        $('.slider img').removeClass('show');
        // 현재 이미지만 표시
        $('.slider img')
            .eq(count)
            .addClass('show');
        
        // 인디게이터 이동
        $('.indicator > a').removeClass('show');
        $('.indicator > a')
        .eq(count)
        .addClass('show');
  
        count++;
    }, 5000);
  };
  
  
    // 인디케이터 버튼 클릭시
    set_slider(0);
    slider();
  
    $('#in01').click(function(){
        console.log("111")
        set_slider(0);
        return false;
    });
  
    $('#in02').click(function(){
        console.log("222")
        set_slider(1);
        return false;
    });
  
    $('#in03').click(function(){
        console.log("333")
        set_slider(2);
        return false;
    });
    


}); // end$






