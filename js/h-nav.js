$(function(){
	var flag=true;
	var main=document.querySelector("#container");
	var h_nav=document.querySelector("#h-nav");
	var fl=true;
	main.addEventListener("touchend",function(){
		if(!flag){
			$(".h-nav-c").hide();	
			flag=true;
		}
		if(!fl){
			console.log($(".all-nav"));
			$(".all-nav").animate({"left":"-110px"},500);
			fl=true;
		}
	})
	$(".h-nav").on("tap",function(){
		if(flag){
			$(".h-nav-c").show();
			flag=false;
		}
		else{
			$(".h-nav-c").hide();
			flag=true;
		}
	})
	$("#all").on("tap",function(){
		if(fl){
			$(".all-nav").animate({"left":"-10px"},500);
			fl=false;
		}
	})
})
