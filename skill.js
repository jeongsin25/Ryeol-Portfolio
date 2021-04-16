$(window).on('scroll' , function(){
    if(window.scrollY > window.innerHeight/2 + about.getBoundingClientRect().height - 150){
        $('.skill_main').css('opacity' , '100').css('top' , '0px');
        $('.skill_img').css('opacity' , '100').css('top' , '0px');
        $('.skill_gauge').css('opacity' , '100').css('top' , '0px');
        $('.skill_gauge_1').css('transform' , 'scaleX(1)');
        $('.skill_gauge_2').css('transform' , 'scaleX(1)');
        $('.skill_gauge_3').css('transform' , 'scaleX(1)');
        $('.skill_gauge_4').css('transform' , 'scaleX(1)');
        $('.skill_gauge_5').css('transform' , 'scaleX(1)');
        $('.skill_gauge_6').css('transform' , 'scaleX(1)');
        $('.skill_gauge_7').css('transform' , 'scaleX(1)');
        $('.skill_gauge_8').css('transform' , 'scaleX(1)');
        $('.skill_percent').css('opacity' , '100');
    }
})


// 퍼센트 올라가기


// $(function() {
//     // for(var i = 0 ; i < $(".skill_percent div").length ; i++){
//     //     var skill_percent_div = $(".skill_percent div")[i].innerText;
//     // }
//     var cnt0 = 0;

//     setTimeout(counterFn , 1000)

//     function counterFn() {

//         id0 = setInterval(count0Fn, 20);
        
//         function count0Fn() {
//             cnt0++;
//             if (cnt0 > 90) {
//             clearInterval(id0);
//             } else {
//             $(".skill_percent div").text(cnt0);
//             }
//         }
//     }
//   });

//임시












