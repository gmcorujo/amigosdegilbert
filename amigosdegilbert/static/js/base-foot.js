(function(){
	// buscador focus behavior
	// var buscador = document.getElementById("buscador");
	// var content = document.getElementsByClassName("content")[0];
	// buscador.onfocus = function(evt){
	// 	content.style.marginTop = "110px";
	// };
	// buscador.onblur = function(evt){
	// 	content.style.marginTop = (content.style.marginTop == "110px") ? "60px" : "110px";
	// };

	var baseActions = {
		getInnerText : function(){
			return this.getElementsByClassName("inner-text")[0];
		},
		hoverIn : function(){
			var innerText = baseActions.getInnerText.apply(this);
			var display = document.
							defaultView.
							getComputedStyle(innerText).
							getPropertyValue("display");
			if(display != "inline"){
				innerText.style.display = "inline";
			}
		},
		hoverOut : function(){
			var innerText = baseActions.getInnerText.apply(this);
			if(innerText.style.display == "inline"){
				innerText.style.display = "none";
			}
		},
		displayInnerText : function(){
			this.getElementsByClassName("inner-text")[0].
				style.display = "inline";
		},
		hiddeInnerText : function(){
			if (!this.getAttribute("class").match("active")){
				this.getElementsByClassName("inner-text")[0].
					style.display = "none";
			}
		},
		tooglePanelsito : function (){
			$(".panelsito").toggle("fast");
			$(this).toggleClass("active");
			baseActions.displayInnerText.apply(this);
			return false;
		},
		navLinks : $(".header .navbar-nav a"),
		contactTrigger : $(".trigger"),
		run : function(){
			this.navLinks.hover(
				baseActions.hoverIn,
				baseActions.hoverOut
				);

			this.contactTrigger.click(baseActions.tooglePanelsito);

			this.contactTrigger.hover(
				baseActions.displayInnerText,
				baseActions.hiddeInnerText
				);
		}
	};
	baseActions.run();
})();