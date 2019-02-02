/*var marginY=0;
var dest=0;
var speed=5;
var scrolltime=null;
function smoothscroll(elemid){
	var dest=document.getElementById(elemid).offsetTop;
	scrolltime=setTimeout(function(){
		smoothscroll(elemid);
	},1000);
	marginY=marginY+speed;
	if(marginY>dest){
		clearTimeout();	
	}	
};
window.scroll(0,marginY);

document.getElementById("Benefit").addEventListener("click", smoothscroll("Benefit"));*/