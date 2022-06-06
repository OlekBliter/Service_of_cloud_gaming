$(function(){
    $('.burger').click(function(){
        $('.nav').toggleClass('show-nav')
        $('.social-box').toggleClass('show-social')
        $('.menu').toggleClass('show-menu')
        $('body').toggleClass('fixed')
    })
})