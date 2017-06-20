$(function(){
	console.log($("#lb"))

	var storage=window.localStorage;
			var c="";
			var sj=document.getElementById("sj");
			var lb=document.getElementById("lb");
		    console.log($("#sec"));
			var arr=[];
			c=storage.c;
			arr=c.split("<br/>");
			console.log(arr);
			for(var i=0;i<arr.length;i++){
				var	lis=document.createElement("li");
				
				lis.innerHTML=arr[i];
				lb.appendChild(lis);
			}
		 $("#lb li").each(function(index){
					$("#lb li").on("click",function(){
							window.location.href="see.html";
							console.log($(this).index());
							storage.d=$(this).index();
					})
				})
	
		
})
