
	var screenWidth = window.screen.width;
	var block = $(".navBar .nav .block");

$(".tab-content > .tab-pane:not(:last)").find(".carousel-control.right").click(function(){
	var Ind = $(this).siblings(".carousel-inner").children(".active").index();
	var Las = $(this).siblings(".carousel-inner").children(".item").length - 1;
	if(Ind == Las){
		$(this).parents(".tab-pane").removeClass("in active").next().addClass("in active");
		$(".navBar .m").eq($(this).parents(".tab-pane").index()).removeClass("on active").next().addClass("on active");
		if (screenWidth < 768) {
            block.stop().animate({
                "left": $(".navBar .m").eq($(this).parents(".tab-pane").index()).next().position().top
            }, 300);
        } else {
            block.stop().animate({
                "left": $(".navBar .m").eq($(this).parents(".tab-pane").index()).next().position().left
            }, 300);
        }
}
});

$(".tab-content > .tab-pane:not(:first)").find(".carousel-control.left").click(function(){
	var Ind = $(this).siblings(".carousel-inner").children(".active").index();
	if(Ind == 0){
		$(this).parents(".tab-pane").removeClass("in active").prev().addClass("in active");
		$(".navBar .m").eq($(this).parents(".tab-pane").index()).removeClass("on active").prev().addClass("on active");
		if (screenWidth < 768) {
            block.stop().animate({
                "left": $(".navBar .m").eq($(this).parents(".tab-pane").index()).prev().position().top
            }, 300);
        } else {
            block.stop().animate({
                "left": $(".navBar .m").eq($(this).parents(".tab-pane").index()).prev().position().left
            }, 300);
        }
}
});