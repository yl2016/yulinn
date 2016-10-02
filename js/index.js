window.onload=function(){
	var liObjs=document.getElementsByTagName("li");
	var children=document.getElementById("content").getElementsByTagName("div");
	for(var i=0;i<liObjs.length;i++){
		(function(i){
			liObjs[i].onmouseover=function(){
				//所有不可见
				for(var x=0;x<liObjs.length;x++){
					children[x].style.display="none";
					liObjs[x].getElementsByTagName("span")[0].style.display="none";
				}
				//让可见的可见
				children[i].style.display="block";
				this.getElementsByTagName("span")[0].style.display="block";
			};
			liObjs[i].onmouseout=function(){
				children[i].style.display="none";
				this.getElementsByTagName("span")[0].style.display="none";
			};
		})(i);
	}
};
