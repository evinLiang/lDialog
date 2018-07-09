;(function ( $, window, document, undefined ){
	$.lDialog = {
		//弹出提示框
        toast: function (req) {

        	//判断toast是否已经显示,防止二次点击再次生成
        	if($(".lDialog-toast").is(":visible")){
        		return
        	}
            var content = req.content || "我是一个toast",	//toast内容
            duration = req.duration || 2500,				//toast显示时间,默认2秒
            theme = req.theme || "default";					//主题颜色,一共有7种,theme:["default","primary","link","success","info","warning","danger"]
            $("body").append("<div class='lDialog lDialog-toast "+theme+"'>"+content+"</div>");	//显示toast
            $(".lDialog-toast").fadeIn(500);

            //显示后关闭toast
            setTimeout(function(){
            	$(".lDialog-toast").remove();
            },duration)
        }
	}
})(jQuery, window,document);
