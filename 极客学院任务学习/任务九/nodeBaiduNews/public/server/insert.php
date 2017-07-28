<?php
require_once 'dbconfig.php';
// header("Content-type: application/json;charset=utf-8");
// //连接myqul
// $link = mysqli_connect('localhost','bestlingna','lingnazheng','baidunews',8889);
if($link){
	//要发出的数据
	$newstitle = $_POST['newstitle'];
	$newstype = $_POST['newstype'];
	$newsimg = $_POST['newsimg'];
	$newstime = $_POST['newstime'];
	$newssrc = $_POST['newssrc'];

	$sql ="INSERT INTO `news` (`newstitle`, `newstype`, `newsimg`, `newstime`, `newssrc`) VALUES ('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";

	mysqli_query($link,"SET NAMES utf8");

	$result = mysqli_query($link, $sql);

// echo json_encode(array('success'=>'ok'));
// echo json_encode(array($sql));
	if($result){
		echo json_encode(array('success'=>'插入数据成功'));
	}else{
		echo json_encode(array($sql));
	}



}else{
	echo json_encode(array('success'=>'未连接数据库'));
}

?>