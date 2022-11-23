from django.shortcuts import render, HttpResponse

# Create your views here.
def home(request):
    return render(request, 'home.html')


def create_blog(request):
    return render(request, 'create_blog.html')
