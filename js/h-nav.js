$(function(){
	var flag=true;
	var main=document.querySelector("#container");
	var zz=document.querySelector("#zz");
	var h_nav=document.querySelector("#h-nav");
	var fl=true;
	main.addEventListener("touchend",function(){
		if(!flag){
			$(".h-nav-c").hide();	
			flag=true;
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
			$(".zz").show();
			$(".all-nav").animate({"left":"-10px"},500);
			fl=false;
		}
	})
	zz.addEventListener("touchend",function(){
		console.log("1");
		if(!fl){	
			$(".all-nav").animate({"left":"-110px"},500,function(){
				$(".zz").hide();
			});
			fl=true;
		}
	})
})
