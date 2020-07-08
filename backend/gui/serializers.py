from rest_framework import serializers
from blog.models import Post
from .models import Service
from .models import FrontBlock
from .models import Country
from .models import Slide
from .models import AskTemplate
from .models import ConsultationType
from .models import State
from .models import MileStone
from .models import Article


class ArticleSerializer(serializers.ModelSerializer):
   class Meta:
      model = Article
      fields = ('id', 'title', 'teaser', 'body', 'time_published',)


class MileStoneSerializer(serializers.ModelSerializer):
   class Meta:
      model = MileStone
      fields = ('id', 'title', 'year', 'body',)


class ServiceSerializer(serializers.ModelSerializer):
   class Meta:
      model = Service
      fields = ('id', 'title', 'statement', 'description', 'service',)


class FrontBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = ('id', 'title', 'link', 'body',)


class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = ('id', 'state', 'code',)


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('id', 'name', 'code',)


class AskTemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = AskTemplate
        fields = ('id', 'ask_intro', 'agreement', 'disclaimer',)


class ConsultationTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConsultationType
        fields = ('id', 'title', 'description', 'price',)


class SlideSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slide
        fields = ('id', 'title', 'text', 'link', 'slide', 'action', 'time_published',)



class GlobalSearchSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ('id', 'author', 'title', 'time_published', 
                  'category', 'body', 'link', 'image', 'total_comments')

    def to_native(self, obj):
        if isinstance(obj, Post): 
            serializer = PostSerializer(obj)
        elif isinstance(obj, Slide):
            serializer = SlideSerializer(obj)
        else:
            raise Exception("Neither a Snippet nor User instance!")
        return serializer.data
