from datetime import datetime
import logging
from .models import Profile
from .models import User
from .models import AboutUs
from .models import TeamMember
from .models import StateProvince
from .filters import AboutUsFilter
from .filters import UserFilter
from .filters import TeamMemberFilter
from .filters import StateProvinceFilter
from .serializers import AboutUsSerializer
from .serializers import UserSerializer
from .serializers import TeamMemberSerializer
from .serializers import StateProvinceSerializer
from .serializers import ProfileSerializer
from django.shortcuts import render
from django.contrib.auth import get_user_model
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
#from django_filters import rest_framework as filters
from rest_framework import generics, viewsets, mixins, filters
from rest_framework.decorators import api_view, renderer_classes, permission_classes
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated
from rest_framework.renderers import JSONRenderer
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.generics import CreateAPIView
from users.serializers import UserSerializer
from rest_framework import permissions


logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)


@api_view(['POST', 'GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([AllowAny,])
def auth_user(request):
    return Response({"message": "success",
                     "status": "posted",
                     "code": 200,
                     "falure_code": 0}, status=200)


class AboutUsList(generics.ListAPIView):

    queryset = AboutUs.objects.all()
    filter_class = AboutUsFilter
    serializer_class = AboutUsSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('title', 'subtitle', 'body',)

class AboutUsViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing about us blocks.
    """
    serializer_class = AboutUsSerializer
    queryset = AboutUs.objects.all()


class TeamMemberViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing about us blocks.
    """
    serializer_class = TeamMemberSerializer
    queryset = TeamMember.objects.all()


class TeamMemberList(generics.ListAPIView):
    queryset = TeamMember.objects.all()
    filter_class = TeamMemberFilter
    serializer_class = TeamMemberSerializer


class StateProvinceList(generics.ListAPIView):

    queryset = StateProvince.objects.all()
    filter_class = StateProvinceFilter
    serializer_class = StateProvinceSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('name','abbreviation',)


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = (filters.SearchFilter,)
    filter_class = UserFilter
    search_fields = ('id', 'username', 'email')    
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]


class UserViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing post instances.
    """
    serializer_class = UserSerializer
    queryset = User.objects.all()


class ProfileViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing profile instances.
    """
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()


class StateProvinceViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing profile instances.
    """
    serializer_class = StateProvinceSerializer
    queryset = StateProvince.objects.all()
#class UserViewSet(viewsets.ModelViewSet):
#    """
#    A viewset for viewing and editing user instances.
#    """
#    serializer_class = UserSerializer
#    queryset = User.objects.all()
#    filter_class = UserFilter
#    filter_backends = (filters.SearchFilter,)
#    filter_fields = ('id', 'username', 'email')
#    permission_classes = [
#        permissions.AllowAny # Or anon users can't register
#    ]

class CreateUserView(CreateAPIView):

    model = get_user_model()
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = UserSerializer


class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_class = UserFilter
    filter_backends = (filters.SearchFilter,)
    filterset_fields = ['id', 'first_name', 'last_name', 'email', "username"]

    def get_object(self):
        queryset = self.filter_queryset(self.get_queryset())
        # make sure to catch 404's below
        obj = []

        return obj
 
 
    def post(self, request, *args, **kwargs):
        username = request.data.get("username", None)
        first_name = request.data.get("first_name", None)
        last_name = request.data.get("last_name", None)
        email = request.data.get("email", None)
        
        User.objects.create(username=username, 
                            first_name=first_name, 
                            last_name=last_name, 
                            email=email)
        return self.list(request, *args, **kwargs)

