from django.db import models



class Logger(models.Model):
    log = models.CharField(max_length=3500,blank=True,null=True)
    time = models.DateTimeField(auto_now_add=True)


class TaskLog(models.Model):
    username = models.CharField(max_length=128,blank=True,null=True)
    job = models.CharField(max_length=128,blank=True,null=True)
    show_id = models.IntegerField(blank=True,null=True)
    is_complete = models.BooleanField(default=False) 
    user_id =  models.IntegerField(blank=True,null=True)
    session_key = models.CharField(max_length=200,blank=True,null=True)

    class Meta:
        verbose_name = 'TaskLog'
        verbose_name_plural = 'TaskLogs'
