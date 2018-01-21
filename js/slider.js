$(document).ready(function(){
    var slideWidth = $('.slider ul li').width();
    var timer= setInterval(function () {
        moveRight();
    }, 5000);
    $('.slider ul li:last-child').prependTo('.slider ul');

    function moveLeft() {
        slideWidth = $('.slider ul li').width();
        $('.slider ul').animate({
            right: - slideWidth
        }, 1500, function () {
//                slideWidth = $('.slider ul li').width();
            $('.slider ul li:last-child').prependTo('.slider ul');
            $('.slider ul').css('right', '');
        });
        slideWidth = $('.slider ul li').width();
    }
    function moveRight() {
        slideWidth = $('.slider ul li').width();
        $('.slider ul').animate({
            left: - slideWidth
        }, 1500, function () {
            $('.slider ul li:first-child').appendTo('.slider ul');
            $('.slider ul').css('left', '');
        });
//            slideWidth = $('.slider ul li').width();
    }
    $('.prev').click(function () {
        moveLeft();
        clearInterval(timer);
        timer= setInterval(function () {
            moveRight();
        }, 5000);
    });

    $('.next').click(function () {
        moveRight();
        clearInterval(timer);
        timer= setInterval(function () {
            moveRight();
        }, 5000);
    });
    $('.social a').click(function(){
        window.open(this.href);
        return false;
    });
});