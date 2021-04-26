$(".menubox").on('click' , function(){
    if($("#menubox_1").is(":checked") == true){
        $(".menubar").css("top" , "60px");
    }
    else if($("#menubox_1").is(":checked") == false){
        $(".menubar").css("top" , "-190px");
        $("#menubox_1").prop("checked", false);
    }
})

$(".menubar ul li:nth-child(1)").on('click' , function(){
    window.scroll(0,0);
    $(".menubar").css("top" , "-190px");
    $("#menubox_1").prop("checked", false)
})
$(".menubar ul li:nth-child(2)").on('click' , function(){
    window.scroll(0,window.innerHeight);
    $(".menubar").css("top" , "-190px");
    $("#menubox_1").prop("checked", false)
})
$(".menubar ul li:nth-child(3)").on('click' , function(){
    window.scroll(0,window.innerHeight + about.getBoundingClientRect().height);
    $(".menubar").css("top" , "-190px");
    $("#menubox_1").prop("checked", false)
})
$(".menubar ul li:nth-child(4)").on('click' , function(){
    window.scroll(0,window.innerHeight + about.getBoundingClientRect().height + skill.getBoundingClientRect().height);
    $(".menubar").css("top" , "-190px");
    $("#menubox_1").prop("checked", false)
})







