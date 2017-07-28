$(document).ready(function(){
	
	imgLocation();
	 var dataImg={"data":[{"src":"jb1.jpg"},{"src":"jb2.jpg"},{"src":"jb3.jpg"},{"src":"jb4.jpg"},
	 {"src":"jb5.jpg"},{"src":"jb6.jpg"},{"src":"jb7.jpg"},{"src":"jb8.jpg"},{"src":"jb9.jpg"},
	 {"src":"jb10.jpg"},{"src":"jb11.jpg"},{"src":"jb12.jpg"},{"src":"jb13.jpg"},{"src":"jb14.jpg"},
	 {"src":"jb15.jpg"},{"src":"jb16.jpg"},{"src":"jb17.jpg"},{"src":"jb18.jpg"},{"src":"jb19.jpg"},
	 {"src":"jb20.jpg"}]}
	 window.onscroll=function(){
	 	if (scrollside()) {
	 		$.each(dataImg.data,function(index,value){
	 			var box=$("<div>").addClass("box").appendTo($("#container"));
	 			var content=$("<div>").addClass("content").appendTo(box);
	 			$("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
	 			});

	 		imgLocation();

	 	};
       };	
});


 function scrollside(){
 	var box=$(".box");
 	var lastboxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
    var documentHeight=$(document).width();
    var scrollHeight=$(window).scrollTop();
     return (lastboxHeight<scrollHeight+documentHeight)?true:false;
 }

function imgLocation(){
	
	var box=$(".box");
	var boxWidth=box.eq(0).width();
	var num=Math.floor($(window).width()/boxWidth);
	var boxArr=[];
	box.each(function(index,value){
	
	 	var boxHeight=box.eq(index).height();
	 	 if(index<num){
	 		boxArr[index]=boxHeight;
        }else{
        	var minboxHeight=Math.min.apply(null,boxArr);
           	var minboxIndex=$.inArray(minboxHeight,boxArr);
          	$(value).css({
        		"position":"absolute",
          		"top":minboxHeight,
          		"left":box.eq(minboxIndex).position().left
        	});
        	boxArr[minboxIndex]+=box.eq(index).height();
          
        	}
	 });
}