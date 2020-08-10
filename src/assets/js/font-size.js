window.onreset = function (){
	onsize()
}

function onsize() {
	let html = document.documentElement
	//判断宽度是否是在这个区间
	let htmlWidth = html.clientWidth
	if (htmlWidth < 1024) htmlWidth = 1024
	if (htmlWidth > 1260) htmlWidth = 1260
	//设置大小
	html.style.fontSize = (htmlWidth / 78.75) + "px"
}
onsize()