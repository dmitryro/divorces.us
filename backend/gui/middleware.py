from django.contrib.auth import logout


class CORSMiddleware(object):
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        response["Access-Control-Allow-Origin"] = "*"

        return response


class ForceLogoutMiddleware(object):
    def process_request(self, request):
        if request.user.is_authenticated and request.user.force_logout_date and \
           request.session['LAST_LOGIN_DATE'] < request.user.force_logout_date:
            logout(request)
