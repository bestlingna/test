var baiDu={
	init:function(){
		/*this.defaultFous();*/
	 this.baiduSetting();
	},
	/*设置下拉菜单和侧边栏的显示与隐藏*/
  /*defaultFous:function(){
  	$('searchInput').focus();
  },*/
    baiduSetting:function(){
	/*$('setting-menu').mouseover(function(){
		$('#baiduSetting').show();
	}).mouseout(function(){
		$('#baiduSetting').hide();
	})*/
	$('#navMore,#moreProduct').mouseover(function(){
		$("#moreProduct").show();
	}).mouseout(function(){
		$("#moreProduct").hide();
    })
	}
}
/*加载执行*/
$(function(){
	baiDu.init();

})