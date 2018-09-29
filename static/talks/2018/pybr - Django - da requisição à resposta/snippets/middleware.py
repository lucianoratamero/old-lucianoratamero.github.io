def get_user(request):
    if not hasattr(request, '_cached_user'):
        request._cached_user = auth.get_user(request)
    return request._cached_user


class AuthenticationMiddleware(MiddlewareMixin):
    def process_request(self, request):
        assert hasattr(request, 'session'), (
            "..."
        ) % ("_CLASSES" if settings.MIDDLEWARE is None else "")
        request.user = SimpleLazyObject(lambda: get_user(request))
