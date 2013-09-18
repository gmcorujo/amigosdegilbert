(function(){
		var buscador = document.getElementById("buscador");
		var content = document.getElementsByClassName("content")[0];
		buscador.onfocus = function(evt){
			content.style.marginTop = "110px";
		};
		buscador.onblur = function(evt){
			if (content.style.marginTop == "110px"){
				content.style.marginTop = "60px";
			}
		};
})();