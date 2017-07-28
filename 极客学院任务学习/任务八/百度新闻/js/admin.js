//打开后台页面的时候 发送请求，刷新新闻列表。
$(document).ready(function() {
	var $newsTable = $('#newstable tbody');
	// 得到新闻
	refreshNews();


    // 添加新闻
    $('#btnsubmit').click(function(e){
		// 防止一点击就向外提交
		e.preventDefault();
		// 输入判断
		if ($('#newstitle').val()===""||$('#newsimg').val()===""||
			$('#newstime').val()===""||$('#newssrc').val()==="") {
			// 输入为空 输入框为红色
		if ($('#newstitle').val()===""){
			$('#newstitle').parent().addClass('has-error');
		}else{$('#newstitle').parent().removeClass('has-error');}
		
		if ($('#newsimg').val()===""){
			$('#newsimg').parent().addClass('has-error');
		}else{$('#newsimg').parent().removeClass('has-error');}
		
		if ($('#newstime').val()===""){
			$('#newstime').parent().addClass('has-error');
		}else{$('#newstime').parent().removeClass('has-error');}
		
		if ($('#newssrc').val()===""){
			$('#newssrc').parent().addClass('has-error');
		}else{$('#newssrc').parent().removeClass('has-error');}
	}else{
		var jsonNews = {
			newstitle:$('#newstitle').val(),
			newstype:$('#newstype').val(),
			newsimg:$('#newsimg').val(),
			newstime:$('#newstime').val(),
			newssrc:$('#newssrc').val(),
		};
		console.log(jsonNews);
			// 提交添加
			$.ajax({
				url:'../server/insert.php',
				type:'post',
				data:jsonNews,
				datatype:'json',
				success:function(data){
					refreshNews();
					
					console.log(data);

				}
			});
			$('input').val("");
			$('select').val("");
		}
		

	});

// 添加新闻结束
// 点击删除按钮，模态框出现，点击模态框，删除数据。
var deleteId = null;
$newsTable.on('click','.btn-danger',function(e){
	$('#deleteModal').modal('show');
 	// 得到被点击的某条数id的值
 	deleteId = $(this).parent().prevAll().eq(5).html();
 	console.log(deleteId);
 });

$('#deleteModal #confirmDelete').click(function(e){
	if(deleteId){
		$.ajax({
			url:'../server/delete.php',
			type:'post',
			data:{newsid:deleteId},
			success:function(data){
				console.log(data);
				$('#deleteModal').modal('hide');
				refreshNews();

			}
		});
	}
});


// 点击修改按钮，模态框出现，点击模态框，修改数据。
var updateId = null;
$newsTable.on('click','.btn-primary',function(e){
	$('#updateModal').modal('show');
	updateId = $(this).parent().prevAll().eq(5).html();
	console.log(updateId);
	$.ajax({
		url:'../server/curnews.php',
		type:'get',
		datatype:'json',
		data:{newsid:updateId},
		success:function(data){
			console.log(data[0].newstime);

			$('#unewstitle').val(data[0].newstitle);
			$('#unewstype').val(data[0].newstype);
			$('#unewsimg').val(data[0].newsimg);
			$('#unewssrc').val(data[0].newssrc);
			var utime=data[0].newstime.split(' ')[0];
			$('#unewstime').val(utime);

		}
	});
});

$('#updateModal #confirmUpdate').click(function(e){
	$.ajax({
		url:'../server/update.php',
		type:'post',
		data:{
			newstitle:$('#unewstitle').val(),
			newstype:$('#unewstype').val(),
			newsimg:$('#unewsimg').val(),
			newstime:$('#unewstime').val(),
			newssrc:$('#unewssrc').val(),
			id:updateId
		},

		success:function(data){
			$('#updateModal').modal('hide');
			refreshNews();
		}
	});
});






      // 创建一个得到新闻的方法
      function refreshNews(){
      	
        // empty table
        $newsTable.empty();
        
        // ajax请求 
        $.ajax({
        	url:'../server/newsget.php',
        	type:'get',
        	datatype:'json',
        	success:function(data){
        		console.log(data);
        		data.forEach(function(item,index,array){
        			var $tdid=$('<td>').html(item.id);
        			var $tdtype=$('<td>').html(item.newstype);
        			var $tdtitle=$('<td>').html(item.newstitle);
        			var $tdimg=$('<td>').html(item.newsimg);
        			var $tdsrc=$('<td>').html(item.newssrc);
        			var $tdtime=$('<td>').html(item.newstime);
        			var $tdctrl=$('<td>');
        			var $btnupdate=$('<button>').addClass('btn btn-primary btn-xs').html('修改');
        			var $btndelete=$('<button>').addClass('btn btn-danger btn-xs').html('删除');
        			$tdctrl.append($btnupdate,$btndelete);
        			var $tRow=$('<tr>');
        			$tRow.append($tdid,$tdtype,$tdtitle,$tdimg,$tdsrc,$tdtime,$tdctrl);
        			$newsTable.append($tRow);

        		});
        	}
        });


    }

});


