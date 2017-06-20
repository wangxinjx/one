$(function(){
	console.log($("#lb"))

	var storage=window.localStorage;
			var c="";
			var sj=document.getElementById("sj");
			var lb=document.getElementById("lb");
		    console.log($("#sec"));
			var arr=[];
			var arr2=[];
			c=storage.c;
			var f=storage.f;
			arr=c.split("<br/>");
			arr2=f.split("<br/>");
			console.log(f);
			for(var i=0;i<arr.length;i++){
				var	lis=document.createElement("li");
				lb.appendChild(lis);
				var p=document.createElement("p");
				var s=document.createElement("span");
				p.innerHTML=arr[i];
				s.innerHTML=arr2[i];
				lis.appendChild(p);
				p.appendChild(s);
			}
		 $("#lb li").each(function(index){
					$("#lb li").on("click",function(){
							window.location.href="see.html";
							console.log($(this).index());
							storage.e=$(this).index();
					})
				})
	
		
})
