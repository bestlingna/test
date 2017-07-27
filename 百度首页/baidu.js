$(document).ready(function(){

	/*简单工厂模式，优点处理大量具有相同属性的小对象，防止变量被污染*/ 
	/**天气预报下拉单**/

	function ajaxFun(obj){

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

var divs = document.getElementsByClassName("everyday-link");
var todays = document.getElementsByClassName("lunar-calendar");
var temps =  document.getElementsByClassName("show-icon-temp");
var air = document.getElementsByClassName("weather-icon");
var obj = {
	method:"Get",
	url:"http://wthrcdn.etouch.cn/weather_mini?city=杭州",
	data:"",
	successFun:successFun,
	failFun:failFun
};

ajaxFun(obj);

function successFun(data){
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

function failFun(data){
	alert(data);
}


/*简单工厂模式，优点处理大量具有相同属性的小对象，防止变量被污染*/ 

/**hover下拉框**/
var hoverFactory=function(){};

hoverFactory.hoverCreat=function(btn,show){

	btn.hover(function(){
		show.css("display","block");
	},function(){ 
		show.hover(function(){
			show.css("display","block");
		},function(){
			show.css("display","none");
		});

		show.css("display","none");
	}); 

}

var hoverleader=function(){
	/**个人中心下拉框**/
	var hoverRun1=hoverFactory.hoverCreat($("#s_username_top"),$("#s_user_name_menu"));
	/**设置下拉框**/
	var hoverRun2=hoverFactory.hoverCreat($("#s_usersetting_top"),$("#s_user_setting_menu"));
	/**更多产品下拉框**/
	var hoverRun2=hoverFactory.hoverCreat( $(".s_bri"),$(".s_bdbri"));
}

hoverleader();

/*简单工厂模式，优点处理大量具有相同属性的小对象，防止变量被污染*/ 

/**click事件总和**/

var clickFactory=function(){};

/**我的关注、推荐、导航、视频切换**/
clickFactory.clickPage=function(btnP,showP){

	btnP.click(function(){
		showP.css("display","block");
		showP.siblings().css("display","none");
	});
};
/**换肤：弹出收起**/
clickFactory.clickSkinDiv=function(btnGet,btnHide,showS){

	var btnGet=$(".s-icons").find(".s-skin")
	var btnHide=$(".s-skin-setting").find(".skin-bg-icon")
	var showS=$("#s_skin_layer")

	btnGet.click(function(){
		showS.show();
	});
	btnHide.click(function(){
		showS.hide();
	});
};
/**换肤：游戏、热门、卡通、明星等切换**/
clickFactory.clickSkin=function(btnSkin,showSkin){
	var btnSkin=$(".s-skin-header").find(".s-skin-nav").find("li");
	var showSkin=$("#s_skin_img_content").find(".s-skin-content").children("li");

	btnSkin.each(function(index){
		btnSkin.eq(index).click(function(){
			btnSkin.eq(index).css("background-color","#389cff");
			btnSkin.eq(index).siblings().css("background-color","#fff");
			showSkin.eq(index).css("display","block");
			showSkin.eq(index).siblings().css("display","none");
		});
	});

}

var clickleader=function(){
	var mineText=$("#s_menu_mine").find(".mine-text");
	var meauItem=$("#s_menus_wrapper").find(".s-menu-item");
	var textContent=$("#s_content_100");
	var suessContent=$("#s_content_2");
	var navContent=$("#s_content_1");
	var videoContent=$("#s_content_15");
	
	/**我的关注、推荐、导航、视频切换**/
	var clickPageRun1=clickFactory.clickPage(mineText,textContent);
	var clickPageRun2=clickFactory.clickPage(meauItem.eq(0),suessContent);
	var clickPageRun3=clickFactory.clickPage(meauItem.eq(1),navContent);
	var clickPageRun4=clickFactory.clickPage(meauItem.eq(2),videoContent);
	/**换肤：弹出收起**/
	var clickSkinDivRun=clickFactory.clickSkinDiv();
	/**换肤：游戏、热门、卡通、明星等切换**/
	var clickSkinRun=clickFactory.clickSkin();
}
clickleader();


/*简单工厂模式，优点处理大量具有相同属性的小对象，防止变量被污染*/ 
/**点击图片，更换背景,图片鼠标悬浮，右边框预览,保存变更的皮肤**/
var sinkChangeFactory=function(){};

sinkChangeFactory.sinkChange=function(){

	var sinkImgLi=$("#s_skin_img_content").find(".s-skin-content").children("li");
	var sinAllImg=sinkImgLi.find("img");
	var sinAllImgLi=sinkImgLi.find(".skin-img-list ").find("li");
	var bodyImg=$(".s-skin-container");
	var skinPreview=$("#s_skin_preview_skin");
	/**点击图片，更换背景**/
	sinAllImgLi.each(function(index){
		sinAllImgLi.eq(index).click(function(){
			newSrc=sinAllImg.eq(index).attr("src");
			bodyImg.css("background-image","url("+newSrc+")"); 

			localStorage.setItem("skin", newSrc);
        //设置一个新的localStorage,name为"Skin",value为color(skinChange函数的参数)
    });
	});              
	/**图片鼠标悬浮，右边框预览**/
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

            };

            var sinkChangeLeader=function(){
            	var skinChangeRun=sinkChangeFactory.sinkChange();
            }
            sinkChangeLeader();



        });
