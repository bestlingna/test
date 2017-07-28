<?php
require_once 'dbconfig.php';
// header("Content-type: application/json;charset=utf-8");
//连接myqul
// $link = mysqli_connect('localhost','bestlingna','lingnazheng','baidunews',8889);

if($link){
	
	$newsid= $_POST['newsid'];
	
	mysqli_query($link,"SET NAMES utf8");
	
	$sql= "DELETE FROM `news` WHERE `news`.`id` = {$newsid}";

	$result= mysqli_query($link,$sql);
	
	if($result){
		echo json_encode(array('删除状态'=>'成功删除'));
	}else{echo json_encode(array('删除状态'=>'未删除'));
}


}else{
	echo json_encode(array('连接状态'=>'失败'));
}
mysqli_close($link);

?>