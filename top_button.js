$(window).on('scroll' , function(){
    if(window.scrollY > window.innerHeight/2){
        $('#top_button').fadeIn(500);
    }
    else{
        $('#top_button').fadeOut(500);
    }
})