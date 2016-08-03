$(document).ready(function(){
	//判断是否登录
	if(window.sessionStorage)
	{ 
		// alert("浏览支持sessionStorage");
		var adminName=sessionStorage.adminName; 
		var adminAuthority=sessionStorage.adminAuthority; //登录管理员的权限
		console.log(adminAuthority);
	   	if (adminName == undefined) //如果没登录，返回登录页面
	   	{ 
	    	 window.location.href="http://119.29.169.59/webapp/ProjectCMS/onload.html";
		} 
		else
		{
			if(adminAuthority==0)
			{
				$("#admin").css("display","none");
			}
			$("#loadText").text(adminName+",欢迎登录本系统！")
		}
	}
	else{ 
		// alert("浏览暂不支持sessionStorage");
		if (denglu == "no") //如果没登录，返回登录页面
	   	{ 
	    	 window.location.href="http://119.29.169.59/webapp/ProjectCMS/onload.html";
		} 
		else
		{
			if(oadminAuthority==0)
			{
				$("#admin").css("display","none");
			}
			$("#loadText").text(oadminName+",欢迎登录本系统！")
		}

	}
});
