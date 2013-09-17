(function(){
	var actions = {
		showModal : function(evt){
			var that = $(this).clone();
			$(that).css("width" , "538px");
			var imgModal = actions.imgModal;
			imgModal.find(".modal-body").html(that);
			imgModal.modal('show');
			
		}
	};
	var main = function(){
		actions.imgModal = $("#imgModal");
		actions.imgModal.modal("hide");
		$(".gallery img").click(actions.showModal)
	};
	$(document).ready(main);
})();