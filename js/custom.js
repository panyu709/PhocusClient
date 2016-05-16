/*显示／隐藏修改姓名*/
$("#update_name_click, #update_con_name_click").click(function(){
	objShow("#update_name");
});
$("#cancel_name").click(function(){
	objHide("#update_name");
});
$("#submit_name").click(function(){
	objHide("#update_name");
	objShow("#toast");
	setTimeout(function(){ objHide("#toast"); }, 1500);
});




/*显示／隐藏修改职位*/
$("#update_title_click, #update_con_title_click").click(function(){
	objShow("#update_title");
});
$("#cancel_title").click(function(){
	objHide("#update_title");
});
$("#submit_title").click(function(){
	objHide("#update_title");
	objShow("#toast");
	setTimeout(function(){ objHide("#toast");}, 1500);
});




/*显示／隐藏修改电话*/
$("#update_phone_click, #update_con_phone_click").click(function(){
	objShow("#update_phone");
});
$("#cancel_phone").click(function(){
	objHide("#update_phone");
});
$("#submit_phone").click(function(){
	objHide("#update_phone");
	objShow("#toast");
	setTimeout(function(){ objHide("#toast");; }, 1500);
});



/*显示／隐藏删除联系人*/
$("#remove_click").click(function(){
	objShow("#remove_contact_man");
});
$("#remove_no").click(function(){
	objHide("#remove_contact_man");
});
$("#remove_yes").click(function(){
	objHide("#remove_contact_man");
	objShow("#toast");
	setTimeout(function(){ objHide("#toast");; }, 1500);
});



/*显示／隐藏添加联系人*/
$("#add_contact_man_click").click(function(){
	objShow("#add_contact_man");
});
$("#add_no").click(function(){
	objHide("#add_contact_man");
});
$("#add_yes").click(function(){
	objHide("#add_contact_man");
	objShow("#toast");
	setTimeout(function(){ objHide("#toast");; }, 1500);
});



/*回到顶部*/
// $(window).scroll(function(){
// 	var top = $(window).scrollTop();
// 	if(top > 500){
// 		$("span.backtotop").fadeIn();
// 	}
// 	if(top < 500){
// 		$("span.backtotop").fadeOut();
// 	}
// });
// $('span.backtotop').click(function(event) {
// 	$('html, body').animate({scrollTop: 0}, 800);
// })



/*需求详情与状态切换*/
$("#status_click").click(function() {
	var w = $("#xuqiu_click").outerWidth();
	var h = $("#status").height(); 
	$("#wrapper").height(h+20);
	$("#xuqiu").animate({left: '-600px'});
	$("#status").animate({left: '0px'});
	$("#statu_bar").animate({left: w+2});
});
$("#xuqiu_click").click(function() {
	var w = $("#xuqiu_click").outerWidth();
	var x = $("#xuqiu").height(); 
	$("#wrapper").height(x+20);
	$("#status").animate({left: '600px'});
	$("#xuqiu").animate({left: '0px'});
	$("#statu_bar").animate({left: '0px'});
});



/*显示／隐藏接受报价*/
$(".accept_click").click(function(){
	objShow("#accept_price_box");
});
$("#accept_no").click(function(){
	objHide("#accept_price_box");
});
$("#accept_yes").click(function(){
	objHide("#accept_price_box");
	objShow("#toast");
	setTimeout(function(){ 
		objHide("#toast");
	}, 1500);
});



/*项目日志详情*/
$(".message, .daiban").click(function(){
	var x = $(this).index();
	var tag = $(this).find(".chevron").attr('tag');
	if(tag == 1){
		$(this).find(".showless").text('是领导飞机上看风景阿里椒的拉萨...');
		var contentHeight = $("#status").height();
		$("#wrapper").height(contentHeight+20);
		$(this).find(".chevron").removeClass("rotate-s").addClass("rotate-n");
		$(this).find(".chevron").attr('tag', '0');
	} else {
		$(this).find(".showless").text('是领导飞机上看风景阿里椒的拉萨发蜡金德拉克萨芬，发蜡咖啡机拉萨减肥啊法律的卷发离开，玩儿哦见哦啊记得发生对抗，分拉萨减肥客的发掘，发蜡空间的理发师尽快立法。');	
		var contentHeight = $("#status").height();
		$("#wrapper").height(contentHeight+20);
		$(this).find(".chevron").attr('tag', '1');
	 	$(this).find(".chevron").removeClass("rotate-n").addClass("rotate-s");
	}
});




/*验收通过判断*/
$("#yanshou_yes").click(function(){
	var x = $("input[name=pass]").val();
	if(x == '验收通过'){
		objHide("#accept_price_box");
		objShow("#toast");
		setTimeout(function(){ 
			objHide("#toast");
		}, 1500);
	} else {
		$("input[name=pass]").css('border-color', '#c14054').val('').focus();
		return false;
	}
});




/*问题详情飘浮层*/
$(document).ready(function(){
    var boxHeight = $("div.bigwrap").height();
	var winHeight = $(window).height();
	$("div.float_panel").css("top",boxHeight);
	if(boxHeight < winHeight) {
		setSize('div.bigwrap, div.mask, div.float_panel', winHeight+20, '100%');
	} 
	if(boxHeight > winHeight){
		setSize('div.float_panel, div.mask', boxHeight, '100%');
	}
});	




/*显示问题详情面板*/

$(".buglist").click(function(){
	$("div.float_panel").animate({top:'0px'});
	setTimeout(function(){$("span.floatclose").fadeIn();}, 500);
});
$("span.floatclose").click(function(){
    var boxHeight = $("div.bigwrap").height();
	var winHeight = $(window).height();
	if(boxHeight < winHeight){
		$("div.float_panel").animate({top:winHeight});
	} else {
		$("div.float_panel").animate({top:boxHeight});
	}
	$(this).fadeOut();
});




/*问题图片说明显示／隐藏*/
$("img.bug_img").click(function(){
	$("div.mask, img.preview_img").fadeIn();
});
$("img.preview_img").click(function(){
	$("div.mask, img.preview_img").fadeOut();
});



/*意见反馈提交*/
$("#submit_feedback").click(function(){
	objShow("#toast");
		setTimeout(function(){ 
			objHide("#toast");
			location.href="../index.html";
		}, 1500);
});




/*发表留言*/
$(".write_liuyan").click(function(){
	$("#liuyan").fadeIn();
	$(".weui_mask").css('z-index', '10');
});
$("#liuyan_no").click(function(){
	$("#liuyan").fadeOut();
});
$("#liuyan_yes").click(function(){
	objHide("#liuyan");
	$(".weui_toast").css('z-index', '10');
	objShow("#toast");
	setTimeout(function(){ 
		objHide("#toast");
	}, 1500);
});





