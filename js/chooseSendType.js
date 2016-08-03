$(document).ready(function(){
	$("#form_head_left").click(function() {
		$(this).removeClass().addClass("form_head_left");
		$("#form_head_right").removeClass().addClass("form_head_right");
		$("#send_one_meau_form").css("display",'block');
		$("#send_two_meau_form").css("display", 'none');
	});
	$("#form_head_right").click(function() {
		$(this).removeClass().addClass("form_head_left");
		$("#form_head_left").removeClass().addClass("form_head_right");
		$("#send_one_meau_form").css("display",'none');
		$("#send_two_meau_form").css("display",'block');
	});
});