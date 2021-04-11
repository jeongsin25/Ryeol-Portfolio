$('.submenu li:nth-child(1)').css('background' , 'rgba(247, 201, 76, 1)')


var about = document.getElementById('about');
var skill = document.getElementById('skill');
var portfolio = document.getElementById('portfolio');
// 클릭했을때 버튼 변화
$('.submenu li:nth-child(1)').on('click' , function(){
    window.scroll(0,0);
    if($('.submenu li').css('background' , 'rgba(247, 201, 76, 1)')){
        $('.submenu li').css('background' , 'rgba(104, 104, 104, 1)');
    }
    $(this).css('background' , 'rgba(247, 201, 76, 1)')
})
$('.submenu li:nth-child(2)').on('click' , function(){
    window.scroll(0,window.innerHeight);
    if($('.submenu li').css('background' , 'rgba(247, 201, 76, 1)')){
        $('.submenu li').css('background' , 'rgba(104, 104, 104, 1)');
    }
    $(this).css('background' , 'rgba(247, 201, 76, 1)')
})
$('.submenu li:nth-child(3)').on('click' , function(){
    window.scroll(0,window.innerHeight + about.getBoundingClientRect().height);
    if($('.submenu li').css('background' , 'rgba(247, 201, 76, 1)')){
        $('.submenu li').css('background' , 'rgba(104, 104, 104, 1)');
    }
    $(this).css('background' , 'rgba(247, 201, 76, 1)')
})
$('.submenu li:nth-child(4)').on('click' , function(){
    window.scroll(0,window.innerHeight + about.getBoundingClientRect().height + skill.getBoundingClientRect().height);
    if($('.submenu li').css('background' , 'rgba(247, 201, 76, 1)')){
        $('.submenu li').css('background' , 'rgba(104, 104, 104, 1)');
    }
    $(this).css('background' , 'rgba(247, 201, 76, 1)')
})

// 스크롤했을때 버튼 변화
$(window).on('scroll' , function(){
    if(window.scrollY < window.innerHeight/2){
        if($('.submenu li').css('background' , 'rgba(247, 201, 76, 1)')){
            $('.submenu li').css('background' , 'rgba(104, 104, 104, 1)');
        }
        $('.submenu li:nth-child(1)').css('background' , 'rgba(247, 201, 76, 1)');
    }
    else if(window.scrollY < window.innerHeight/2 + about.getBoundingClientRect().height){
        if($('.submenu li').css('background' , 'rgba(247, 201, 76, 1)')){
            $('.submenu li').css('background' , 'rgba(104, 104, 104, 1)');
        }
        $('.submenu li:nth-child(2)').css('background' , 'rgba(247, 201, 76, 1)');
    }
    else if(window.scrollY < window.innerHeight/2 + about.getBoundingClientRect().height + skill.getBoundingClientRect().height){
        if($('.submenu li').css('background' , 'rgba(247, 201, 76, 1)')){
            $('.submenu li').css('background' , 'rgba(104, 104, 104, 1)');
        }
        $('.submenu li:nth-child(3)').css('background' , 'rgba(247, 201, 76, 1)');
    }
    else if(window.scrollY < window.innerHeight/2 + about.getBoundingClientRect().height + skill.getBoundingClientRect().height + portfolio.getBoundingClientRect().height){
        if($('.submenu li').css('background' , 'rgba(247, 201, 76, 1)')){
            $('.submenu li').css('background' , 'rgba(104, 104, 104, 1)');
        }
        $('.submenu li:nth-child(4)').css('background' , 'rgba(247, 201, 76, 1)');
    }
})





