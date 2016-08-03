//文档加载时读取菜单列表
$(document).ready(function(){
	getAllMeau();
	getOneMeau();
});
function getAllMeau()
{
	$("#checkMeau_table tbody").empty();
	var url=url_forth+"getAllMenu";
	var forth_url="http://119.29.169.59/";
	var indexhtml="/index.html";
	var count = 0;
	$.get(url, function(json){		
	 	$str='';
		for (var i=0; i<json.allmenu.length ; i++ )
		{        
			count++;      
			var  one_meau_name=json.allmenu[i].menu.menuName;		//获取一级菜单名字
			var  one_meau_id=json.allmenu[i].menu.menuId;			//获取一级菜单的id
			var  one_meau_photo=forth_url+json.allmenu[i].menu.menuPicture;			//获取一级菜单的图片
			var  one_meau_file=json.allmenu[i].menu.menuChain;	//获取一级菜单的pc端文件
			var  one_meau_phone_file=json.allmenu[i].menu.menuPhonechain;//获取一级菜单的移动端文件
			var  one_meau_order=json.allmenu[i].menu.menuOrder;			//获取一级菜单的序号			
			$str+="<tr>";
			$str+="<th>"+one_meau_id+"</th>"; //	一级菜单id
			$str+="<th>"+"一级菜单"+"</th>";//
			$str+="<th>"+one_meau_name+"</th>"; //一级菜单名字
			
			if(one_meau_photo!="")
			{$str+="<th>"+"<a target='_blank' href="+one_meau_photo+">"+"查看图片"+"</a>"+"</th>"; }//一级菜单图片
			else{$str+="<th>"+"<a data-toggle='modal' href='#mynullmodal'>"+"查看图片"+"</a>"+"</th>"; }
			
			
			if(one_meau_file!="" && one_meau_phone_file!="")
			{$str+="<th>"+"<a target='_blank' href="+forth_url+"webapp/"+one_meau_file+indexhtml+">"+"查看PC端文件"+"</a>"+"&brvbar;"+"<a target='_blank' href="+forth_url+"webapp/"+one_meau_phone_file+indexhtml+">"+"查看移动端文件"+"</a>"+"</th>";} //一级菜单文件			
			else if(one_meau_file=="" && one_meau_phone_file!="")
			{$str+="<th>"+"<a data-toggle='modal' href='#mynullmodal'>"+"查看PC端文件"+"</a>"+"&brvbar;"+"<a target='_blank' href="+forth_url+"webapp/"+one_meau_phone_file+indexhtml+">"+"查看移动端文件"+"</a>"+"</th>";} //一级菜单文件			
			else if(one_meau_file!="" && one_meau_phone_file=="")
			{$str+="<th>"+"<a target='_blank' href="+forth_url+"webapp/"+one_meau_file+indexhtml+">"+"查看PC端文件"+"</a>"+"&brvbar;"+"<a data-toggle='modal' href='#mynullmodal'>"+"查看移动端文件"+"</a>"+"</th>";} //一级菜单文件			
			else if(one_meau_file=="" && one_meau_phone_file=="")
			{$str+="<th>"+"<a data-toggle='modal' href='#mynullmodal'>"+"查看PC端文件"+"</a>"+"&brvbar;"+"<a data-toggle='modal' href='#mynullmodal'>"+"查看移动端文件"+"</a>"+"</th>";} //一级菜单文件			
			$str+="<th>"+"<a class='update_meau_name'>"+"修改"+"</a>"+"&brvbar;"+"<a class='del_meau'>"+"删除"+"</a>"+"</th>";//
			$str+="<th>"+"<span>"+one_meau_order+"</span>"+"&nbsp;"+"<span class='glyphicon glyphicon-chevron-up'></span>&nbsp;&nbsp;<span class='glyphicon glyphicon-chevron-down'></span>"+"</th>"; //一级菜单序号			
			$str+="</tr>";
		
			if (!json.allmenu[i].child)	//判断当前一级菜单是否有子孩子
			{
				continue;
			}
			var length=json.allmenu[i].child.length;//获取当前一级菜单的子菜单的长度	
			for(var j=0;j<length;j++)
			{     
				count++;       
	     		var two_meau_name=json.allmenu[i].child[j].a.menuName;	//获取二级菜单名字
				var two_meau_id=json.allmenu[i].child[j].a.menuId;		//获取二级菜单id
				var two_meau_photo=forth_url+json.allmenu[i].child[j].a.menuPicture;//获取二级菜单的图片
				var two_meau_file=json.allmenu[i].child[j].a.menuChain;	//获取二级菜单的PC端文件
				var two_meau_phone_file=json.allmenu[i].child[j].a.menuPhonechain;//获取二级菜单的移动端文件
				var two_meau_order=json.allmenu[i].child[j].a.menuOrder;		//获取二级菜单序号				
				$str+="<tr>";
				$str+="<td>"+two_meau_id+"</td>"; //二级菜单id
				$str+="<td>"+"二级菜单"+"</td>";//
				$str+="<td>"+two_meau_name+"</td>"; //二级菜单名字

				if(two_meau_photo!="")
				{$str+="<th>"+"<a target='_blank' href="+two_meau_photo+">"+"查看图片"+"</a>"+"</th>"; }//一级菜单图片
				else{$str+="<th>"+"<a data-toggle='modal' href='#mynullmodal'>"+"查看图片"+"</a>"+"</th>"; }
				
				if(two_meau_file!="" && two_meau_phone_file!="")
				{$str+="<th>"+"<a target='_blank' href="+forth_url+"webapp/"+two_meau_file+indexhtml+">"+"查看PC端文件"+"</a>"+"&brvbar;"+"<a target='_blank' href="+forth_url+"webapp/"+two_meau_phone_file+indexhtml+">"+"查看移动端文件"+"</a>"+"</th>";} //一级菜单文件			
				else if(two_meau_file=="" && two_meau_phone_file!="")
				{$str+="<th>"+"<a data-toggle='modal' href='#mynullmodal'>"+"查看PC端文件"+"</a>"+"&brvbar;"+"<a target='_blank' href="+forth_url+"webapp/"+two_meau_phone_file+indexhtml+">"+"查看移动端文件"+"</a>"+"</th>";} //一级菜单文件			
				else if(two_meau_file!="" && two_meau_phone_file=="")
				{$str+="<th>"+"<a target='_blank' href="+forth_url+"webapp/"+two_meau_file+indexhtml+">"+"查看PC端文件"+"</a>"+"&brvbar;"+"<a data-toggle='modal' href='#mynullmodal'>"+"查看移动端文件"+"</a>"+"</th>";} //一级菜单文件			
				else if(two_meau_file=="" && two_meau_phone_file=="")
				{$str+="<th>"+"<a data-toggle='modal' href='#mynullmodal'>"+"查看PC端文件"+"</a>"+"&brvbar;"+"<a data-toggle='modal' href='#mynullmodal'>"+"查看移动端文件"+"</a>"+"</th>";} //一级菜单文件			
				

				$str+="<td>"+"<a class='update_meau_name'>"+"修改"+"</a>"+"&brvbar;"+"<a class='del_meau'>"+"删除"+"</a>"+"</td>";//
				$str+="<td>"+"<span>"+two_meau_order+"</span>"+"&nbsp;"+"<span class='glyphicon glyphicon-chevron-up'></span>&nbsp;&nbsp;<span class='glyphicon glyphicon-chevron-down'></span>"+"</td>"; //二级菜单序号	

				$str+="</tr>";
			}
		}
		$("#checkMeau_table").append($str);  
		$("#checkMeau .panel-footer .record").text(count);    

	});
}





function getOneMeau()
{
	var url=url_forth+"getAllFirstMenu";

	$("#get_meau_focus").empty();

	$.get(url,function(json){
		$str=' ';
		for (var i=0;i<json.length ;i++ )
		{
			var meau=json[i].menuName; //一级菜单
			var id=json[i].menuId; //一级菜单

			$str+="<option value="+id+">";
			$str+=meau;   //一级菜单
			$str+="</option>"; 
		}
		$("#get_meau_focus").append($str); 
	});
}
$(function(){
	$("input[type=file]").change(function(){$(this).parents(".uploader").find(".filename").val($(this).val());});
	$("input[type=file]").each(function(){
		 // if($(this).val()==""){$(this).parents(".uploader").find(".filename").val("没有选择文件...");}
	});
});