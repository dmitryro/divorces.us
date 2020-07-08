from django.forms import ModelForm, Textarea
from .models import Service
from .models import Package


class ServiceForm(ModelForm):
    class Meta:
        model = Service
        fields = '__all__' #


class ServiceForm(ModelForm):
    class Meta:
        model = Service
        fields = '__all__' #


class PackageForm(ModelForm):
    class Meta:
        model = Package
        fields = '__all__' 
