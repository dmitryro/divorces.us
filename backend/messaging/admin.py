from django.contrib import admin

from .models import Message
from .models import NotificationType
from .models import Notification
from .models import MessagingSettings
from .forms import MessageForm

class MessageAdmin(admin.ModelAdmin):
    list_editable = ('title', 'body', 'is_answered', 'is_seen',)

    fieldsets = [
      ('Body', {'classes': ('full-width',), 'fields': ('is_seen',
                'is_answered', 'title', 'body',  
                'sender', 'receiver')})
    ]
    list_display = ('__str__', 'is_seen',
                    'is_answered', 'title', 'body',
                    'time_sent', 'sender', 'receiver')


    search_fields = ('is_seen',
                    'is_answered', 'title', 'body',
                    'time_sent', 'sender', 'receiver')
    form = MessageForm

    class Meta:
         verbose_name = 'Message'
         verbose_name_plural = 'Messages'


class NotificationTypeAdmin(admin.ModelAdmin):
    list_editable = ('notification_type', 'notification_code',)

    fieldsets = [
      ('Body', {'classes': ('full-width',), 'fields': ('notification_type',
                'notification_code',)})
    ]
    list_display = ('__str__', 'notification_type', 'notification_code',)


    search_fields = ('notification_type', 'notification_code',)

    class Meta:
         verbose_name = 'Notification Type'
         verbose_name_plural = 'Notification Types'


class NotificationAdmin(admin.ModelAdmin):
    list_editable = ('is_received', 'is_sent','message','notification_type','user',)
    list_display = ('__str__', 'is_received', 'is_sent','message','notification_type', 'user', 'time_sent',)
    fieldsets = [('Body', {'classes': ('full-width',), 'fields': ('is_received', 'is_sent','message','notification_type','user',)})]
    search_fields = ( 'is_received', 'is_sent','message','notification_type', 'user', 'time_sent',)

    class Meta:
         verbose_name = 'Notification'
         verbose_name_plural = 'Notifications'


admin.site.register(Notification, NotificationAdmin)
admin.site.register(NotificationType, NotificationTypeAdmin)
admin.site.register(Message, MessageAdmin)
