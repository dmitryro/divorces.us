"""demo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static 
from django.conf import settings
from django.views.generic import TemplateView
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework_swagger.views import get_swagger_view
from rest_framework_swagger.renderers import OpenAPIRenderer, SwaggerUIRenderer
from rest_framework.schemas import get_schema_view
from rest_framework.routers import DefaultRouter
from rest_framework import viewsets, routers
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token
from rest_framework_jwt.views import verify_jwt_token
from chat.views import direct_chat_view
from chat.views import group_chat_view
from consult.views import ChildrenViewSet
from consult.views import MaritalStatusViewSet
from consult.views import process_consultation_view
from consult.views import verify_invoice_view
from gui.models import FAQ
from gui.sitemaps import StaticViewSitemap
from gui.views import home
from gui.views import resend_activation_view
from gui.views import confirm_account_view
from gui.views import GlobalSearchList
from gui.views import DashboardLogoutView
from gui.views import GetSearchResultsView
from gui.views import SlideViewSet
from gui.views import StateViewSet
from gui.views import CountryViewSet
from gui.views import ArticleViewSet
from gui.views import AskTemplateViewSet
from gui.views import ConsultationTypeViewSet
from gui.views import MileStoneViewSet
from gui.views import ServiceViewSet
from signup.views import SendEmailView
from signup.views import SubscribeView
from signup.views import logout_view
from blog.models import Post, Comment
from blog.views import AddPostView
from blog.views import AddCommentView
from blog.views import SaveCommentView
from blog.views import GetPostsView
from blog.views import DeletePostView
from blog.views import ReadPostView
from blog.views import GetAllPostsView
from blog.views import SavePostView
from blog.views import PostViewSet
from blog.views import CategoryViewSet
from blog.views import CommentViewSet
from blog.views import GetCommentsView
from blog.views import DeleteCommentView
from blog.feeds import RssSiteNewsFeed, AtomSiteNewsFeed
from blog.sitemaps import PostSitemap, CommentsSitemap
from users.sitemaps import AboutUsSitemap, ContactUsSitemap
from messaging.views import outgoing_messages_view
from messaging.views import incoming_messages_view
from messaging.views import msg_duplication_view
from messaging.views import SendMessageView
from messaging.views import UpdateMessageView
from messaging.views import NotificationTypeViewSet
from messaging.views import NotificationViewSet
from messaging.views import MessageViewSet
from messaging.views import MessagingSettingsList
from messaging.views import MessagingSettingsViewSet
from messaging.views import OutgoingMessagesList
from messaging.views import IncomingMessagesList
from messaging.views import ReadMessageView
from messaging.views import DeleteMessageView
from messaging.views import UserList
from payments.models import Address
from payments.views import PaymentsList
from payments.views import PastPaymentsList
from payments.views import AddressList
from payments.views import AddressViewSet
from payments.views import CardTypeViewSet
from payments.views import add_address_view
from payments.views import delete_address_view
from payments.views import read_addresses_view
from payments.views import send_confirmation_view
from payments.views import save_payment_method_view
from payments.views import read_payment_methods_view
from gui.views import ServiceViewSet
from services.views import PackageServiceViewSet
from services.views import PackageViewSet
from services.views import PackageTypeViewSet
from services.views import PackageList
from users.views import UserViewSet
from users.views import ProfileViewSet
from users.views import StateProvinceList
from users.views import StateProvinceViewSet
from users.views import AboutUsList
from users.views import AboutUsViewSet
from users.views import TeamMemberViewSet
from users.views import TeamMemberList
from users.views import auth_user
from users.views import CreateUserView
from users.models import AboutUs

schema_view = get_swagger_view(title='Pastebin API')

admin.autodiscover()
router = DefaultRouter()
router.register(r'articles', ArticleViewSet),
router.register(r'states', StateViewSet),
router.register(r'slides', SlideViewSet),
router.register(r'users', UserViewSet)
router.register(r'posts', PostViewSet)
router.register(r'profiles', ProfileViewSet)
router.register(r'marital', MaritalStatusViewSet)
router.register(r'children', ChildrenViewSet)
router.register(r'countries', CountryViewSet)
router.register(r'statesprovinces', StateProvinceViewSet)
router.register(r'cardtypes', CardTypeViewSet)
router.register(r'msgsettings', MessagingSettingsViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'notificationtypes', NotificationTypeViewSet)
router.register(r'notifications', NotificationViewSet)
router.register(r'messages', MessageViewSet)
router.register(r'packageservices', PackageServiceViewSet)
router.register(r'packages', PackageViewSet)
router.register(r'packagetypes', PackageTypeViewSet)
router.register(r'addresses', AddressViewSet)
router.register(r'aboutprofiles', AboutUsViewSet)
router.register(r'teammembers', TeamMemberViewSet)
router.register(r'asktemplates', AskTemplateViewSet)
router.register(r'consulttypes', ConsultationTypeViewSet)
router.register(r'cardtypes', CardTypeViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'teammembers', TeamMemberViewSet)
router.register(r'aboutus', AboutUsViewSet)
router.register(r'milestones', MileStoneViewSet)
router.register(r'services', ServiceViewSet),

urlpatterns = router.urls

api_urlpatterns = [
    path('accounts/', include('rest_registration.api.urls')),
]

urlpatterns = [ 
    path('', home),
    path('grappelli/', include('grappelli.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('auth/', auth_user),
    path('direct/', direct_chat_view),
    path('group/', group_chat_view),
    path('register/', CreateUserView.as_view()),
    path('admin/', admin.site.urls),
    path('openapi', get_schema_view(
        title="Your Project",
        description="API for all things …"
    ), name='openapi-schema'),
    path('swagger-ui/', TemplateView.as_view(
        template_name='swagger-ui.html',
        extra_context={'schema_url':'openapi-schema'}
    ), name='swagger-ui'),
    path('redoc/', TemplateView.as_view(
        template_name='redoc.html',
        extra_context={'schema_url':'openapi-schema'}
    ), name='redoc'),
    path('docapi', schema_view),
    path('api-token-auth/', obtain_jwt_token),
    path('api-token-refresh/', refresh_jwt_token),
    path('api-token-verify/', verify_jwt_token),
    path('api/v1/', include(api_urlpatterns)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
