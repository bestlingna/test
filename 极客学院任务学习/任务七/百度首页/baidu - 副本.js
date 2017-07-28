$(document).ready(function(){
	/*个人中心下拉框*/
	
	 $("#s_username_top").hover(function(){
	 	$("#s_user_name_menu").css("display","block");
	 },function(){
	 	$("#s_user_name_menu").hover(function(){
			$("#s_user_name_menu").css("display","block");
	 	},function(){
	 		$("#s_user_name_menu").css("display","none");
	 	});

	 	$("#s_user_name_menu").css("display","none");
	 });

	/*设置下拉框*/
	$("#s_usersetting_top").hover(function(){
		$("#s_user_setting_menu").css("display","block");
	},function(){
		$("#s_user_setting_menu").hover(function(){
			$("#s_user_setting_menu").css("display","block");
		},function(){
			$("#s_user_setting_menu").css("display","none");
		});

		$("#s_user_setting_menu").css("display","none");
	});


	/*更多产品下拉框*/
	$(".s_bri").hover(function(){
		$(".s_bdbri").css("display","block");
	},function(){
		$(".s_bdbri").hover(function(){
			$(".s_bdbri").css("display","block");
		},function(){
			$(".s_bdbri").css("display","none");
		});

		$(".s_bdbri").css("display","none");
	});

	/*我的关注、推荐、导航、视频切换*/
	var mineText=$("#s_menu_mine").find(".mine-text");
	var meauItem=$("#s_menus_wrapper").find(".s-menu-item");
	var textContent=$("#s_content_100");
	var suessContent=$("#s_content_2");
	var navContent=$("#s_content_1");
	var videoContent=$("#s_content_15");

	mineText.click(function(){
		textContent.css("display","block");
		suessContent.css("display","none");
		navContent.css("display","none");
		videoContent.css("display","none");

	});


	meauItem.eq(0).click(function(){
		textContent.css("display","none");
		suessContent.css("display","block");
		navContent.css("display","none");
		videoContent.css("display","none");
	});



	meauItem.eq(1).click(function(){
		textContent.css("display","none");
		suessContent.css("display","none");
		navContent.css("display","block");
		videoContent.css("display","none");
	});



	meauItem.eq(2).click(function(){
		textContent.css("display","none");
		suessContent.css("display","none");
		navContent.css("display","none");
		videoContent.css("display","block");
	});
/*换肤：弹出收起*/
var showSkinDiv=$(".s-icons").find(".s-skin")
var hideSkinDiv=$(".s-skin-setting").find(".skin-bg-icon")
var SkinDiv=$("#s_skin_layer")
showSkinDiv.click(function(){
    SkinDiv.show();
});
hideSkinDiv.click(function(){
    SkinDiv.hide();
});
/*换肤：游戏、热门、卡通、明星等切换*/
 var skinHeadLi=$(".s-skin-header").find(".s-skin-nav").find("li");
 var skinImgFatherLi=$("#s_skin_img_content").find(".s-skin-content").children("li");
     alert(skinImgFatherLi.length); 
  function  changeSkinHeadLi(i){
        var skinHeadLiAll=[];
            skinHeadLiAll=skinHeadLi;
        var newSkinHeadLi=[];
   	    var BlockSkinHeadLi=[];
            
            skinHeadLiAll[i].style.backgroundColor="#389cff";
   			
   			BlockSkinHeadLi.push(skinHeadLiAll[i]);
   			alert(BlockSkinHeadLi.length); 
   			
   			skinHeadLiAll.splice(i,1);
            newSkinHeadLi=skinHeadLiAll;
            alert(newSkinHeadLi.length); 
   			
   			for(var x=0;x<newSkinHeadLi.length;x++){
            newSkinHeadLi[x].style.backgroundColor="#fff";
          }
           skinHeadLiAll.push(BlockSkinHeadLi[0]);
       }

   function  changeSkinImgLi(i){
        var skinImgLi=[];
            skinImgLi=skinImgFatherLi;
        var newSkinImgLi=[];
   	    var BlockSkinImgLi=[];
            
            skinImgLi[i].style.display="block";
   			
   			BlockSkinImgLi.push(skinImgLi[i]);
   			alert(BlockSkinImgLi.length); 
   			
   			skinImgLi.splice(i,1);
            newSkinImgLi=skinImgLi;
            alert(newSkinImgLi.length); 
   			
   			for(var x=0;x<newSkinImgLi.length;x++){
            newSkinImgLi[x].style.display="none";
          }
           skinImgLi.push(BlockSkinImgLi[0]);
       }

       skinHeadLi[0].onclick=function(){
       	changeSkinHeadLi(0)
       	changeSkinImgLi(0);
       }
       skinHeadLi[1].onclick=function(){
       	changeSkinHeadLi(1)
       	changeSkinImgLi(1);
       }

       skinHeadLi[2].onclick=function(){
       	changeSkinHeadLi(2)
       	changeSkinImgLi(2);
       }

       skinHeadLi[3].onclick=function(){
       	changeSkinHeadLi(3)
       	changeSkinImgLi(3);
       }

       skinHeadLi[4].onclick=function(){
       	changeSkinHeadLi(4)
       	changeSkinImgLi(4);
       }
       skinHeadLi[5].onclick=function(){
       	changeSkinHeadLi(5)
       	changeSkinImgLi(5);
       }
       skinHeadLi[6].onclick=function(){
       	changeSkinHeadLi(6)
       	changeSkinImgLi(6);
       }

       skinHeadLi[7].onclick=function(){
       	changeSkinHeadLi(7)
       	changeSkinImgLi(7);
       }
       skinHeadLi[8].onclick=function(){
       	changeSkinHeadLi(8)
       	changeSkinImgLi(8);
       }
       skinHeadLi[9].onclick=function(){
       	changeSkinHeadLi(9)
       	changeSkinImgLi(9);
       }


         
   
/*点击图片，更换背景,图片鼠标悬浮，右边框预览*/

var sinkImgLi=$("#s_skin_img_content").find(".s-skin-content").children("li");
var sinAllImg=sinkImgLi.find("img");
var sinAllImgLi=sinkImgLi.find(".skin-img-list ").find("li");
var bodyImg=$(".s-skin-container");
var  skinPreview=$("#s_skin_preview_skin");
alert(sinAllImgLi.length);
alert(skinPreview.attr("src"));  

sinAllImgLi.each(function(index){
	sinAllImgLi.eq(index).click(function(){
		newSrc=sinAllImg.eq(index).attr("src");
		bodyImg.css("background-image","url("+newSrc+")"); 

		localStorage.setItem("skin", newSrc);
        //设置一个新的localStorage,name为"Skin",value为color(skinChange函数的参数)
    });
});


sinAllImgLi.each(function(index){
	sinAllImgLi.eq(index).hover(function(){
		newSrc=sinAllImg.eq(index).attr("src");
		skinPreview.attr("src",newSrc);  
	}); 
});


function getStorage(){//定义一个得到localStorage的函数 
	if (!window.localStorage) {
				//如果浏览器不支持localStorage
				document.write("抱歉！您的浏览器不支持 Web Storage ...");
				//在页面中打入"抱歉！您的浏览器不支持 Web Storage ..."
			} else{
				newSrcH=localStorage.getItem("skin");
                //否则scolor是名为"Skin"的localStorage的value。
                bodyImg.css("background-image","url("+newSrcH+")"); 
				//参数为scolor的函数skinChange()
			}
		}
		
                getStorage();//运行 getStorage()方法;


});
