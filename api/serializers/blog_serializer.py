from rest_framework import serializers
from rest_framework.reverse import reverse

from ..models import Blog


class BlogSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField('get_image_url')

    class Meta:
        model = Blog
        fields = [
            'title',
            'description',
            'image_url',
        ]

    def get_image_url(self, obj):
        request = self.context.get('request')
        image_url = obj.image.url
        return request.build_absolute_uri(image_url)