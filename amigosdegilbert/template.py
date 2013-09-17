from django.template.response import TemplateResponse

class ItemNav:
	def __init__(self,url,icon):
		self.url = url
		self.icon = icon


class BaseTemplate(TemplateResponse):
	__navBar = (
		ItemNav("noticias","bullhorn"),
		ItemNav("galeria","picture"),
		ItemNav("proyectos","paperclip"),
		ItemNav("colaboradores","user")
		)
	__currentNav = "noticias"
	def __init__(self, request, template, context=None, mimetype=None, 
		status=None, content_type=None, current_app=None):
		super(BaseTemplate, self).__init__(request, template, context, mimetype=None, status=None, content_type=None, current_app=None)

	def setCurrentNav(self, currentNav):
		self.__currentNav = currentNav

	def render(self):
		cxt = self.context_data
		cxt.update({"navBar":self.__navBar,
			"currentNav":self.__currentNav})
		return super(BaseTemplate,self).render()


