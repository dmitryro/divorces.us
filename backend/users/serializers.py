from rest_framework import serializers
from .models import User
from .models import AboutUs
from .models import StateProvince
from .models import Contact
from .models import TeamMember
from .models import Address
from .models import Profile


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    email = email = serializers.EmailField() 

    def create(self, validated_data):

        user = User.objects.create(**validated_data)
        user.set_password(validated_data['password'])
        user.save()

        return user

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', "password",)


class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUs
        fields = ('id', 'title', 'subtitle', 'body',)

class StateProvinceSerializer(serializers.ModelSerializer):
    class Meta:
        model = StateProvince
        fields = ('id','name','abbreviation')   

class AddressSerializer(serializers.ModelSerializer):
    state = StateProvinceSerializer(many=False,read_only=True)
    class Meta:
        model = Address
        fields = ('id','state','address1','address2','city','postal_zip','country')

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('id','email')

class TeamMemberSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    class Meta:
        model = TeamMember
        fields = ('id', 'user', 'username', 'first_name', 'last_name', 'title', 'bio', 'avatar')


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False,read_only=True)
    class Meta:
       model = Profile
       fields = ('id', 'user', 'first_name', 'last_name', 'email', 
                 'profile_image_path', 'is_activated', 'is_new',
                 'is_confirmed', 'is_cleared', 'date_joined',)
