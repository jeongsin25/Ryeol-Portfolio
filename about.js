$(window).on('scroll' , function(){
    if(window.scrollY > 350){
        $('.about_main').css('opacity' , '100').css('top' , '0')
        $('.face_img img').css('opacity' , '100');
        $('.list_total h1').css('opacity' , '100').css('top' , '0px');
        $('.list_total p b , .list_total p span').css('opacity' , '100').css('left' , '0');
    }
    else if(window.scrollY > 150){
        $('.about_main').css('opacity' , '100').css('top' , '0')
    }
})