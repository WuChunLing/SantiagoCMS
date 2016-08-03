/*页面切换跳转的控制代码
*/	
window.onload=function(){
	var omynav=document.getElementById("mynav").getElementsByTagName("li");
	var odisplay=document.getElementsByClassName("display");	

		for (var i=0;i<omynav.length ;i++ )
		{
			   omynav[i].index = i;
			   omynav[i].onclick = function ()
			{		  
				for (var p=0;p<odisplay.length ;p++ )odisplay[p].style.display="none";
				odisplay[this.index].style.display="block";
				for (var i=0;i<omynav.length ;i++ )omynav[i].className = "Nav";
				this.className = "active Nav";
			}
		}


	var panelBody=document.getElementsByClassName("panel-body");
	for (var i=0;i<panelBody.length ;i++ )
	{
		var otr=document.getElementsByClassName("panel-body")[i].getElementsByTagName("tr");
		var otrLength=otr.length-1;
		 var orecord=document.getElementsByClassName("record")[i];
	     orecord.innerHTML=otrLength;
	}

}
//放弃修改时的取消事件
function deleteRow(id,r)
  {
	  var i=r.parentNode.parentNode.rowIndex;
	  document.getElementById(id).deleteRow(i);
  }
  