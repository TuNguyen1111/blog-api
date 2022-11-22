from django.urls import path
from . import views


urlpatterns = [
    path('blogs/', views.get_blogs, name='get-blogs'),
    path('create/', views.create_blog, name='create-blog'),
    path('delete/<str:id>', views.delete_blog, name='delete-blog')
]