from django.conf.urls import patterns, include, url
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'amigosdegilbert.views.home', name='home'),
    # url(r'^amigosdegilbert/', include('amigosdegilbert.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^admin/', include(admin.site.urls)),
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    url(r'^$', include('amigosdegilbert.noticias.urls'), name='noticias'),
    url(r'^noticias/', 'amigosdegilbert.noticias.urls', name='noticias'),
)
