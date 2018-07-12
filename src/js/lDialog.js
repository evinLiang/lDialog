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
            var ldialogDiv = 
            "<div class='lDialog lDialog-toast "+theme+"'>"+
                content+
            "</div>";
            $("body").append(ldialogDiv);	//显示toast
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
            var ldialogDiv =
            "<div class='lDialog lDialog-iconToast "+theme+"'>"+
                "<div class='iconToast-icon "+icon+"'>"+
                    "<img src='http://pbox1mnpt.bkt.clouddn.com/"+icon+".png' alt=''>"+
                "</div>"+
                "<p class='iconToast-text'>"+title+"</p>"+
            "</div>";
            $("body").append(ldialogDiv); //显示toast
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
            var ldialogDiv = 
            "<div class='lDialog lDialog-LoadingToast "+theme+"'>"+
                "<div class='loading'>"+
                    "<img src='http://pbox1mnpt.bkt.clouddn.com/loading.png' alt=''>"+
                "</div>"+
                "<p class='iconToast-text'>"+title+"</p>"+
            "</div>";
            $("body").append(ldialogDiv); //显示toast
            $(".lDialog-LoadingToast").fadeIn(500);
        },

        //关闭loading提示框
        hLoadingToast: function(){
            $(".lDialog-LoadingToast").remove();
        },

        //弹出模态框
        modal:function(req){
            var title = req.title || "",   //模态框标题，默认为""
            //模态框内容，默认为"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内"
            content = req.content || "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",    
            footerText = req.footerText || "知道了",   //模态框脚步文字，默认为"知道了"
            titleDiv = "";  //模态框默认内容

            //判断title是否为空，如果不为空，那么modal显示“标题内容”
            if(title !== ""){
                titleDiv = "<div class='lDialog-Modal-title'>"+title+"</div>";
            }
            var ldialogDiv =
            "<div class='lModal-box'>"+
                "<div class='lMask'></div>"+
                "<div class='lDialog lDialog-Modal'>"+
                    titleDiv+
                    "<div class='lDialog-Modal-content'>"+content+"</div>"+
                    "<div class='lDialog-Modal-footer' onclick='$.lDialog.hModal()'>"+footerText+"</div>"+
                "</div>"+
            "</div>"
            $("body").append(ldialogDiv); //显示toast
            $(".lModal-box").fadeIn(500);
        },

        //弹出按钮模态框
        btnModal:function(req,success){
            var title = req.title || "",   //模态框标题，默认为""
            //模态框内容，默认为"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内"
            content = req.content || "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内", 
            success = success || "",
            titleDiv = "";  //模态框默认内容

            //判断title是否为空，如果不为空，那么modal显示“标题内容”
            if(title !== ""){
                titleDiv = "<div class='lDialog-Modal-title'>"+title+"</div>";
            }
            var ldialogDiv =
            "<div class='lModal-box'>"+
                "<div class='lMask'></div>"+
                "<div class='lDialog lDialog-Modal'>"+
                    titleDiv+
                    "<div class='lDialog-Modal-content'>"+content+"</div>"+
                    "<div class='lDialog-Modal-footer'>"+
                        "<div class='lDialog-Modal-btn'>"+
                            "<a href='javascript:;' class='lBtn' onclick='$.lDialog.hModal()'>取消</a>"+
                            "<a href='javascript:;' class='rBtn' id='successBtn'>确定</a>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>"
            $("body").append(ldialogDiv); //显示toast
            $(".lModal-box").fadeIn(500);
            $("#successBtn").click(function(event) {
                
                //点击确认按钮之后回调
                $.lDialog.hModal();
                if(success!==""){
                   success(); 
                }                
            });
        },

        //关闭模态框
        hModal:function(){
            $(".lModal-box").remove();
        }
	}
})(jQuery, window,document);
