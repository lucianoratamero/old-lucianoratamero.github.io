
class ExampleWSGIApplication:

    ...

    def __call__(self, environ, start_response):
        path = environ['PATH_INFO']

        if self.is_allowed_django_route(path):
            return self.django_wsgi_app(environ, start_response)

        return self.other_wsgi_app(environ, start_response)
