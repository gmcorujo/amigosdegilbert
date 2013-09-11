from amigosdegilbert.template import BaseTemplate

def index(request):
	tempRes = BaseTemplate(request, "noticias/index.html",{})
	return tempRes.render()