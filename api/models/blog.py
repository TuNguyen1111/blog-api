from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist


class Blog(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=100, null=False, blank=False)
    content = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True, default='/iniesta.jpg')

    def __str__(self):
        return self.title

    @classmethod
    def get_all_blogs(cls):
        return cls.objects.all()

    @classmethod
    def get_blog_by_user(cls, user):
        return cls.objects.filter(user=user)

    @classmethod
    def get_blog_by_id(cls, blog_id):
        try:
            return cls.objects.get(id=blog_id)
        except ObjectDoesNotExist:
            return None