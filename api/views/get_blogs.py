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