//上传二级菜单
 $(window).load(function(){

	//确认上传一级菜单
	$(".display").find("#send_one_meau_form").on('click', '#submit_one_meau', function(){	
	
		var formData = new FormData($( "#send_one_meau_form" )[0]);  
    var ourl=url_forth+"AddOrUpdata";
    	 $.ajax({  
          url: ourl,  
          type: 'POST',  
          data: formData,  
          async: false,  
          cache: false,  
          contentType: false,  
          processData: false,  
          success: function (returndata) {  
              $("#mymodal h4").text("上传一级菜单操作");
              $("#mymodal p").text(returndata);
              $('#mymodal').modal('show');  
          },  
          error: function (returndata) {  
              $(".modal-title").text("上传一级菜单操作");
              $("#modalmessage").text(returndata);
              $('#mymodal').modal('show'); 
          }  
     	});  
    });  

  //确认上传二级菜单
	$(".display").find("#send_two_meau_form").on('click', '#submit_two_meau', function(){	
	
		var formData = new FormData($( "#send_two_meau_form" )[0]);  
    var ourl=url_forth+"AddOrUpdata";
    	 $.ajax({  
          url:ourl,  
          type: 'POST',  
          data: formData,  
          async: false,  
          cache: false,  
          contentType: false,  
          processData: false,  
          success: function (returndata) {  
        	  $("#mymodal h4").text("上传二级菜单操作");
	            $("#mymodal p").text(returndata);
	            $('#mymodal').modal('show');
	           
          },  
          error: function (returndata) {  
        	  $("#mymodal h4").text("上传二级菜单操作");
	            $("#mymodal p").text(returndata);
	            $('#mymodal').modal('show'); 
          }  
     	});  
    });  


});