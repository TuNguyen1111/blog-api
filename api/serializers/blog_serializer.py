from rest_framework import serializers

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
        return obj.image.url