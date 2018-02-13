$(function(){
    if ('ontouchstart' in window) {
        var click = 'touchstart';
    } else {
        var click = 'click';
    }

    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;
    if (screenWidth < 768) {
        $(".home .carousel,.xs-menu").css("height", screenHeight);
        $(".xs-menu > ul > li > a").eq(3).click(function(e){
            e.preventDefault();
        });

    }

    $('button.burger').on(click, function() {
        if (!$(this).hasClass('open')) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    //导航搜索框
    $(".navbar .input-group > input.form-control").click(function(e){
        $(this).parent(".input-group").addClass("active");
        e.stopPropagation();
    })
    $(document).click(function(e){
        $(".navbar .input-group").removeClass("active");
        e.stopPropagation();
    });

        $(".xs-menu > ul > li > a").click(function() {
            $(this).siblings("ul").slideDown().parent("li").siblings().children("ul").slideUp();
        });
        $(".xs-menu > ul > li > ul > li > a").click(function() {
            closeMenu();
        });

});


function openMenu() {
    $('body .xs-menu').stop().animate({"left": 0}, 300);
    $('body > nav').stop().animate({"left": 210}, 300);
    $('body').stop().animate({"left": 210}, 300).css({"overflow-y":"hidden","position":"absolute"});
    $('button.burger').addClass('open');
}

function closeMenu() {
    $('body .xs-menu').stop().animate({"left": -210}, 300);
    $('body > nav').stop().animate({"left": 0}, 300);
    $('body').stop().animate({"left": 0}, 300).css({"overflow-y":"auto","position":"inherit"});
    $('button.burger').removeClass('open');
}


//导航之合作伙伴链接跳转
function getQueryString(name) {  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
    var r = window.location.search.substr(1).match(reg);  
    if (r != null) return unescape(r[2]); return null;  
}  


