function keyLight(cls, key, bgColor) {
	var oDiv = document.getElementsByClassName(cls);
	var chi = oDiv[0].childNodes;
	for(var i = 0; i < chi.length; i++) {
		var type = chi[i].nodeName;
		if('LI' === type) {
			var sText = chi[i].innerHTML,
				bgColor = bgColor || "orange",
				sKey = "<span style='color: " + bgColor + ";'>" + key + "</span>",
				num = -1,
				rStr = new RegExp(key, "g"),
				rHtml = new RegExp("\<.*?\>", "ig"), //匹配html元素
				aHtml = sText.match(rHtml); //存放html元素的数组
			sText = sText.replace(rHtml, '{~}'); //替换html标签
			sText = sText.replace(rStr, sKey); //替换key
			sText = sText.replace(/{~}/g, function() { //恢复html标签
				num++;
				return aHtml[num];
			});
			chi[i].innerHTML = sText;
		}
	}
}

function keyLightList(cls, lis, color) {
	for(var i = 0; i < lis.length; i++) {
		keyLight(cls, lis[i], color);
	}

}

var textOne1 = ['内能大', '波段大', '神拐大', '独立大', '坑大均', '运筹大均', '三乖大'];
var textOne2 = ['内能小', '波段小', '神拐小', '独立小', '坑小均', '运筹小均', '三乖小'];
keyLightList('mui-table-view', textOne1, 'red');
keyLightList('mui-table-view', textOne2, 'green');
keyLight('mui-table-view', 'VR大，加量，持加', '#FF1493');
keyLight('mui-table-view', 'VR小，加量，持加', '#CD2626');
keyLight('mui-table-view', 'VR大，加量，持减', '#4B0082');
keyLight('mui-table-view', 'VR小，加量，持减', '#836FFF');
keyLight('mui-table-view', 'VR大，减量，持加', '#76EE00');
keyLight('mui-table-view', 'VR小，减量，持加', '#FFD700');

