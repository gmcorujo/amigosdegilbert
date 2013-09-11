from django.template.response import TemplateResponse

class BaseTemplate(TemplateResponse):
	__navBar = "noticias","galeria","proyectos","colaboradores"
	
	def __init__(self, request, template, context=None, mimetype=None, 
		status=None, content_type=None, current_app=None):
		super(BaseTemplate, self).__init__(request, template, context=None, mimetype=None, status=None, content_type=None, current_app=None)


