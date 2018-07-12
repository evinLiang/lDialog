# lDialog
lDialog-会话框，依赖jquery

> 主题色：theme:["default","primary","link","success","info","warning","danger"]

### toast使用
```
$.lDialog.toast({
  content:'我是一个toast',	//toast内容,默认"我是一个toast"
  duration: 2000,		//显示时间，默认为2500秒
  theme:'default'		//主题色，默认为default
});
```

### iconToast使用，icon类型有：["success"、"error"]
```
$.lDialog.iconToast({
  title: '已完成',	//toast标题,默认"我是一个iconToast"
  icon: 'success',	//toast-icon类型，默认为"success"
  theme:'default',	//主题色，默认为default	
  duration: 2000	//显示时间，默认为2500秒
})
```

### loadingToast使用
```
//显示加载框
$.lDialog.sLoadingToast({
  title: '加载中',	//toast标题，默认"加载中"
  theme:'default',	//主题色，默认为default	
})
//关闭加载框
$.lDialog.hLoadingToast()
```

### modal使用
```
//显示模态框
$.lDialog.modal({
    title:'温馨提示',	//模态框标题，默认为空
    content:'我是内容',	//模态框内容，默认为"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内"
    footerText:'好的'	//模态框脚步标题，默认为"知道了"
})
```

### btnModal使用
```
//显示按钮模态框
$.lDialog.btnModal({
    title:'温馨提示',	//模态框标题，默认为空
    content:'我是内容',	//模态框内容，默认为"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内"
},function(){	//点击"确认按钮"执行，默认为空
	console.log(1);	//点击确认后执行这段代码
})
```
