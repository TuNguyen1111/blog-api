from rest_framework.decorators import api_view
from rest_framework.response import Response

from ..models import Blog
from ..serializers import BlogSerializer

@api_view(['GET'])
def get_blogs(request):
    blogs = Blog.get_all_blogs()
    context = {
        'request': request
    }
    serializer = BlogSerializer(blogs, context=context, many=True).data
    return Response(serializer)


@api_view(['GET'])
def get_blog(request, id):
    blog = Blog.get_blog_by_id(id)
    context = {
        'request': request
    }
    serializer = BlogSerializer(blog, context=context, many=False).data
    return Response(serializer)


@api_view(['POST'])
def update_blog(request, id):
    blog = Blog.get_blog_by_id(id)
    context = {
        'request': request,
    }
    serializer = BlogSerializer(instance=blog, data=request.data, context=context)
    if serializer.is_valid():
        serializer.save()
        return Response('Update success!')
    return Response('Update failed!')


@api_view(['POST'])
def create_blog(request):
    data = request.data
    context = {
        'request': request
    }
    serializer = BlogSerializer(data=data, context=context)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def delete_blog(request, id):
    blog = Blog.get_blog_by_id(id)
    if blog:
        blog.delete()
    return Response('Delete success!')