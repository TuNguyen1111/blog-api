from rest_framework.permissions import BasePermission


class CanViewBlogs(BasePermission):
    def has_permission(self, request, view):
        user = request.user
        if user:
            return user.has_perm('api.view_blog')
        return super().has_permission(request, view)


class CanCreateBlog(BasePermission):
    def has_permission(self, request, view):
        user = request.user
        if user:
            return user.has_perm('api.create_blog')
        return super().has_permission(request, view)