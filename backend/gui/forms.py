from django.forms import ModelForm, Textarea
import django.forms as forms
import django.forms.widgets
from django.forms.widgets import Input
from django import forms
from users.models import User
from .models import Service
from .models import AskTemplate
from .models import ConsultTemplate
from .models import ConsultationType
from .models import Slide
from .models import ContactInfo
from .models import FAQ
from .models import Article
from .models import FrontBlock
from .models import MileStone


class ServiceForm(ModelForm):
    class Meta:
        model = Service
        fields = '__all__' #


class FrontBlockForm(ModelForm):
    class Meta:
        model = FrontBlock
        fields = '__all__' #


class ConsultationTypeForm(ModelForm):
    class Meta:
        model = ConsultationType
        fields = '__all__' #


class ConsultTemplateForm(ModelForm):
    class Meta:
        model = ConsultTemplate
        fields = '__all__' #


class AskTemplateForm(ModelForm):
    class Meta:
        model = AskTemplate
        fields = '__all__' #


class SlideForm(ModelForm):
    class Meta:
        model = Slide
        fields = '__all__' #


class ArticleForm(ModelForm):
    class Meta:
        model = Article
        fields = '__all__' #


class FAQForm(ModelForm):
    class Meta:
        model = FAQ
        fields = '__all__' #


class ContactInfoForm(ModelForm):
    class Meta:
        model = ContactInfo
        fields = '__all__' #


class MileStoneForm(ModelForm):
    class Meta:
        model = MileStone
        fields = '__all__' #


class MileStoneModelForm(ModelForm):
    class Meta:
        model = MileStone
        fields = '__all__' #
