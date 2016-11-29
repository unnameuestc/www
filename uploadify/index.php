<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>UploadiFive Test</title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script src="jquery.uploadify.min.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="uploadify.css">
<style type="text/css">
body {
	font: 13px Arial, Helvetica, Sans-serif;
}
</style>
</head>

<body>
	<h1>Uploadify Demo</h1>
	<form>
		<div id="queue"></div>
		<input id="file_upload" name="file_upload" type="file" multiple="true">
	</form>

	<script type="text/javascript">
		<?php $timestamp = time();?>  //时间戳用于计算上传进度
		$(function() {
			$('#file_upload').uploadify({
				'formData'     : {
					'timestamp' : '<?php echo $timestamp;?>',
					'token'     : '<?php echo md5('unique_salt' . $timestamp);?>'
				},
				'swf'      : 'uploadify.swf',	//上传图标（是一个动态图）
				'uploader' : 'uploadify.php',	//指向上传动作的真正执行者
				'auto'	: 'true',
				'uploadLimit' : 1,
				'fileSizeLimit' : '1GB',
				'onUploadSuccess' : function(file, data, response) {	//data是从uploadify.php中传过来的
                            alert('The file ' + file.name + ' was successfully uploaded with a response of ' + response + ':' + data);
                }
			});
		});
	</script>
</body>
</html>