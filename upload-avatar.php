<?php
    //包含一个文件上传类中的上传类
    include "fileupload.class.php";
	
	$dir = "/upload/avatar/".date("Y")."-".date("m")."/";
	
    $up = new fileupload;
    //设置属性(上传的位置， 大小， 类型， 名是是否要随机生成)
    $up -> set("path", ".".$dir);
    $up -> set("maxsize", 5000000);
    $up -> set("allowtype", array("gif", "png", "jpg", "jpeg"));
    $up -> set("israndname", true);
  
	$isOk = false;
	$msg = "";
	
    if($up -> upload("img")) {
		$isOk = true;
		$msg = $dir.$up->getFileName();
    } else {
		$isOk = false;
		$msg = $up->getErrorMsg();
    }
	$result = array('isOk' => $isOk, 'msg' => $msg);
	$jsonstring = json_encode($result);
	header('Content-Type: application/json');
	echo $jsonstring;
?>