$(document).ready(function () {

    // 주메뉴 모션 적용
    let nav = $('.nav');
    let headerMain = $('.header-main');
    let logo = $('.logo');
    nav.mouseenter(function () {
        $(this).addClass('nav-active');
    });
    headerMain.mouseleave(function () {
        nav.removeClass('nav-active');
    });
    logo.mouseenter(function () {
        nav.removeClass('nav-active');
    });

    // 스크롤 기능
    let header = $('.header')
    $(window).scroll(function () {
        let temp = $(window).scrollTop();
        if (temp > 0) {
            header.addClass('fix-active')
        } else {
            header.removeClass('fix-active')
        }
    });

    // 모바일 메뉴
    let mBt = $('.m-bt');
    let mMenuBg = $('.m-menu-bg');
    let mMenuWrap = $('.m-menu-wrap');
    let mBtClose = $('.m-bt-close');

    mBt.click(function () {
        mMenuWrap.addClass('m-menu-wrap-active');
        mMenuBg.addClass('m-menu-bg-active');
    });
    mBtClose.click(function () {
        mMenuWrap.removeClass('m-menu-wrap-active');
        mMenuBg.removeClass('m-menu-bg-active');
    });

    mMenuBg.click(function () {
        mMenuWrap.removeClass('m-menu-wrap-active');
        mMenuBg.removeClass('m-menu-bg-active');
    });

    // 화면 리사이징 처리
    $(window).resize(function () {
        let w = $(window).width();
        if (w > 700) {
            mMenuWrap.removeClass('m-menu-wrap-active');
            mMenuBg.removeClass('m-menu-bg-active');
        }
    });




});
window.onload= function () {
     // visual slide
     let swVisual = new Swiper('.sw-visual',{
        loop: true,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            prevEl : '.sw-visual-prev',
            nextEl : '.sw-visual-next'
        }
    });
     let swstory = new Swiper('.sw-story',{
        loop: true,
        autoplay: {
            delay: 1000,
            disableoninteraction: false
        },
        speed: 1000,
        navigation: {
            prevEl : '.sw-story-prev',
            nextEl : '.sw-story-next'
        }
    });
     let sw_good = new Swiper('.sw-good',{
        loop: true,
        pagination:{
            el:'.sw-good-pg',
            clickable:true
        },
        autoplay: {
            delay: 1000,
            disableoninteraction: false
        },
        speed: 1000,
        navigation: {
            prevEl : '.sw-good-prev',
            nextEl : '.sw-good-next'
        }
    });
    // 상단이동버튼
    $('.gotop').click(function(){
        $('html').animate({
            scrolltop:0
        },500);
    })
};