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
	//��ȡ�ļ���һЩ��Ϣ
	$fileParts = pathinfo($_FILES['Filedata']['name']);
	//ͼƬ���ƹ����� ��ǰʱ���ʱ����.���� ��:20131221030820.jpg
	$filenames = date("YmdHis").".".$fileParts['extension'];
	//ͼƬ������·����
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
		//����÷������ͼƬ����Ŷ���������ݵ�html�е�onUploadSuccess--data��
		echo $filenames;
	} else {
		echo 'Invalid file type.';
	}
}
?>