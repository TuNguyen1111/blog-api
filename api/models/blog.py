from django.db import models
from django.contrib.auth.models import User


class Blog(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=100, null=False, blank=False)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True, default='/iniesta.jpg')

    def __str__(self):
        return self.title

    @classmethod
    def get_all_blogs(cls):
        return cls.objects.all()

    @classmethod
    def get_blog_by_user(cls, user):
        return cls.objects.filter(user=user)