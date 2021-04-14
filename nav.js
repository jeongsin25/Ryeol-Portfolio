$('.submenu li:nth-child(1) div').css('background' , 'rgba(247, 201, 76, 1)').css('width' , '12px').css('height' , '12px');


var about = document.getElementById('about');
var skill = document.getElementById('skill');
var portfolio = document.getElementById('portfolio');
// 클릭했을때 버튼 변화
$('.submenu li:nth-child(1) div').on('click' , function(){
    window.scroll(0,0);
    if($('.submenu li div').css('background' , 'rgba(247, 201, 76, 1)')){
        $('.submenu li div').css('background' , 'rgba(104, 104, 104, 1)');
    }
    $(this).css('background' , 'rgba(247, 201, 76, 1)')
})
$('.submenu li:nth-child(2) div').on('click' , function(){
    window.scroll(0,window.innerHeight);
    if($('.submenu li div').css('background' , 'rgba(247, 201, 76, 1)')){
        $('.submenu li div').css('background' , 'rgba(104, 104, 104, 1)');
    }
    $(this).css('background' , 'rgba(247, 201, 76, 1)')
})
$('.submenu li:nth-child(3) div').on('click' , function(){
    window.scroll(0,window.innerHeight + about.getBoundingClientRect().height);
    if($('.submenu li div').css('background' , 'rgba(247, 201, 76, 1)')){
        $('.submenu li div').css('background' , 'rgba(104, 104, 104, 1)');
    }
    $(this).css('background' , 'rgba(247, 201, 76, 1)')
})
$('.submenu li:nth-child(4) div').on('click' , function(){
    window.scroll(0,window.innerHeight + about.getBoundingClientRect().height + skill.getBoundingClientRect().height);
    if($('.submenu li div').css('background' , 'rgba(247, 201, 76, 1)')){
        $('.submenu li div').css('background' , 'rgba(104, 104, 104, 1)');
    }
    $(this).css('background' , 'rgba(247, 201, 76, 1)')
})

// 스크롤했을때 버튼 변화
$(window).on('scroll' , function(){
    if(window.scrollY < window.innerHeight/2){
        if($('.submenu li div').css('background' , 'rgba(247, 201, 76, 1)')){
            $('.submenu li div').css('background' , 'rgba(104, 104, 104, 1)');
        }
        if($('.submenu li div').css('width' , '12px').css('height' , '12px')){
            $('.submenu li div').css('width' , '8px').css('height' , '8px');
        }
        $('.submenu li:nth-child(1) div').css('background' , 'rgba(247, 201, 76, 1)').css('width' , '12px').css('height' , '12px');
    }
    else if(window.scrollY < window.innerHeight/2 + about.getBoundingClientRect().height){
        if($('.submenu li div').css('background' , 'rgba(247, 201, 76, 1)')){
            $('.submenu li div').css('background' , 'rgba(104, 104, 104, 1)');
        }
        if($('.submenu li div').css('width' , '12px').css('height' , '12px')){
            $('.submenu li div').css('width' , '8px').css('height' , '8px');
        }
        $('.submenu li:nth-child(2) div').css('background' , 'rgba(247, 201, 76, 1)').css('width' , '12px').css('height' , '12px');;
    }
    else if(window.scrollY < window.innerHeight/2 + about.getBoundingClientRect().height + skill.getBoundingClientRect().height){
        if($('.submenu li div').css('background' , 'rgba(247, 201, 76, 1)')){
            $('.submenu li div').css('background' , 'rgba(104, 104, 104, 1)');
        }
        if($('.submenu li div').css('width' , '12px').css('height' , '12px')){
            $('.submenu li div').css('width' , '8px').css('height' , '8px');
        }
        $('.submenu li:nth-child(3) div').css('background' , 'rgba(247, 201, 76, 1)').css('width' , '12px').css('height' , '12px');;
    }
    else if(window.scrollY < window.innerHeight/2 + about.getBoundingClientRect().height + skill.getBoundingClientRect().height + portfolio.getBoundingClientRect().height){
        if($('.submenu li div').css('background' , 'rgba(247, 201, 76, 1)')){
            $('.submenu li div').css('background' , 'rgba(104, 104, 104, 1)');
        }
        if($('.submenu li div').css('width' , '12px').css('height' , '12px')){
            $('.submenu li div').css('width' , '8px').css('height' , '8px');
        }
        $('.submenu li:nth-child(4) div').css('background' , 'rgba(247, 201, 76, 1)').css('width' , '12px').css('height' , '12px');;
    }
})


// 마우스 올렸을때
$('.submenu > li > div').hover(function(){
    $(this).css('cursor' , 'pointer').css('background' , 'rgba(247, 201, 76, 1)');
    $(this.parentElement.lastElementChild).fadeIn();
},function(){
    $(this).css('background' , 'rgba(104, 104, 104, 1)')
    $(this.parentElement.lastElementChild).css('display' , 'none');
    if($(this).css('width') === "12px"){
        $(this).css('background' , 'rgba(247, 201, 76, 1)');
    }
})




