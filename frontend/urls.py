from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('create-blog', views.create_blog, name='create-blog')
]