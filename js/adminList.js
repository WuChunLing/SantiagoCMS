//管理员列表
$(document).ready(function(){

	//管理员列表get
	$("#admin").click(function(){
		getAdmin();
	});

	//管理员修改
	$(".display").find("tbody").on('click', '.updateAdmin', function(){		
        var currTd = $(this).parent().prevAll();		
		var textArray=new Array();//保存原始值的数组
		for (var i=0;i<currTd.length ;i++ )
		{
			
			textArray[i] = $(currTd[i]).html();
			$(currTd[i]).html("")
		} 
		var currTd_update = $(this).parent();
		$(this).parent().html("");
		if (currTd.children("input").length > 0) //如果当前td中已包含有文本框元素，则不执行click事件
		{
            return false;
        }
		
		$("<button class='update_but_sure'>确认</button>").appendTo(currTd_update);
		$("<button class='update_but_cancel'>取消</button>").appendTo(currTd_update);
		$("<input class='inputText' readonly='true' name='adminId' type='text' />").val(textArray[5]).appendTo(currTd[5]);//id
		$("<input class='inputText' name='adminAccount' type='text' required />").val(textArray[4]).appendTo(currTd[4]);//账号
		$("<input name='adminpassword' type='password' required>").val(textArray[3]).appendTo(currTd[3]);//密码
		$("<input class='inputText' name='adminName' type='text' />").val(textArray[2]).appendTo(currTd[2]);//姓名
		$("<input class='inputText' name='adminEmail' type='email' />").val(textArray[1]).appendTo(currTd[1]);//邮箱
		$("<input class='inputText' readonly='true'  name='authority' type='text' />").val(textArray[0]).appendTo(currTd[0]);//权限

		var qx;
		if (textArray[0]=="普通管理员") {qx=0;}
		else{qx=1;}
		//确认修改按钮点击事件
		$(".update_but_sure").click(function(){
			if($("#admin_form").valid()==true)
			{
				var oinput=new Array();//文本框的内容存入数组
				for (var i=0;i<currTd.length ; i++)
				{
					oinput[i]=$(currTd[i]).find("input").val();				
					$(currTd[i]).html(oinput[i]);  
				}
				var td=$(this).parent();
				$(this).next().remove();
				$(this).remove();
				$("<a class='updateAdmin'>修改</a>&brvbar;<a class='delAdmin'>删除</a>").appendTo(td);
				
				var num=0;
				var url=url_forth+"Updatauser";
				$.post(url,{
					adminId:oinput[5],
					adminuser:oinput[4],
					adminpassword:oinput[3],
					adminName:oinput[2],
					adminEmail:oinput[1],
					authority:qx
				},
					function(returndata){
					$("#mymodal h4").text("修改管理员操作");
			        $("#mymodal p").text(returndata);
			        $('#mymodal').modal('show'); 	
			        $("#adminListTable tbody").empty();
		            getAdmin();
		            
				});
			}
		});
		//取消修改按钮点击事件
		$(".update_but_cancel").click(function(){
			for (var i=0;i<currTd.length ; i++)
			{
                $(currTd[i]).html(textArray[i]);  
			}
			var td=$(this).parent();
			$(this).prev().remove();
			$(this).remove();
			$("<a class='updateAdmin'>修改</a>&brvbar;<a class='delAdmin'>删除</a>").appendTo(td);
		});

    });	


	
	//添加管理员
	$("#addAdmin").click(function(){
		$("<tr>"+"<td>"+"id"+"</td>"+//id
						"<td>"+"<input name='adminAccount' type='text' required >"+"</td>"+//账号
						"<td>"+"<input name='adminPassword' type='password' required>"+"</td>"+//密码
						"<td>"+"<input name='adminName' type='text'>"+"</td>"+//姓名
						"<td>"+"<input name='adminEmail' type='email'>"+"</td>"+//邮箱
						"<td>"+"普通管理员"+"</td>"+//权限
						"<td>"+"<button class='ok'>确认</button>"+"<button class='no'>取消</button>"+"</td>"+
			"</tr>").prependTo("#adminListTable tbody ");

		//确认按钮点击事件
		$(".ok").click(function(){  
			if($("#admin_form").valid()==true)
			{
				var formData = new FormData($( "#admin_form" )[0]);  
				var ourl=url_forth+"AddOrUpdatauser";
				$.ajax({  
						url: ourl,  
						type: 'POST',  
					    data: formData,   
					    async: false,  
				        cache: false,  
				        contentType: false,  
				        processData: false,  
			          	success: function (returndata) {  
				           	$("#mymodal h4").text("新增管理员操作");
					        $("#mymodal p").text(returndata);
					        $('#mymodal').modal('show'); 				       
				            getAdmin();
			         	},  
				        error: function (returndata) {  
				            $("#mymodal h4").text("新增管理员操作");
					        $("#mymodal p").text(returndata);
					        $('#mymodal').modal('show');				       
					        getAdmin();   
				        }  
					});  
			} 					        	          	 			
		});

		//取消按钮点击事件
		$(".no").click(function(){  
			 deleteRow("adminListTable",this);
		});
	});


	//删除管理员
	$(".display").find("tbody").on('click', '.delAdmin', function(){
//		$("#my_del_modal h4").text("删除管理员操作");
//		$("#my_del_modal p").text("确定删除该管理员？");
//		$('#my_del_modal').modal('show');
//		$("#sure_del").click(function() {
			var i=this.parentNode.parentNode.rowIndex;
			var id=$(this).parent().parent().parent().parent().attr("id");
			var tdId=$(this).parent().siblings().first().text();
			
			var authority=$(this).parent().prev().text();
			if (authority=="超级管理员"){
				$("#mymodal h4").text("删除管理员操作");
			    $("#mymodal p").text("不能删除超级管理员！");
			    $('#mymodal').modal('show'); 
			}
			else
			{
				//将删除行的id传给后台
				var url=url_forth+"DeleteUser";
				$.post(url,
			    {
			   		adminId:tdId
			    });
				document.getElementById(id).deleteRow(i);
			}

//		});
	});

});


//获取管理员列表
function getAdmin()
{
	$("#adminListTable tbody").empty();

	var url=url_forth+"getAllAdmin";

	$.get(url, function(json){
		
		$str='';
		for (var i=0;i<json.length ;i++ )
		{
			var adminId=json[i].adminId;//id
			var adminAccount=json[i].adminAccount;//账号
			var adminPassword=json[i].adminPassword;//密码
			var adminName=json[i].adminName;//姓名
			var adminMail=json[i].adminEmail;//邮箱		
			var authority;//权限
			if (json[i].authority==1)
			{authority="超级管理员";}
			else	authority="普通管理员";
			$str+="<tr>";
			$str+="<td>"+adminId+"</td>";//ID
			$str+="<td>"+adminAccount+"</td>";//账号 
			$str+="<td>"+adminPassword+"</td>";//  密码
			$str+="<td>"+adminName+"</td>"; // 姓名
			$str+="<td>"+adminMail+"</td>";//  邮箱  
			$str+="<td>"+authority+"</td>"; //    权限		
			$str+="<td>"+"<a class='updateAdmin'>"+"修改"+"</a>"+"&brvbar;"+"<a class='delAdmin'>"+"删除"+"</a>"+"</td>";
			$str+="</tr>";
		}
		$("#adminListTable").append($str); 
		$("#adminList .panel-footer .record").text(json.length);    
	});
}
