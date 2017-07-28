
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
 lessonInfor.eq(index).animate({height:"175px"},800);
 lessonInfor.eq(index).find("p").css({"opacity":"1","height":"52px","display":"block",});
 zhongji.eq(index).css("display","block");
 learnNumber.eq(index).css("display","block");
 lesspniconBox.eq(index).css("bottom","-2px");
 } ,
 function(){
 	lessonplay.eq(index*2).css("opacity","0");
 	lessonplay.eq(index*2+1).css("opacity","0");
 	lessonInfor.eq(index).css("height","88px");
 	lessonInfor.eq(index).find("p").css({"opacity":"0","height":"0px","display":"none",});
 	zhongji.eq(index).css("display","none");
 	learnNumber.eq(index).css("display","none");
 	lesspniconBox.eq(index).css("bottom","7px");
 });
});


/*菜单点击*/
$(".employhover").click(function(){
  $("active-green").css("color","#35b558");
})

});