from amigosdegilbert.template import BaseTemplate
import os
import Image

srcPath = "amigosdegilbert/static/media/"
def sortImages(x,y):
	x = Image.open(srcPath+x).size[1]
	y = Image.open(srcPath+y).size[1]

	return -1 if x > y else 0 if x == y else 1

def getImages():
	images = os.listdir(srcPath)
	images.sort(sortImages)
	return images

def index(request):
	
	tempBase = BaseTemplate(request, 'gallery/index.html',
		{"panels":xrange(5),
		"images":getImages()})
	return tempBase.render()
