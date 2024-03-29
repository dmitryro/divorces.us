from django.contrib import admin

# Django imports

from ckeditor.widgets import CKEditorWidget
from wymeditor.models import WYMEditorField
from wymeditor.widgets import AdminWYMEditorArea
from django import forms
from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserChangeForm
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from imagekit.admin import AdminThumbnail
from .models import User
from .models import Profile
from .models import Testimonial
from .models import Contact
from .models import TeamMember
from .models import AboutUs
from .models import Advantage
from .models import AdvantageLink
from .models import StateProvince
from .forms import ProfileForm
from .forms import AboutUsModelForm
from .forms import TeamMemberModelForm
from .forms import TeamMemberForm
from .forms import AdvantageModelForm
from .forms import TestimonialModelForm

class TestimonialAdmin(admin.ModelAdmin):
    bio = forms.CharField( widget=forms.Textarea )
    fieldsets = [
      ('Body', {'classes': ('full-width',), 'fields': ('username',
                'first_name','last_name','user','phone','email', 'link_title',
                'link', 'body','avatar')})
    ]
    list_display = ('__str__', 'username', 'first_name', 'last_name', 'user', 'phone', 
                    'email', 'link_title', 'link', 'body', 'admin_thumbnail')
    admin_thumbnail = AdminThumbnail(image_field='avatar_thumbnail')
    search_fields = ('username', 'first_name', 'last_name', 'user', 'phone',
                     'email', 'link_title', 'link', 'body')
    form = TestimonialModelForm

    class Meta:
         verbose_name = 'Testimonial'
         verbose_name_plural = 'Testimonials'


class ContactAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'id', 'name', 'phone', 'email', 'message')
    search_fields = ('id', 'name', 'phone', 'email', 'message')

    class Meta:
         verbose_name = 'Contact'
         verbose_name_plural = 'Contacts'


########################################
#  Register Profile with Django Admin  #
########################################

class ProfileAdmin(admin.ModelAdmin):
    fieldsets = ((None, {'fields': ['username',
                                    'email', 
                                    'user',
                                    'bio',
                                    'is_cleared',
                                    'is_activated',
                                    'is_facebook_signup_used',
                                    'is_google_signup_used',
                                    'is_linkedin_signup_used',
                                    'is_username_customized',
                                    'is_twitter_signup_used',
                                    'is_new',
                                    'first_name','last_name',
                                    'phone','address',
                                    'profile_image_path']}),)

    form = ProfileForm
    list_display = ('id','username','user','email','first_name','last_name','date_joined','is_new','phone')
    list_editable = ('username','user','email','first_name','last_name','is_new','phone',)
    search_fields = ('username', 'first_name', 'last_name','email','phone',)

    formfield_overrides = {
        WYMEditorField: {'widget': AdminWYMEditorArea},
    }

    class Meta:
         verbose_name = 'User Profile'
         verbose_name_plural = 'User Profiles'


class CustomUserAdmin(UserAdmin):
    def __init__(self, *args, **kwargs):
        super(UserAdmin,self).__init__(*args, **kwargs)
        UserAdmin.list_display = list(UserAdmin.list_display) + ['id','date_joined', 'last_login','is_active']

    # Function to count objects of each user from another Model (where user is
    # FK)
    def some_function(self, obj):
        return obj.another_model_set.count()


class AboutUsAdmin(admin.ModelAdmin):
    body = forms.CharField( widget=forms.Textarea )
    fieldsets = [
      ('Body', {'classes': ('full-width',), 'fields': ('title','subtitle','body','avatar')})
    ]
    list_display = ('__str__','title','subtitle','body','admin_thumbnail')
    admin_thumbnail = AdminThumbnail(image_field='avatar_thumbnail')
    form = AboutUsModelForm


class TeamMemberAdmin(admin.ModelAdmin):
    bio = forms.CharField( widget=forms.Textarea )
    fieldsets = [
      ('Body', {'classes': ('full-width',), 'fields': ('username','first_name','last_name', 'user','is_associate','is_partner','phone','email','title','bio','avatar')})
    ]
    list_display = ('__str__','first_name','last_name', 'user','is_partner','is_associate','phone','email','title','bio', 'admin_thumbnail')
    admin_thumbnail = AdminThumbnail(image_field='avatar_thumbnail')
    search_fields = ('username', 'first_name', 'last_name','email','phone','title')
    form = TeamMemberForm


class AdvantageAdmin(admin.ModelAdmin):
    form = AdvantageModelForm
    fieldsets = [
      ('Body', {'classes': ('full-width',), 'fields': ('title','section_one','section_two','section_three')})
    ]
    list_display = ('__str__','title','section_one','section_two','section_three')
    list_editable = ('title',)


class StateProvinceAdmin(admin.ModelAdmin):

    fieldsets = ((None, {'fields': ['abbreviation','name',]}),)
    list_display = ('id', 'abbreviation', 'name',)
    list_editable = ('abbreviation','name',)


class AdvantageLinkAdmin(admin.ModelAdmin):

    fieldsets = ((None, {'fields': ['advantage','title','link']}),)
    list_display = ('__str__','advantage','title','link')
    list_editable = ('advantage','title','link')


admin.site.register(StateProvince, StateProvinceAdmin)
admin.site.register(Advantage, AdvantageAdmin)
admin.site.register(AdvantageLink, AdvantageLinkAdmin)
admin.site.register(TeamMember, TeamMemberAdmin)

#admin.site.register(ProfileStats,ProfileStatsAdmin)
admin.site.register(Contact, ContactAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(AboutUs, AboutUsAdmin)
admin.site.register(Testimonial, TestimonialAdmin)
# Now register the new UserAdmin...
# ... and, since we're not using Django's built-in permissions,
# unregister the Group model from admin.
admin.site.register(User, CustomUserAdmin)
admin.site.unregister(Group)
