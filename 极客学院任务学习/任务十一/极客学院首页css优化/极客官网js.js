$(document).ready(function(){
/*点击搜索按钮弹出搜索框*/
$(".search-icon").click(function(){
	$("#searchbox").show(1000);
});
/*点击关闭按钮影藏搜索框*/
$("#close-btn").click(function(){
	$("#searchbox").hide(1000);
});
/*轮播图动画*/ 
/*鼠标悬浮轮播图，按钮显示*/ 
$(".jk-banner").hover(function(){
 $("#banner-arrow-left").show(200);
 $("#banner-arrow-right").show(200);
 },function(){
 	$("#banner-arrow-left ").hide(100);
 $("#banner-arrow-right").hide(100);
});
/*点击按钮轮播图运动*/ 
 var swiper=$(".jk-banner .swiper-wrapper");
 var allA=$(".jk-banner .allA a");
 var swiperA=$(".jk-banner .swiper-wrapper a");
 

$("#banner-arrow-right").click(function(){
// 如果第一张图片的left为0
	if(swiperA.eq(0).css("left")=="0px"){
		
		var clone=swiperA.clone();
		
		clone.stop().animate({left:"-=2250px"},0);
        
        swiper.prepend(clone);

		swiperA=$(".jk-banner .swiper-wrapper a");
		
		swiperA.stop().animate({left:"+=750px"},500);
		
		setTimeout(function(){
		swiperA.slice(3).remove();
	    swiperA=$(".jk-banner .swiper-wrapper a");
	},800);
        downBtn();
}else{

	   swiperA.stop().animate({left:"+=750px"},500);
	   downBtn();
}


});

$("#banner-arrow-left").click(function(){

	if(swiperA.eq(2).css("left")=="0px"){
		
        var clone=swiperA.clone();
		
		clone.stop().animate({left:"+=2250px"},0);
        
        swiper.append(clone);

		swiperA=$(".jk-banner .swiper-wrapper a");
		
		swiperA.stop().animate({left:"-=750px"},600);

		setTimeout(function(){
		swiperA.eq(3).prevAll().remove();
	    swiperA=$(".jk-banner .swiper-wrapper a");
	},800);
		downBtn();
}else{
	swiperA.stop().animate({left:"-=750px"},600);
	downBtn();
}
});

/*轮播图下方按钮变化*/ 
function downBtn(){
if($("#pictureA").css("left")=="0px"){
	$(".swiper-pagination-switch").eq(0).css("background-color","#b7bab8");
	$(".swiper-pagination-switch").eq(1).css("background-color","#f0f0f0");
	$(".swiper-pagination-switch").eq(2).css("background-color","#f0f0f0");
}

if($("#pictureB").css("left")=="0px"){
	$(".swiper-pagination-switch").eq(0).css("background-color","#f0f0f0");
	$(".swiper-pagination-switch").eq(1).css("background-color","#b7bab8");
	$(".swiper-pagination-switch").eq(2).css("background-color","#f0f0f0");
}

if($("#pictureC").css("left")=="0px"){
	$(".swiper-pagination-switch").eq(0).css("background-color","#f0f0f0");
	$(".swiper-pagination-switch").eq(1).css("background-color","#f0f0f0");
	$(".swiper-pagination-switch").eq(2).css("background-color","#b7bab8");
}
}

/*学员故事点击轮播*/ 
$(".story-pagination .swiper-pagination-switch").eq(0).click(function(){
	$(".story-container .swiper-wrapper").css("position","absolute");
	$(".story-container .swiper-wrapper").stop().animate({left:"0px"});
	$(".story-pagination .swiper-pagination-switch").eq(0).css("background-color","#b7bab8");
	$(".story-pagination .swiper-pagination-switch").eq(1).css("background-color","#35b558");
});

$(".story-pagination .swiper-pagination-switch").eq(1).click(function(){
	$(".story-container .swiper-wrapper").css("position","absolute");
	$(".story-container .swiper-wrapper").stop().animate({left:"-1000px"});
	$(".story-pagination .swiper-pagination-switch").eq(1).css("background-color","#b7bab8");
	$(".story-pagination .swiper-pagination-switch").eq(0).css("background-color","#35b558");
});

});