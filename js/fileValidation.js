$(document).ready(function(){
	var file_message_error=$(".file_message_error");

	$("#one_picture").change(function() {
		var file_name=$(this).val();
		var type=suffix(file_name);
		var text=pictureVail(type);
		$(file_message_error[0]).text(text);
	});
	$("#two_picture").change(function() {
		var file_name=$(this).val();
		var type=suffix(file_name);
		var text=pictureVail(type);
		$(file_message_error[3]).text(text);
	});
	$("#one-pc-file").change(function() {
		var file_name=$(this).val();
		var type=suffix(file_name);
		var text=fileVail(type);
		$(file_message_error[1]).text(text);
	});
	$("#one-pdt-file").change(function() {
		var file_name=$(this).val();
		var type=suffix(file_name);
		var text=fileVail(type);	
		$(file_message_error[2]).text(text);
	});
	$("#two-pc-file").change(function() {
		var file_name=$(this).val();
		var type=suffix(file_name);
		var text=fileVail(type);
		$(file_message_error[4]).text(text);		
	});
	$("#two-pdt-file").change(function() {
		var file_name=$(this).val();
		var type=suffix(file_name);
		var text=fileVail(type);	
		$(file_message_error[5]).text(text);
	});
	$(".display").find("tbody").on('change', '.inputPhoto', function(){
		var file_name=$(this).val();
		var type=suffix(file_name);
		var text=pictureVail(type);	
		$(file_message_error[5]).text(text);
		$("<p class='file_message_error'>"+text+"</p>").appendTo($(this).parent());
	});
	$(".display").find("tbody").on('change', '.inputFile', function(){
		var file_name=$(this).val();
		var type=suffix(file_name);
		var text=fileVail(type);	
		$("<p class='file_message_error'>"+text+"</p>").appendTo($(this).parent());
	});
});



//返回文件名后缀
function suffix(file){ 
	var filename=file.replace(/.*(\/|\\)/, "");
	var fileExt=(/[.]/.exec(filename)) ? /[^.]+$/.exec(filename.toLowerCase()) : '';
	return fileExt[0];
}
//图片格式验证
function pictureVail(type)
{
	if (type=="jpg" || type=="png"  || type=="gif" || type=="jpeg" || type=="bmp" || type==null)    {var text="";}
	else   {var text= "图片格式错误，请重新选择！";}
	return text;
}
//文件格式验证
function fileVail(type)
{
	if (type=="zip" || type=="rar" || type==null)    {var text="";}
	else   {var text= "文件格式错误，请重新选择！";}
	return text;
}