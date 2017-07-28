$(document).ready(function(){


	/**天气预报下拉单**/
  var ajaxWeatherFactory=function(){};
      
    ajaxWeatherFactory.creatAjax=function(){
      	//1.创建请求对象
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    //2.判断请求方法
    var method = obj.method.toUpperCase();
    if (method == "GET"){
    	xhr.open(method,obj.url+"?"+obj.data,true);
    	xhr.send(null);
    }else if (method == "POST"){
    	xhr.open(method, obj.url, true);
    	xhr.send(obj.data);
    }else{
    	console.error("请求方式有误，请选择get/post中的一种");
    }

    //3.监听服务器返回事件
    xhr.onreadystatechange = function () {
    	if (xhr.readyState == 4){
    		if (xhr.status >=200 && xhr.status < 300){
    			obj.successFun(xhr.responseText);
    		}else{
    			obj.failFun("请求数据失败");
    			console.warn(xhr.status);
    		}
    	}
    };
}
      
	ajaxWeatherFactory.successFun=function(){
      
      var divs = document.getElementsByClassName("everyday-link");
      var todays = document.getElementsByClassName("lunar-calendar");
      var temps =  document.getElementsByClassName("show-icon-temp");
      var air = document.getElementsByClassName("weather-icon");
       
       var resultObj = JSON.parse(data).data;
	   var forecastArray = resultObj.forecast;

	for (var i in forecastArray){
		var array = forecastArray[i];
		divs[i].innerHTML = array.date + "<br>" + array.type + "<br>" +array.high + "<br>" + array.low+"<br>"+array.fengli+ "<br>" + array.fengxiang;
		todays[0].innerHTML = forecastArray[0].date;
		temps[0].innerHTML =forecastArray[0].high+"&nbsp;"+forecastArray[0].low;
		air[0].innerHTML= forecastArray[0].type;
	}

}

	var ajaxWeatherLeader=function(){
		
        var obj = {
	               method:"Get",
	               url:"http://wthrcdn.etouch.cn/weather_mini?city=杭州",
	               data:"",
	               successFun:successFun,
	               failFun:failFun
                  };
		var ajaxWeatherRun=ajaxWeatherFactory.creatAjax(obj);
		ajaxWeatherFactory.successFun();
	}

ajaxWeatherLeader();

function failFun(data){
	alert(data);
}




/**个人中心下拉框**/

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

/**设置下拉框**/
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


/**更多产品下拉框**/
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

/**我的关注、推荐、导航、视频切换**/
var mineText=$("#s_menu_mine").find(".mine-text");
var meauItem=$("#s_menus_wrapper").find(".s-menu-item");
var textContent=$("#s_content_100");
var suessContent=$("#s_content_2");
var navContent=$("#s_content_1");
var videoContent=$("#s_content_15");

mineText.click(function(){
	textContent.css("display","block");
	textContent.siblings().css("display","none");
});
meauItem.eq(0).click(function(){
	suessContent.css("display","block");
	suessContent.siblings().css("display","none");
	
});
meauItem.eq(1).click(function(){
	navContent.css("display","block");
	navContent.siblings().css("display","none");
});
meauItem.eq(2).click(function(){
	videoContent.css("display","block");
	videoContent.siblings().css("display","none");
});

/**换肤：弹出收起**/
var showSkinDiv=$(".s-icons").find(".s-skin")
var hideSkinDiv=$(".s-skin-setting").find(".skin-bg-icon")
var SkinDiv=$("#s_skin_layer")
showSkinDiv.click(function(){
	SkinDiv.show();
});
hideSkinDiv.click(function(){
	SkinDiv.hide();
});

/**换肤：游戏、热门、卡通、明星等切换**/
var skinHeadLi=$(".s-skin-header").find(".s-skin-nav").find("li");
var skinImgFatherLi=$("#s_skin_img_content").find(".s-skin-content").children("li");
     // alert(skinImgFatherLi.length); 
     
     skinHeadLi.each(function(index){
     	skinHeadLi.eq(index).click(function(){
     		skinImgFatherLi.eq(index).css("display","block");
     		skinImgFatherLi.eq(index).siblings().css("display","none");
     	});
     });
     
     skinHeadLi.each(function(index){
     	skinHeadLi.eq(index).click(function(){
     		skinHeadLi.eq(index).css("background-color","#389cff");
     		skinHeadLi.eq(index).siblings().css("background-color","#fff");
     	});
     });

     
     /**点击图片，更换背景,图片鼠标悬浮，右边框预览**/

     var sinkImgLi=$("#s_skin_img_content").find(".s-skin-content").children("li");
     var sinAllImg=sinkImgLi.find("img");
     var sinAllImgLi=sinkImgLi.find(".skin-img-list ").find("li");
     var bodyImg=$(".s-skin-container");
     var  skinPreview=$("#s_skin_preview_skin");
// alert(sinAllImgLi.length);
// alert(skinPreview.attr("src"));  

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
