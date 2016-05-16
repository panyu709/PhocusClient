/*
Phocus.js V1.0.0
By Steve @ PHOCUS.COM.CN
2016-01-20 15:30
*/


/*--------获取窗口宽高----------*/
function getWindow(){
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	var result = [winHeight, winWidth];
	return result;
}
/*
获取方式：
1、getWindow()[0] => 获取高度;
2、getWindow()[1] => 获取宽度;
*/



/*--------获取对象宽高----------*/
function getObject(objName){
	var objHeight = $(objName).height();
	var objWidth = $(objName).width();
	var result = [objHeight, objWidth];
	return result;
}
/*
获取方式：
1、objName => 对象名称;
2、getObject()[0] => 获取高度;
3、getObject()[1] => 获取宽度;
*/



/*--------设置对象宽高----------*/
function setSize(objName, valueHeight, valueWidth){
	$(objName).height(valueHeight);
	$(objName).width(valueWidth);
}
/*
设置方式：
1、objName => 对象名称;
2、valueHeight => 高度值;
3、valueWidth => 宽度值;
*/



/*--------隐藏显示对象----------*/
/*显示*/
function objShow(objName){
	$(objName).fadeIn();
}
/*隐藏*/
function objHide(objName){
	$(objName).fadeOut();
}
/*
设置方式：
1、objName => 宽度值;
*/



/*--------增加和减少数量----------*/
function setNumber(decres, incres, numholder){
	$(decres).click(function(){
		var num = $(numholder).text();
		if(num <= 1){
			$(numholder).text(1);
		} else {
			num--;
			$(numholder).text(num);
		}
	});
	$(incres).click(function(){
		var num = $(numholder).text();
		num++;
		$(numholder).text(num);
	});
}
/*
设置方式：
1、decres => 减少按钮;
2、incres＝> 增加按钮;
3、numholder => 数字显示对象;
*/




/*--------获取系统当前时间----------*/
function dateHandle(type) {
    var now    = new Date();
    var year   = now.getFullYear();
 	var month  = now.getMonth()+1;
    var date   = now.getDate();
    var hour   = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (date < 10) {date = '0' + date;};
    if (hour < 10) {hour = '0' + hour;};
    if (month < 10) {month = '0' + month;};
    if (minute < 10) {minute = '0' + minute;};
    if (second < 10) {second = '0' + second;};

    if (type==0) {
        return year+"-"+month+"-"+date;
    }; 
    if (type==1) {
        return year+"-"+month+"-"+date+' '+hour+':'+minute;
    };
    if (type==2) {
        return year+"-"+month+"-"+date+' '+hour+':'+minute+':'+second;
    };
    if (type==3) {
    	return year+"年"+month+"月"+date+"日";
    }
}
/*
设置方式：
1、type => 时间格式;
2、0 ＝> 例如：2016-01-02;
3、1 ＝> 例如：2016-01-02 23:12;
4、2 ＝> 例如：2016-01-02 23:12:32;
5、3 ＝> 例如：2016年04月23日
*/



























