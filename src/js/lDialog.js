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
        },

        //弹出icon提示框
        iconToast: function (req) {

            //判断toast是否已经显示,防止二次点击再次生成
            if($(".lDialog-iconToast").is(":visible")){
                return
            }
            var title = req.title || "我是一个iconToast",   //toast标题
            duration = req.duration || 2500,           //toast显示时间,默认2秒
            icon = req.icon || "success";              //icon类型，默认为"success"，一共有2种,icon:["success","error"]
            theme = req.theme || "default";            //主题颜色,一共有7种,theme:["default","primary","link","success","info","warning","danger"]
            $("body").append("<div class='lDialog lDialog-iconToast "+theme+"'><div class='iconToast-icon "+icon+"'><img src='http://pbox1mnpt.bkt.clouddn.com/"+icon+".png' alt=''></div><p class='iconToast-text'>"+title+"</p></div>"); //显示toast
            $(".lDialog-iconToast").fadeIn(500);

            //显示后关闭toast
            setTimeout(function(){
                $(".lDialog-iconToast").remove();
            },duration)
        },

        //弹出loading提示框
        sLoadingToast: function(req){

           //判断toast是否已经显示,防止二次点击再次生成
            if($(".lDialog-LoadingToast").is(":visible")){
                return
            } 
            var title = req.title || "加载中",   //toast标题，默认"加载中"
            theme = req.theme || "default";            //主题颜色,一共有7种,theme:["default","primary","link","success","info","warning","danger"]
            $("body").append("<div class='lDialog lDialog-LoadingToast "+theme+"'><div class='loading'><img src='http://pbox1mnpt.bkt.clouddn.com/loading.png' alt=''></div><p class='iconToast-text'>"+title+"</p></div>"); //显示toast
            $(".lDialog-LoadingToast").fadeIn(500);
        },

        //关闭loading提示框
        hLoadingToast: function(){
            $(".lDialog-LoadingToast").remove();
        }
	}
})(jQuery, window,document);
