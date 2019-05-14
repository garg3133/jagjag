function nav_button(){
	var a = document.getElementById("inavbar2");
	a.style.display="block";
	var a = document.getElementById("inav-button-close");
	a.style.display="block";
	var a = document.getElementById("inav-button");
	a.style.display="none";
}
function nav_button_close(){
	var a = document.getElementById("inavbar2");
	a.style.display="none";
	var a = document.getElementById("inav-button-close");
	a.style.display="none";
	var a = document.getElementById("inav-button");
	a.style.display="block";
}
function for_media_query(x){
	if (x.matches){
		document.getElementById("inavbar2").style.display="none";
		document.getElementById("inav-button").style.display="block";
		document.getElementById("inav-button-close").style.display="none";
	}
	else{
		document.getElementById("inavbar2").style.display="none";
		document.getElementById("inav-button").style.display="none";
		document.getElementById("inav-button-close").style.display="none";
	}
}
var x=window.matchMedia("(max-width:760px)");
for_media_query(x);
x.addListener(for_media_query);  /*Whenever value of x is changed, for_media_query is called.*/

// Navbar closes if clicks anywhere else
window.onclick = function(e){
	if(!(e.target.matches('.navbut') || e.target.matches('.menu-icon'))){
		if(document.getElementById("inavbar2").style.display==="block"){
			nav_button_close();
		}
	}
}
