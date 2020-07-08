from django.db import models
from django.forms import ModelForm, Textarea
from django import forms
from django.forms.widgets import Input
from users.models import User
from .models import Message

class MessageForm(ModelForm):
    body = forms.CharField()
    class Meta:
        model = Message
        fields = '__all__' #
