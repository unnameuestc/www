<?php
/*
Uploadify
Copyright (c) 2012 Reactive Apps, Ronnie Garcia
Released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/

// Define a destination
$targetFolder = '/upload/video'; // Relative to the root

//$verifyToken = md5('unique_salt' . $_POST['timestamp']);

if (!empty($_FILES)) {
	$tempFile = $_FILES['Filedata']['tmp_name'];
	$targetPath = $_SERVER['DOCUMENT_ROOT'] . $targetFolder;
	//$targetFile = rtrim($targetPath,'/') . '/' . $_FILES['Filedata']['name'];
	// Validate the file type

	$fileTypes = array('mp4'); // File extensions
	//获取文件的一些信息
	$fileParts = pathinfo($_FILES['Filedata']['name']);
	//图片名称规则是 当前时间的时分秒.类型 如:20131221030820.jpg
	$filenames = date("YmdHis").".".$fileParts['extension'];
	//图片的完整路径咯
	$targetFile = rtrim($targetPath,'/') . '/' .$filenames;

	/*if (in_array($fileParts['extension'],$fileTypes)) {
		move_uploaded_file($tempFile,$targetFile);
		echo '1';
	} else {
		echo 'Invalid file type.';
	}
	*/

	if (in_array($fileParts['extension'],$fileTypes)) {
		if(!file_exists($targetFile)){
			move_uploaded_file($tempFile,$targetFile);
			chmod($targetFile,0777);
		}else{
			unlink($targetFile);
			move_uploaded_file($tempFile,$targetFile);
			chmod($targetFile,0777);
		}
		//必须得返回这个图片名称哦（传递数据到html中的onUploadSuccess--data）
		echo $filenames;
	} else {
		echo 'Invalid file type.';
	}
}
?>