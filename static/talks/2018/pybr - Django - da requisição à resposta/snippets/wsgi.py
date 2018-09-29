
class DjangoAPIStarWSGIApplication:

    ...

    def __call__(self, environ, start_response):
        path = environ['PATH_INFO']

        ...

        if self.is_allowed_django_route(path):
            return self.django_wsgi_app(environ, start_response)

        return self.apistar_wsgi_app(environ, start_response)

    def is_allowed_django_route(self, path):
        allowed_django_routes = settings.APISTAR_SETTINGS.get(
            'ALLOWED_DJANGO_ROUTES',
            []
        )
        path_is_contained = [
            route
            for route
            in allowed_django_routes
            if path.startswith(route)
        ]

        if path in allowed_django_routes or path_is_contained:
            return path
