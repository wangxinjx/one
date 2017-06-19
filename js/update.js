$(function(){
	var flag=true;
	var main=document.querySelector("#container");
	var up_nav=document.querySelector("#up-nav");
	var fl=true;
	main.addEventListener("touchend",function(){
		if(!flag){
			$(".up-nav-c").hide();	
			flag=true;
		}
	})
	$(".up-nav").on("tap",function(){
		if(flag){
			$(".up-nav-c").show();
			flag=false;
		}
		else{
			$(".up-nav-c").hide();
			flag=true;
		}
	})
	$("#tc").on("tap",function(){
		window.location.href="index.html";
	})
	var selectedFile = $('#myimg1').get(0).files[0];
	console.log($('input[type="file"]'));
	
})