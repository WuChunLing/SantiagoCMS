$().ready(function() {
// 在键盘按下并释放及提交后验证提交表单
// 管理员表单
  $("#admin_form").validate({
	    rules: 
	    {
		      adminAccount: //账户
		      {
		        required: true,
		        minlength: 5
		      },
		      adminPassword: //密码
		      {
		        required: true,
		        minlength: 5
		      },
		      adminName: //姓名
		      {
		        minlength: 2
		      },
		      adminEmail: //邮箱
		      {
		        email: true
		      }	   
	    },
	    messages: 
	    {
	    	adminAccount: //账户
		    {
		       required:"请输入管理员账户",
		       minlength: "账户至少由5个字符组成"
		    },
		    adminPassword: //密码
		    {
		       required: "请输入管理密码",
		       minlength:"密码至少由5个字符组成"
		    },
		    adminName: //姓名
		    {
		       minlength: "姓名至少由2个字符组成"
		    },
		    adminEmail: //邮箱
		    {
		       email: "请输入一个正确的邮箱"
		    }	   
		}
	});
  
});