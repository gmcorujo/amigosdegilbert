from amigosdegilbert.template import BaseTemplate

def index(request):
	tempBase = BaseTemplate(request, 'gallery/index.html',{})
	return tempBase.render()
