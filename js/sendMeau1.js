 $(document).ready(function(){
   // 负责ajax发送数据 
  $(".display").find("#send_one_meau_form").on('click', '#submit_one_meau', function(event){ 
	  	//取消掉默认的form提交方式
	      if(event.preventDefault) event.preventDefault();
	      else event.returnValue = false;     
	      var formData = new FormData($( "#send_one_meau_form" )[0]);  
	      var  ourl=url_forth+'AddOrUpdata' ;
	      var xhr = new XMLHttpRequest();
	      xhr.onload=function(event)
	      {
	        if  ( ( xhr.status >= 200 && xhr.status < 300) || xhr.status == 304)   //上传成功
	        {
	          $(".backdrop").css("display","none");
	          $("#progress_div").css("display","none");	          
	          $("#success_send").text("上传成功！");
	          getOneMeau();
	          $("#progress_percent").width(0);
	          $("#sendMeau").find("#input_one_meau").val("");
	          $("#sendMeau").find("#input_one_meau_photo").val("请选择需要上传的图片");
	          $("#sendMeau").find("#zipfile1").val("请选择需要上传的PC端文件");
	          $("#sendMeau").find("#zipfile").val("请选择需要上传的移动端文件");
	        }
	        else    
	        {
	          $("#progress_div").css("display","none");
	          $(".backdrop").css("display","none");
	          $("#success_send").text("上传失败！");
	          
	        }
	      };
	      xhr.upload.onprogress=function(event)
	      {
	        if( event.lengthComputable)
	        {	        	
	          var percent =  parseInt( event.loaded/event.total) * 100 + "%";
	          $("#progress_percent").text(percent);
	          $("#progress_percent").width(percent);
	        } 
	      }
	      $("#success_send").text("正在上传，请耐心等待……");
	      xhr.open("post", ourl ,true);
	      $("#progress_div").css("display","block");
	      $(".backdrop").css("display","block");
	      xhr.send(formData);   	      
  });  

// 负责ajax发送数据 
  $(".display").find("#send_two_meau_form").on('click', '#submit_two_meau', function(event){ 
		//取消掉默认的form提交方式
	      if(event.preventDefault) event.preventDefault();
	      else event.returnValue = false; 
	      var formData = new FormData($( "#send_two_meau_form" )[0]);  
	      var  ourl=url_forth+'AddOrUpdata' ;
	      var xhr = new XMLHttpRequest();
	      xhr.onload=function(event)
	      {
	        if  ( ( xhr.status >= 200 && xhr.status < 300) || xhr.status == 304)   //上传成功
	        {
	          $("#progress_div").css("display","none");
	          $(".backdrop").css("display","none");
	          $("#success_send").text("上传成功！");
	          $("#progress_percent").width(0);
	          $("#sendMeau").find("#input_two_meau").val("");
	          $("#sendMeau").find("#input_two_meau_photo").val("请选择需要上传的图片");
	          $("#sendMeau").find("#two_zipfile1").val("请选择需要上传的PC端文件");
	          $("#sendMeau").find("#two_zipfile").val("请选择需要上传的移动端文件");
	        }
	        else    
	        {
	          $("#progress_div").css("display","none");
	          $(".backdrop").css("display","none");
	          $("#success_send").text("上传失败！");
	        }
	      };
	      xhr.upload.onprogress=function(event)
	      {
	        if(event.lengthComputable)
	        {	         	
		        var percent = parseInt (event.loaded/event.total) * 100  + "%";
		        $("#success_send").text("");
		        $("#progress_percent").text(percent);
		        $("#progress_percent").width(percent);
	        } 
	      }
	      $("#success_send").text("正在上传，请耐心等待……");
	      xhr.open("post", ourl ,true);
	      $("#progress_div").css("display","block");
	      $(".backdrop").css("display","block");
	      xhr.send(formData);	  
  });  
  
});