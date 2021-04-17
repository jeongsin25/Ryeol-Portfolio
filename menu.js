$(".menubox").on('click' , function(){
    if($("#menubox_1").is(":checked") == true){
        $(".menubar").css("top" , "0px");
    }
    else if($("#menubox_1").is(":checked") == false){
        $(".menubar").css("top" , "-250px");
    }
})