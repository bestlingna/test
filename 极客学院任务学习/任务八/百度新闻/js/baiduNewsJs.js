$(document).ready(function(){
	refreshNews('精选'); 

	$('nav li').click(function(e){

		e.preventDefault();
		var type = $(this).text();
		console.log('百家')
		refreshNews(type);
	});
	
});


function refreshNews(type){
	var $lists=$('article ul');
	
	$lists.empty();
	
	$.ajax({
		url:'../server/newsget.php',
		type:'get',
		datatype:'json',
		data:{newstype:type},
		success:function(data){
			console.log(data);
			
			data.forEach(function(item,index,array){


				var $list=$('<li></li>').addClass('news-list').prependTo($lists);
				
	        var $newsImg=$('<div></div>').addClass('newsimg').appendTo($list);// body...
	        
            var $img=$('<img>').attr('src',item.newsimg).appendTo($newsImg);// body...
            
            var $newsContent=$('<div></div>').addClass('newscontent').appendTo($list);
            
            var $h1=$('<h1></h1>').html(item.newstitle).appendTo($newsContent);
            
            var $p=$('<p></p>').appendTo($newsContent);
            
            var $newsTime=$('<span></span>').addClass('newstime').html(item.newstime).appendTo($p);
            
            var $newSrc=$('<span></span>').addClass('newsrc').html(item.newssrc).appendTo($p);
        });

		}
	});
	

}

