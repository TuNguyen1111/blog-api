from django.shortcuts import render, HttpResponse

# Create your views here.
def home(request):
    return render(request, 'home.html')


def create_blog(request):
    return render(request, 'create_blog.html')


def detail_blog(request, pk):
    context = {
        'blog_id': pk,
    }
    return render(request, 'detail_blog.html', context)


def login_view(request):
    return render(request, 'login.html')