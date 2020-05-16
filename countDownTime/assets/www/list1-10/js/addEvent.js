var tt = document.getElementById("showImg");
var box1 = document.getElementById("playbox1");

function hide() {
	tt.style.display = "none";
}

function add(q) {

	tt.style.display = "block";
	document.body.style.overflowY = "hidden";
	tt.innerHTML = q;
	//setTimeout(hide,3000);
	tt.onclick = function() {
		document.body.style.overflowY = "auto";
		tt.style.display = "none";

	}
}