var about = document.getElementById('about');
var skill = document.getElementById('skill');
var portfolio = document.getElementById('portfolio');
var portfolio_main = document.getElementsByClassName('portfolio_main')[0];
var portfolio_menu = document.getElementsByClassName('portfolio_menu')[0];
var portfolio_sub = document.getElementsByClassName('portfolio_sub');
var sub_portfolio = document.getElementsByClassName('sub_portfolio');
$('.portfolio_menu > ul > li:nth-child(1)').on('click' , function(){
    window.scroll(0,window.innerHeight + about.getBoundingClientRect().height + skill.getBoundingClientRect().height + portfolio_main.getBoundingClientRect().height + portfolio_menu.getBoundingClientRect().height);
})
$('.portfolio_menu > ul > li:nth-child(2)').on('click' , function(){
    window.scroll(0,window.innerHeight + about.getBoundingClientRect().height + skill.getBoundingClientRect().height + portfolio_main.getBoundingClientRect().height + portfolio_menu.getBoundingClientRect().height + portfolio_sub[0].getBoundingClientRect().height + sub_portfolio[0].getBoundingClientRect().height);
})
$('.portfolio_menu > ul > li:nth-child(3)').on('click' , function(){
    window.scroll(0,window.innerHeight + about.getBoundingClientRect().height + skill.getBoundingClientRect().height + portfolio_main.getBoundingClientRect().height + portfolio_menu.getBoundingClientRect().height + portfolio_sub[0].getBoundingClientRect().height + sub_portfolio[0].getBoundingClientRect().height + portfolio_sub[1].getBoundingClientRect().height + sub_portfolio[1].getBoundingClientRect().height + sub_portfolio[2].getBoundingClientRect().height + sub_portfolio[3].getBoundingClientRect().height);
})
$('.portfolio_menu > ul > li:nth-child(4)').on('click' , function(){
    window.scroll(0,window.innerHeight + about.getBoundingClientRect().height + skill.getBoundingClientRect().height + portfolio_main.getBoundingClientRect().height + portfolio_menu.getBoundingClientRect().height + portfolio_sub[0].getBoundingClientRect().height + sub_portfolio[0].getBoundingClientRect().height + portfolio_sub[1].getBoundingClientRect().height + sub_portfolio[1].getBoundingClientRect().height + sub_portfolio[2].getBoundingClientRect().height + sub_portfolio[3].getBoundingClientRect().height + portfolio_sub[2].getBoundingClientRect().height + sub_portfolio[4].getBoundingClientRect().height);
})

