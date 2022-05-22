$(function(){
    $('.burger').click(function(){
        $('.nav').toggleClass('show-nav')
        $('.menu').toggleClass('show-menu')
        $('body').toggleClass('fixed')
    })
})