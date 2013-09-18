(function(){
		// buscador focus behavior
		var buscador = document.getElementById("buscador");
		var content = document.getElementsByClassName("content")[0];
		buscador.onfocus = function(evt){
			content.style.marginTop = "110px";
		};
		buscador.onblur = function(evt){
			content.style.marginTop = content.style.marginTop == "110" ? "60px";
		};

		// navvar hover behavior
		$(".header .navbar-nav a").hover(
			function(evt){
				var innerText = this.childNodes[1];
				var display = document.defaultView.getComputedStyle(innerText).getPropertyValue("display");
				if(display != "inline"){
					innerText.style.display = "inline";
				}
			},
			function(evt){
				var innerText = this.childNodes[1];
				if(innerText.style.display == "inline"){
					this.childNodes[1].style.display = "none";
				}
			}
		);
})();