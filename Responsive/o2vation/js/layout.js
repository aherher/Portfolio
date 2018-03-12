$(document).ready(function(e) {
	//pc화면 메뉴 
	$(".header_wrap").mouseenter(function (){	
		$(".submenu_bg:not(:animated)").slideDown(300);
		$(".submenu:not(:animated)").slideDown(300);
		//$(".head > li").css("height", 380);		
		$(".head > li").animate({height:380}, 300);	
		});
	$(".header_wrap").mouseleave(function (){
		$(".head > li").css("height", 17);
		$(".submenu_bg:not(:animated)").slideUp(300);
		$(".submenu:not(:animated)").slideUp(300);	
		});
		
	$(".wrap").mouseenter(function (){
		$(".head > li").css("height", 17);
		$(".submenu").slideUp(300);
		$(".submenu_bg").slideUp(300);
	
		});
	//포트폴리오	
	$(".port_list li").mouseenter(function (){
		
		$("<div class='inlayer'></div>").prependTo($(this).children("a"));
		
		$(this).find(".inlayer").animate({opacity:0.7}, 300);
		$(this).find(".port_txt").delay(50).slideDown(100);
		});
	$(".port_list li").mouseleave(function (){
		$(".port_txt").hide();
		$(this).find(".inlayer").animate({opacity:0}, 100, function (){
			$(this).remove();
			});
		
		});
		
	//주요 고객사
	var client_force = $(".clients > li").length;
	var c = 1;
	//var cle_width = $(".cle_slide").width();
	$(".clients").css("width", client_force*136);
	$(".clients > li").last().appendTo(".clients");
	$(".cls_right").click(function (){
		$(".clients:not(:animated)").animate({marginLeft:parseInt($(".clients").css("margin-left"))-136}, 300, function (){
		$(".clients > li").first().appendTo(".clients");
		$(".clients").css("margin-left", -136+"px");		
		});
		
		});
	$(".cls_left").click(function (){
		$(".clients:not(:animated)").animate({marginLeft:parseInt($(".clients").css("margin-left"))+136}, 300, function (){
		$(".clients > li").last().prependTo(".clients");
		$(".clients").css("margin-left", -136+"px");		
		});
		});
	
	//모바일 메뉴
    $(".menu_btn").click(function (){
		$(".m_headWrap").show().animate({marginRight:0}, 300);
		$(".blck_bg").show();
		var win_height = $(window).height();
		$("body").css("height", win_height);
		$("body").css("overflow", "hidden");
		});
	$(".min_top span").click(function (){
		$(".m_headWrap").show().animate({marginRight:-80+"%"}, 300, function (){
			$(".m_submenu").hide();
			});
		$(".blck_bg").hide();
		$("body").css("height", "auto");
		$("body").css("overflow", "inherit");
		
		});	
		
	//모바일 메뉴 클릭시 하위메뉴	
	$(".m_head > li > a").click(function (){
		$(".m_submenu").slideUp(300);
		var slDown = $(this).next(".m_submenu");
		//$(".m_submenu > li > a").removeClass("on");
		//$(this).addClass("on");
		
		if($(slDown).css("display") == "none"){
			$(slDown).slideDown(300);
			return false;
			};	
		});
	
});