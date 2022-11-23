from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('create-blog', views.create_blog, name='create-blog'),
    path('detail-blog/<str:pk>', views.detail_blog, name='detail-blog'),
    path('login/', views.login_view, name='login')
]