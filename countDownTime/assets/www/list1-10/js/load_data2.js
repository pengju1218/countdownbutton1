



function getKey(title){
	
	
	switch(title){
		case '底部向下的': 
		return json.Down_Down;
		break;
		
	}
		
}



function fetchJson(){
	var add_list=document.getElementById("playbox1");
	var my_title=document.getElementsByClassName("mui-title")[0];
	var key=getKey(my_title.innerHTML);
    add_list.innerHTML=key;
}



function closeWin() {
	window.location.href = "../choice100.html";
	//history.go(-1);
	api.closeWin({});
}