<?php
require_once 'dbconfig.php';
// header("Content-type: application/json;charset=utf-8");
/*定义一个data(json数据)，测试能否读取。*/ 
// $arr = array(
// 	        'newstype' => '百家' ,
//             'newsimg' => 'img/baiduNewsImg2.jpg' ,
//             'newstime' => '2016-06-15' ,
//             'newssrc' => '极客学院' ,
//             'newstitle' => '测试动态获取的新闻标题' , 
//             );
// echo json_encode($arr);

/*连接myqul*/ 
// $link = mysqli_connect('localhost','bestlingna','lingnazheng','baidunews',8889);
/*if语句判断成功或失败*/
// if(!$link){
// 	echo json_encode(array('连接信息'=>'连接失败'));
// }else{
// 	echo json_encode(array('连接信息'=>'连接成功'));
// }




/*连接百度新闻后台html，并用if语句判断,如果连接成功*/
if($link){
     // 执行成功过程
	//给$_GET['newstype']赋值空
	$newstype=isset($_GET['newstype'])?($_GET['newstype']):'';
	//如果get请求的newstype值存在
	if($newstype){
	//得到type的值
		$newstype=$_GET['newstype'];
    //把type的值写入news表的newstype项。
		$sql = "SELECT * FROM `news` WHERE `newstype` = '{$newstype}' order by id desc";
	// 能显示中文
		mysqli_query($link,"SET NAMES utf8");
	// result
		$result = mysqli_query($link,$sql);
	// 定义一个数组
		$senddata =array();
		while ($row = mysqli_fetch_assoc($result)) {
		# code...
			array_push($senddata, array(
				'id'=>$row['id'],
				'newstype'=>$row['newstype'],
				'newstitle'=>$row['newstitle'],
				'newsimg'=>$row['newsimg'],
				'newstime'=>$row['newstime'],
				'newssrc'=>$row['newssrc'],
				));
		}
	// 发送$senddata到前端;
		echo json_encode($senddata);
	}else{
	// 定义一个查询语句
		$sql = 'SELECT * FROM news order by id desc';
		mysqli_query($link,"SET NAMES utf8");
		$result = mysqli_query($link,$sql);
		$senddata =array();
		while ($row = mysqli_fetch_assoc($result)) {
		# code...
			array_push($senddata, array(
				'id'=>$row['id'],
				'newstype'=>$row['newstype'],
				'newstitle'=>$row['newstitle'],
				'newsimg'=>$row['newsimg'],
				'newstime'=>$row['newstime'],
				'newssrc'=>$row['newssrc'],
				));
		}
	// 发送$senddata到前端;
		echo json_encode($senddata); 
	}


}else{
	echo json_encode(array('success'=>'none'));
}
mysqli_close($link);
?>