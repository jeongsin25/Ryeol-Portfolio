$(window).on('scroll' , function(){
    if(window.scrollY > window.innerHeight/2 + about.getBoundingClientRect().height - 150){
        $('.skill_main').css('opacity' , '100').css('top' , '0px');
        $('.skill_list li').css('opacity' , '100').css('top' , '0px');
    }
})