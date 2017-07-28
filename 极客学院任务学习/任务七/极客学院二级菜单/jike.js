
$(document).ready(function(){
/*点击搜索按钮弹出搜索框*/
$("#search-btn").click(function(){
	$("#searchbox").show(1000);
});
/*点击关闭按钮影藏搜索框*/
$("#close-btn").click(function(){
	$("#searchbox").hide(1000);
});
/*点击消息按钮弹出消息框*/
$("#openNoti").click(function(){
	$("#newMessageBox").toggle(1500);
});
/*视频图片在鼠标悬浮时弹出信息*/
 var lessonListLi=$(".lesson-list").find("li");/*得到.lesson-下的所有li*/
 var lessonplay=lessonListLi.find(".lessonplay");/*得到li下的所有.lessonplay*/
 var lessonInfor=lessonListLi.find(".lesson-infor");
 var zhongji=lessonListLi.find(".zhongji");
 var learnNumber=lessonListLi.find(".learn-number");
 var lesspniconBox=lessonListLi.find(".lesspnicon-box")
    
    lessonListLi.each(function(index){ /*循环lessonListLi集合*/
 lessonListLi.eq(index).hover(function(){ /*当某个li被鼠标悬浮时*/
 /*对应的元素做出改变*/
 lessonplay.eq(index*2).css("opacity","1");
 lessonplay.eq(index*2+1).css("opacity","1");
 lessonInfor.eq(index).stop().animate({height:"175px"},800);
 lessonInfor.eq(index).find("p").css({"opacity":"1","height":"52px","display":"block",});
 zhongji.eq(index).css("display","block");
 learnNumber.eq(index).css("display","block");
 lesspniconBox.eq(index).css("bottom","-2px");
 } ,
 function(){
 	lessonplay.eq(index*2).css("opacity","0");
 	lessonplay.eq(index*2+1).css("opacity","0");
 	lessonInfor.eq(index).stop().animate({height:"88px"},200);
 	lessonInfor.eq(index).find("p").css({"opacity":"0","height":"0px","display":"none",});
 	zhongji.eq(index).css("display","none");
 	learnNumber.eq(index).css("display","none");
 	lesspniconBox.eq(index).css("bottom","7px");
 });
});


/*菜单点击*/

// function changColor(meau){
//   meau.each(function(index){
// meau.eq(index).click(function(){
//    var meauIndex=meau.eq(index)
//    meauIndex.css("color","#35b558");
//    meau.splice(index,1);
//    meau.css("clor","#333333");
// });
// });
// }

// var meau=$(".nav-block").find("a");
//     meau.changColor();
// var tmeau=$(".navbar").find("a");
//     tmeau.changColor();
 var allA=$(".pages-cont").find(".page-number");
 var firstA=$(".pages-cont").find(".pgFirst");
 var upA=$(".pages-cont").find(".pgPrev");
 var nextA=$(".pages-cont").find(".pgNext");
 var lastA=$(".pages-cont").find(".pgLast");
 var y=allA.length;
// function changePage(){
//    for(var i=0;i<allA.length;i++){
// 	if(allA[i].href==window.location.href ){
// 	nowPage=allA[i];
// 	}
// }
// }
//alert(allA[y-1].href);

/*页码跳转*/
 firstA.click(function(){
 	firstA.attr("href",allA[0].href);
 })
lastA.click(function(){
	lastA.attr("href",allA[y-1].href);
})

upA.click(function(){
	var x;
	for(var i=0;i<allA.length;i++){
	if(allA[i].href==window.location.href ){
	nowPage=allA[i];
	x=i;
	}}
	if(nowPage=allA[0]){
		upA.attr("href",allA[0].href);
	}else{
		upA.attr("href",allA[x-1].href);
	}
});

nextA.click(function(){
	var x;
	for(var i=0;i<allA.length;i++){
	if(allA[i].href==window.location.href ){
	nowPage=allA[i];
    x=i;
	}
   }
    if(nowPage=allA[x-1]){
		nextA.attr("href",allA[x-1].href);
	}else{ nextA.attr("href",allA[x+1].href);
}

});

/*视频排序切换*/
var kuai=$(".previewMode").find(".kuai-icon");
var list=$(".previewMode").find(".list-icon");
var lessonContA=$(".lesson-card-cont");
var lessonContB=$(".lesson-card-cont2");

kuai.click(function(){
   lessonContA.css("display","block");
   lessonContB.css("display","none");
});

list.click(function(){
   lessonContB.css("display","block");
   lessonContA.css("display","none");
});








});