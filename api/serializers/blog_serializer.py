from rest_framework import serializers

from ..models import Blog


class BlogSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField('get_image_url')
    blog_id = serializers.SerializerMethodField('get_blog_id')

    class Meta:
        model = Blog
        fields = [
            'blog_id',
            'title',
            'content',
            'image_url',
        ]

    def get_image_url(self, obj):
        request = self.context.get('request')
        image_url = obj.image.url
        return request.build_absolute_uri(image_url)

    def get_blog_id(self, obj):
        return obj.id

    def create(self, validated_data):
        return super().create(validated_data)