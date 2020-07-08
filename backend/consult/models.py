from datetime import datetime
from enum import Enum
from users.models import User
from django.db import models
from payments.models import Address
from payments.models import CustomerPayment
from gui.models import Country


class Children(models.Model):
    number = models.CharField(max_length=150, blank=True, null=True)
    value = models.CharField(max_length=150, blank=True, null=True)
    numeric = models.IntegerField(default=0, blank=True, null=True) 

    class Meta:
        verbose_name = 'Children'
        verbose_name_plural = 'Children'


class MaritalStatus(models.Model):
    status = models.CharField(max_length=200, blank=True, null=True)
    code = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        verbose_name = 'Marital Status'
        verbose_name_plural = 'Marital Statuses'

class StatusChoice(models.Model):
    status = models.CharField(max_length=200, blank=True, null=True)
    code = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        verbose_name = 'Status Choice'
        verbose_name_plural = 'Status Choices'


class Consultation(models.Model):
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.CASCADE)
    time_placed = models.DateTimeField(default=datetime.now, blank=True)
    status = models.ForeignKey(StatusChoice, blank=True, null=True, 
                               on_delete=models.CASCADE)
    payment = models.ForeignKey(CustomerPayment, blank=True, null=True, 
                                on_delete=models.CASCADE)
    amount = models.FloatField(default=0.0, blank=True, null=True)
    marital_status = models.ForeignKey(MaritalStatus, blank=True,
                                       null=True, on_delete=models.CASCADE)
    number_of_children = models.ForeignKey(Children, blank=True, 
                                           null=True, on_delete=models.CASCADE)
    invoice = models.CharField(max_length=200, blank=True, null=True)
    billing_full_name = models.CharField(max_length=200, blank=True, null=True)
    billing_phone = models.CharField(max_length=200, blank=True, null=True)
    individual_full_name = models.CharField(max_length=200, blank=True, null=True)
    individual_email = models.CharField(max_length=200, blank=True, null=True)
    individual_phone = models.CharField(max_length=200, blank=True, null=True)
    purpose = models.TextField(blank=True, null=True) 
    billing_address = models.ForeignKey(Address, related_name='billing_address', 
                                        blank=True, null=True, on_delete=models.CASCADE)
    country_of_citizenship = models.ForeignKey(Country, blank=True, null=True,
                                               on_delete=models.CASCADE)
    individual_address = models.ForeignKey(Address, related_name='individual_address', 
                                           blank=True, null=True, on_delete=models.CASCADE)
    use_billing = models.NullBooleanField(default=True, blank=True, null=True)  
    date_of_birth = models.DateTimeField(blank=True, null=True) 
    time_responded = models.DateTimeField(blank=True, null=True)

    class Meta:
        verbose_name = 'Online Consultation'
        verbose_name_plural = 'Online Consultations'
