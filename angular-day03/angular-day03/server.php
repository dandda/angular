<?php 
	// 完全开放，任何网站/服务器都可以访问
	header('Access-Control-Allow-Origin:*');

	$userInfo = array("user"=>"唐菜也","pass"=>"54321");

	echo json_encode($userInfo);
 ?>