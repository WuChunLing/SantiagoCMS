$(document).ready(function() {
	$('#load_button').click(function() {	
	    var ouser=$("#user").val(); //获取登录账号
	    var opassword=$("#password").val();  //获取登录密码
		var url=url_forth+'loading';
		$.post(url,
				{
					user:ouser,
					password:opassword
				},
				function(data){
					if(data.new1=="success")
	                {				
						if(window.sessionStorage){
							window.location.href='http://119.29.169.59/webapp/ProjectCMS/index.html';
							var adminName = data.admin.adminName;//将数据中登录管理员的姓名赋值给变量 
							var adminAuthority = data.admin.authority;//将数据中权限赋值给变量 
							sessionStorage.adminName = adminName;//将变量存储到本地sessionStorage中，并且value为adminId 
							sessionStorage.adminAuthority = adminAuthority;//将登录账号的权限存储到本地session中 
						}
						else{
							denglu="yes";
							oadminName=data.admin.adminName;
							oadminAuthority=data.admin.authority;
							window.location.href='http://119.29.169.59/webapp/ProjectCMS/index.html';			
						}	
					}
				else
					{
						$("#message").text("账户密码错误,请重新输入");
						return false; 
					}
		
				});			
 	}); 
});
