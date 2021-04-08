$(window).on('scroll' , function(){
    if(window.scrollY > 1250){
        $('.skill_main').css('opacity' , '100').css('top' , '0px');
        $('.skill_list li').css('opacity' , '100').css('top' , '0px');
    }
    else if(window.scrollY > 1050){
        $('.skill_main').css('opacity' , '100').css('top' , '0px');
    }
})