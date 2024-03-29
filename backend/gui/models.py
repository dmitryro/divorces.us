import re
import html2text
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill
from ckeditor.fields import RichTextField
from django.db import models
from taggit.managers import TaggableManager
from utils.models import Logger
from datetime import datetime

h = html2text.HTML2Text()

class MileStone(models.Model):
    title = models.CharField(max_length=140, blank=True, null=True)
    year = models.CharField(max_length=140, blank=True, null=True)
    body = models.CharField(max_length=1500, blank=True, null=True)

    class Meta:
        verbose_name = 'Milestone'
        verbose_name_plural = 'Milestones'

    def __str__(self):
        return self.title


class Service(models.Model):
   title = models.CharField(max_length=150, blank=True)
   statement = models.CharField(max_length=450, blank=True)
   time_published = models.DateTimeField(default=datetime.now, blank=True)
   description =  RichTextField()
   service = models.ImageField(upload_to='servces')
   nick = models.CharField(max_length=150, blank=True)
   service_thumbnail = ImageSpecField(source='service',
                                     processors=[ResizeToFill(100, 50)],
                                     format='JPEG',
                                     options={'quality': 60})
   tags = TaggableManager()

   class Meta:
        verbose_name = 'Service'
        verbose_name_plural = 'Services'

   def __str__(self):
        return self.title

   def get_absolute_url(self):
        return "/services/%s/" % self.nick


class State(models.Model):
    state = models.CharField(max_length=150, blank=True)
    code = models.CharField(max_length=10, blank=True)
    tags = TaggableManager()

    class Meta:
        verbose_name = 'State'
        verbose_name_plural = 'States'

    def __str__(self):
        return self.state

    def get_absolute_url(self):
        return "/states/%s/" % self.code


class Country(models.Model):
    name = models.CharField(max_length=150, blank=True)
    code = models.CharField(max_length=10, blank=True)
    tags = TaggableManager()

    class Meta:
        verbose_name = 'Country'
        verbose_name_plural = 'Countries'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return "/countries/%s/" % self.code


class Slide(models.Model):
    time_published = models.DateTimeField(default=datetime.now, blank=True)
    title =  models.CharField(max_length=150, blank=True)
    text =  models.CharField(max_length=450, blank=True)
    link = models.CharField(max_length=350, blank=True)
    action = models.CharField(max_length=500, blank=True)
    slide = models.ImageField(upload_to='slides')
    tags = TaggableManager()
    slide_thumbnail = ImageSpecField(source='slide',
                                     processors=[ResizeToFill(100, 50)],
                                     format='JPEG',
                                     options={'quality': 60})

    class Meta:
        verbose_name = 'Slide'
        verbose_name_plural = 'Slide'

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return "/slides/%s/" % self.title



class LogoColor(models.Model):
    color = models.CharField(max_length=150, blank=True, null=True)
    code = models.CharField(max_length=150, blank=True)

    class Meta:
        verbose_name = 'Logo Color'
        verbose_name_plural = 'Logo Colors'

    def __str__(self):
        return self.color



class Logo(models.Model):
   color = models.ForeignKey(LogoColor,related_name='logo_color', blank=True, 
                             null=True, on_delete=models.CASCADE)
   logo = models.ImageField(upload_to='logos')
   logo_thumbnail = ImageSpecField(source='logo',
                                   processors=[ResizeToFill(100, 50)],
                                   format='PNG',
                                   options={'quality': 60})
   width = models.IntegerField(default=0,blank=True,null=True)
   height = models.IntegerField(default=0,blank=True,null=True)

   class Meta:
        verbose_name = 'Logo'
        verbose_name_plural = 'Logos'


class ContactInfo(models.Model):
   time_published = models.DateTimeField(default=datetime.now, blank=True)
   statement = models.CharField(max_length=450, blank=True)
   address1 = models.CharField(max_length=150, blank=True)
   address2 = models.CharField(max_length=150, blank=True)
   city = models.CharField(max_length=150, blank=True)
   state = models.CharField(max_length=150, blank=True)
   zipcode = models.CharField(max_length=150, blank=True)
   tollfree = models.CharField(max_length=150, blank=True)
   phone = models.CharField(max_length=150, blank=True)
   fax = models.CharField(max_length=150, blank=True)
   email = models.CharField(max_length=150, blank=True)
   header = models.CharField(max_length=150, blank=True)
   tags = TaggableManager()

   class Meta:
        verbose_name = 'Contanct Info'
        verbose_name_plural = 'Contact Info'


class Article(models.Model):
   title = models.CharField(max_length=150, blank=True)
   time_published = models.DateTimeField(auto_now_add=True)
   body = models.TextField(blank=True,null=True)
   tags = TaggableManager()

   class Meta:
        verbose_name = 'Article'
        verbose_name_plural = 'Articles'

   def __str__(self):
        return self.title

   def get_absolute_url(self):
        return "/articles/%s/" % self.title
  
   @property
   def teaser(self):
       return self.body[0:600] 



class AskTemplate(models.Model):
   ask_intro = models.TextField(null=True, blank=True)
   agreement = models.TextField(null=True, blank=True)
   disclaimer =  models.TextField(null=True, blank=True)
   
   class Meta:
        verbose_name = 'Ask Question Template'
        verbose_name_plural = 'Ask Question Templates'


class AskQuestion(models.Model):
   time_published = models.DateTimeField(default=datetime.now, blank=True)
   full_name = models.CharField(max_length=400,null=True,blank=True)
   email = models.CharField(max_length=400,null=True,blank=True)   
   subject = models.CharField(max_length=400,null=True,blank=True)
   message = models.TextField(null=True,blank=True)
   is_agreed = models.NullBooleanField(default=False,blank=True,null=True)
   agreement = models.TextField(null=True,blank=True)

   class Meta:
        verbose_name = 'Ask Question'
        verbose_name_plural = 'Ask Step Five'   

class ConsultationType(models.Model):
   title = models.CharField(max_length=400, null=True, blank=True)
   description = models.TextField(null=True, blank=True)
   price = models.FloatField(default=0, null=True, blank=True)

   class Meta:
        verbose_name = 'Consultation Type'
        verbose_name_plural = 'Consultation Types'

   def __str__(self):
        return self.title


class ConsultTemplate(models.Model):
   consult_intro = models.TextField(null=True, blank=True)
   agreement = models.TextField(null=True, blank=True)
   disclaimer =  models.TextField(null=True, blank=True)
   consultation_type =  models.ForeignKey(ConsultationType, blank=True,
                                          null=True, on_delete=models.CASCADE)  
 
   class Meta:
        verbose_name = 'Online Consultation Template'
        verbose_name_plural = 'Online Consultation  Templates'

   @property
   def paragraphs(self):
       return re.findall("<section>(.*?)</section>", self.agreement.replace('\n','').replace('\r',''))

   @property
   def intro_paragraphs(self):
       return re.findall("<section>(.*?)</section>", self.consult_intro.replace('\n','').replace('\r',''))


class QualifyQuestionnaire(models.Model):
   time_published = models.DateTimeField(default=datetime.now, blank=True)
   state =  models.ForeignKey(State, blank=True,
                              null=True, on_delete=models.CASCADE)
   does_qualify = models.NullBooleanField(default=False,blank=True,null=True)
   date_avaluated = models.DateTimeField(auto_now_add=True)
   action_taken = models.NullBooleanField(default=False,blank=True,null=True)
   tags = TaggableManager()

   class Meta:
        verbose_name = 'Qualify Questionnaire'
        verbose_name_plural = 'Qualify Questionnaires'



class QualifyQuestion(models.Model):
   time_published = models.DateTimeField(default=datetime.now, blank=True)
   html_id = models.CharField(max_length=400,null=True,blank=True)
   questionnaire = models.ForeignKey(QualifyQuestionnaire, blank=True, 
                                     null=True, on_delete=models.CASCADE) 
   question = models.CharField(max_length=550, null=True, blank=True)
   answer = models.NullBooleanField(default=False,blank=True,null=True)
   tags = TaggableManager()

   class Meta:
        verbose_name = 'Question'
        verbose_name_plural = 'Questions'



class FAQ(models.Model):
   time_published = models.DateTimeField(default=datetime.now, blank=True)
   question = models.CharField(max_length=1550, blank=True)
   note = models.CharField(max_length=1550, blank=True)
   answer = RichTextField()
   nick = models.CharField(max_length=150, blank=True)
   tags = TaggableManager()

   class Meta:
        verbose_name = 'Frequently Asked Question'
        verbose_name_plural = 'Frequently Asked Questions'

   def __str__(self):
        return self.question

   def get_absolute_url(self):
        return "/faq/%s/" % self.nick


class MileStone(models.Model):
    title = models.CharField(max_length=140, blank=True, null=True)
    year = models.CharField(max_length=140, blank=True, null=True)
    body = models.CharField(max_length=1500, blank=True, null=True)

    class Meta:
        verbose_name = 'Milestone'
        verbose_name_plural = 'Milestones'

    def __str__(self):
        return self.title


class Advantage(models.Model):
    title = models.CharField(max_length=140, blank=True, null=True)
    section_one = models.CharField(max_length=2500, blank=True) 
    section_two = models.CharField(max_length=2500, blank=True) 
    section_three = models.CharField(max_length=2500, blank=True)

    class Meta:
        verbose_name = 'Advantage'
        verbose_name_plural = 'Advantage'

    def __str__(self):
        return self.title


class AdvantageLink(models.Model):
    advantage = models.ForeignKey(Advantage, blank=False, null=False, 
                                  on_delete=models.CASCADE)
    title = models.CharField(max_length=140, blank=True, null=True)
    link = models.CharField(max_length=1500, blank=True, null=True)

    class Meta:
        verbose_name = 'Advantage Link'
        verbose_name_plural = 'Advantage Links'

    def __str__(self):
        return self.title


class FrontBlock(models.Model):
    title = models.CharField(max_length=500, blank=True, null=True)
    link = models.CharField(max_length=1500, blank=True, null=True)
    body = models.CharField(max_length=2500, blank=True) 


    class Meta:
        verbose_name = 'Front Block'
        verbose_name_plural = 'Front Blocks'

    def __str__(self):
        return self.title

