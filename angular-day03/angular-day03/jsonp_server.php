<?php 
	// 前端发过来的回调函数名称
	$cb = $_GET["callback"];

	// 连接数据操作数据的内容
	$arr = array("user"=>"张三","pass"=>"8888888");

	// .->字符串连接符-> succ({"user":"张三","pass":8888888})
	echo $cb."(".json_encode($arr).")";
 ?>