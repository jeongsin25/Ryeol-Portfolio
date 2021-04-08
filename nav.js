$('.submenu li:nth-child(1)').css('background' , 'rgba(247, 201, 76, 1)')

// 클릭했을때 버튼 변화
$('.submenu li:nth-child(1)').on('click' , function(){
    window.scroll(0,0);
    if($('.submenu li').css('background' , 'rgba(247, 201, 76, 1)')){
        $('.submenu li').css('background' , 'rgba(104, 104, 104, 1)');
    }
    $(this).css('background' , 'rgba(247, 201, 76, 1)')
})
$('.submenu li:nth-child(2)').on('click' , function(){
    window.scroll(0,752);
    if($('.submenu li').css('background' , 'rgba(247, 201, 76, 1)')){
        $('.submenu li').css('background' , 'rgba(104, 104, 104, 1)');
    }
    $(this).css('background' , 'rgba(247, 201, 76, 1)')
})
$('.submenu li:nth-child(3)').on('click' , function(){
    window.scroll(0,1578);
    if($('.submenu li').css('background' , 'rgba(247, 201, 76, 1)')){
        $('.submenu li').css('background' , 'rgba(104, 104, 104, 1)');
    }
    $(this).css('background' , 'rgba(247, 201, 76, 1)')
})
$('.submenu li:nth-child(4)').on('click' , function(){
    window.scroll(0,2477);
    if($('.submenu li').css('background' , 'rgba(247, 201, 76, 1)')){
        $('.submenu li').css('background' , 'rgba(104, 104, 104, 1)');
    }
    $(this).css('background' , 'rgba(247, 201, 76, 1)')
})

// 스크롤했을때 버튼 변화
$(window).on('scroll' , function(){
    if(window.scrollY < 752){
        if($('.submenu li').css('background' , 'rgba(247, 201, 76, 1)')){
            $('.submenu li').css('background' , 'rgba(104, 104, 104, 1)');
        }
        $('.submenu li:nth-child(1)').css('background' , 'rgba(247, 201, 76, 1)');
    }
    else if(window.scrollY < 1577){
        if($('.submenu li').css('background' , 'rgba(247, 201, 76, 1)')){
            $('.submenu li').css('background' , 'rgba(104, 104, 104, 1)');
        }
        $('.submenu li:nth-child(2)').css('background' , 'rgba(247, 201, 76, 1)');
    }
    else if(window.scrollY < 2475){
        if($('.submenu li').css('background' , 'rgba(247, 201, 76, 1)')){
            $('.submenu li').css('background' , 'rgba(104, 104, 104, 1)');
        }
        $('.submenu li:nth-child(3)').css('background' , 'rgba(247, 201, 76, 1)');
    }
    else if(window.scrollY > 2476){
        if($('.submenu li').css('background' , 'rgba(247, 201, 76, 1)')){
            $('.submenu li').css('background' , 'rgba(104, 104, 104, 1)');
        }
        $('.submenu li:nth-child(4)').css('background' , 'rgba(247, 201, 76, 1)');
    }
})





