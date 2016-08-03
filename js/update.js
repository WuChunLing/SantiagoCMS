/*菜单列表的修改*/
 $(document).ready(function(){
		//修改菜单信息
	 	$(".display").find("#checkMeau_table").on('click', '.update_meau_name', function(){	
			var currTd_id= $(this).parent().prev().prev().prev().prev().prev();	//获得菜单id的单元格	
			var currTd = $(this).parent().prev().prev().prev();	//获得菜单名字的单元格
			var currTd_photo = $(this).parent().prev().prev();	//获得菜单照片的单元格
			var currTd_file = $(this).parent().prev();	//获得菜单文件的单元格

			var meau_id_old=$(currTd_id).text();//保留id原始值
			var meau_name_old=$(currTd).html();		//保存姓名原始值
			var meau_photo_old=$(currTd_photo).html();//保留照片原始值
			var meau_file_old=$(currTd_file).html();//保留文件原始值
			

			var currTd_update = $(this).parent();			
			if (currTd.children("input").length > 0)
			{	//如果当前td中已包含有文本框元素，则不执行click事件	
				return false;
			}
			$(currTd_update).html("");//文件清空
			$('<button class="update_but" id="update_yes">确认</button>').appendTo(currTd_update);
			$('<button class="update_but" id="update_no">取消</button>').appendTo(currTd_update);
			$(currTd_id).html("");//ID清空		
			$(currTd).html("");//名字清空		
			$(currTd_photo).html("");//照片清空
			$(currTd_file).html("");//文件清空
			
			$("<input class='inputText' name='menuId' type='text' readonly='true' />").val(meau_id_old).appendTo(currTd_id);
			$("<input class='inputText' name='menuName' type='text' required/>").val(meau_name_old).appendTo(currTd);
			$("<input class='inputPhoto'name='photofile' type='file' />").appendTo(currTd_photo);
			$(currTd_file).html("pc端文件:"+"<input  class='inputFile' name='zipfile1' value='pc端文件' type='file' />"+"移动端文件:"+"<input class='inputFile' name='zipfile' value='移动端文件' type='file' />");
			//确认修改按钮点击事件
			$("#update_yes").click(function(){
				var formData = new FormData($( "#send_new_meau_form" )[0]);  
				var ourl=url_forth+"Updata";
		    	 	$.ajax({  
				        url:ourl,  
				        type: 'POST',  
				        data: formData,   
				        async: false,  
				        cache: false,  
				        contentType: false,  
				        processData: false,  
			          	success: function (returndata) {  
			            	$("#mymodal h4").text("修改菜单操作");
				            $("#mymodal p").text(returndata);
				            $('#mymodal').modal('show'); 
			            	getAllMeau();
		         		},  
			          	error: function (returndata) {  
			              	$("#mymodal h4").text("修改菜单操作");
				            $("#mymodal p").text(returndata);
				            $('#mymodal').modal('show');
				            getAllMeau();   
			          	}  
		     		});  
			});

			//取消修改按钮点击事件
			$("#update_no").click(function(){		
				$(currTd).html(meau_name_old); //名字恢复原始值
				$(currTd_id).html(meau_id_old); //id恢复原始值
				$(currTd_photo).html(meau_photo_old); //图片恢复原始值
				$(currTd_file).html(meau_file_old); //文件恢复原始值
				$(this).parent.html("<a class='update_meau_name'>"+"修改"+"</a>"+"&brvbar;"+"<a class='del_meau'>"+"删除"+"</a>");
				
			});  
		});



 	//删除菜单
 	$(".display").find("tbody").on('click', '.del_meau', function(){
		
			var meau_id=$(this).parent().siblings().first().text();	//获得当前删除菜单的id

			var url=url_forth+"DeleteMeau";

			$.post(url,
					{
						id:meau_id
					},
					function(){
						
						$("#mymodal h4").text("删除菜单操作");
					    $("#mymodal p").text("删除成功！");
					    $('#mymodal').modal('show');
					    getAllMeau(); 	
			});		
		});	
//	});	

//菜单上调
	$(".display").find("tbody").on('click', '.glyphicon-chevron-up', function(){
		var order=$(this).siblings().first().text();//获得菜单当前的序列
		var id=$(this).parent().siblings().first().text();//获得菜单当前的id

		var url=url_forth+"upOrder";

		$.post(url,
			{
				
				id:id//菜单当前的id
			},
			function(){
				
				window.location.reload();
		    $("#checkMeau_table tbody").empty();
			getAllMeau();  
}
		);
	});
	//菜单下调
	$(".display").find("tbody").on('click', '.glyphicon-chevron-down', function(){
		var order=$(this).siblings().first().text();
		var id=$(this).parent().siblings().first().text();

		var url=url_forth+"downOrder";

		$.post(url,
			{
				
				id:id//菜单当前的id
			},
			function(){
				
				window.location.reload();
			    $("#checkMeau_table tbody").empty();
				getAllMeau();  
			}
		);
	});


});