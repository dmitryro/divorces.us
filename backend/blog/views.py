# Django Imports
import sys
import django.contrib.auth as auth
from django.contrib.auth import authenticate
from django.contrib.auth import login
from django.core.exceptions import ObjectDoesNotExist
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.conf import settings
from django.db.models import Q,Min,Max
from django.shortcuts import render
from rest_framework import viewsets
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.conf import settings

from rest_framework import filters
from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes, permission_classes
from rest_framework import generics


# Restless Endpoints 

from utils.models import Logger

from .models import Category
from .models import Post
from .models import Comment
from users.models import Profile
from .serializers import CategorySerializer
from .serializers import PostSerializer
from .serializers import CommentSerializer

import logging
logger = logging.getLogger(__name__)

@api_view(['POST', 'GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([AllowAny,])
def publish_view(request):
    return Response({'message':'success'})    

class PostViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing post instances.
    """
    serializer_class = PostSerializer
    queryset = Post.objects.all()


class CategoryViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing post instances.
    """
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class CommentViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing post instances.
    """
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()


############################################
## Add comment to a post                  ##
## Extends: restless Endpoint             ##
## METHOD:  GET, POST                     ##
## Type:    Endpoint View (JSON)          ##
############################################

@api_view(['POST', 'GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([AllowAny,])
def GetCommentsView(request):
    if request.method == 'GET':
        user = request.user
        post_id = request.params.get('post_id','')

        try:
            post = Post.objects.get(id=int(post_id))
            comments = Comment.objects.filter(post=post)
            serializer = CommentSerializer(comments,many=True)
            return Response({"comments":serializer.data})

        except Exception as e:
            logger.error('Internal Server Error: %s', request.path,
                exc_info=sys.exc_info(),
                extra={
                    'status_code': 500,
                    'request': request
                }
            )

            return Response({'message':'error','error':str(e)})

    elif request.method == 'POST':
        user = request.user
        post_id = request.data['post_id']

        try:
            post = Post.objects.get(id=int(post_id))
            comments = Comment.objects.filter(post=post)
            serializer = CommentSerializer(comments,many=True)
            return Response({"comments":serializer.data})

        except Exception as e:
            logger.error('Internal Server Error: %s', request.path,
                exc_info=sys.exc_info(),
                extra={
                    'status_code': 500,
                    'request': request
                }
            )

            return Response({'message':'error','error':str(e)})


@api_view(['POST', 'GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([AllowAny,])
def SaveCommentView(request):

    @csrf_exempt
    def post(self, request):
        post_id =  request.data['post_id']
        comment_id = request.data['comment_id']
        body = request.data['body']
          
        comment = Comment.objects.get(id=int(comment_id))
        comment.body = body
        comment.save()

        comments = Comment.objects.filter(post_id=int(post_id))
        serializer = CommentSerializer(comments,many=True)
            
        return Response({"comments":serializer.data})

    @csrf_exempt
    def get(self, request):
        post_id =  request.params.get('post_id','')
        comment_id = request.params.get('comment_id','')
        body = request.params.get('body','')

        comment = Comment.objects.get(id=int(comment_id))
        comment.body = body
        comment.save()

        comments = Comment.objects.filter(post_id=int(post_id))
        serializer = CommentSerializer(comments,many=True)

        return Response({"comments":serializer.data})


        
############################################
## Add comment to a post                  ##
## Extends: restless Endpoint             ##
## METHOD:  GET, POST                     ##
## Type:    Endpoint View (JSON)          ##
############################################

@api_view(['POST', 'GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([AllowAny,])
def AddCommentView(request):

    if request.method == 'GET':
        user = request.user
        post_id = request.params.get('post_id','')
        body = request.params.get('body','')

        try:
            try:
               post = Post.objects.get(id=int(post_id))
               post.total_comments=post.total_comments+1
               post.save()
            except Exception as e:
               return {'message':'error','error':str(e)}
            anonymous_avatar = 'http://divorcesus.com/static/images/user_no_avatar.png'

            if not user.is_authenticated():

                 comment = Comment.objects.create(title='',
                                                  body=body,
                                                  username='Anonymous',
                                                  is_anonymous=True,
                                                  post=post,
                                                  avatar=anonymous_avatar,
                                                  is_flagged=False)
            else:

                 profile = Profile.objects.get(id=user.id)

                 comment = Comment.objects.create(title='',
                                                  body=body,
                                                  author=user,
                                                  username=user.username,
                                                  is_anonymous=False,
                                                  post=post,
                                                  avatar=profile.profile_image_path,
                                                  is_flagged=False)

            comments = Comment.objects.filter(post_id=int(post_id))
            serializer = CommentSerializer(comments,many=True)
            return Response({"comments":serializer.data})

        except Exception as e:
            return Response({'message':'error','error':str(e)})
   

    elif request.method == 'POST':
        user = request.user
        post_id = request.data['post_id']
        body = request.data['body']

        try:
            try:
               post = Post.objects.get(id=int(post_id))
               post.total_comments=post.total_comments+1
               post.save()
            except Exception as e:
               return Response({'message':'error','error':str(e)})

            if not user.is_authenticated():

                 comment = Comment.objects.create(title='',
                                                  body=body,
                                                  username='Anonymous',
                                                  is_anonymous=True,
                                                  post=post,
                                                  avatar=anonymous_avatar,
                                                  is_flagged=False)
            else:

                 profile = Profile.objects.get(id=user.id)

                 comment = Comment.objects.create(title='',
                                                  body=body,
                                                  author=user,
                                                  username=user.username,
                                                  is_anonymous=False,
                                                  post=post,
                                                  avatar=profile.profile_image_path,
                                                  is_flagged=False)


            comments = Comment.objects.filter(post_id=int(post_id))
            serializer = CommentSerializer(comments,many=True)
            return Response({"comments":serializer.data})

        except Exception as e:
            return Response({'message':'error','error':str(e)})
                  
 
############################################
## Add comment to a post                  ##
## Extends: restless Endpoint             ##
## METHOD:  GET, POST                     ##
## Type:    Endpoint View (JSON)          ##
############################################

@api_view(['POST', 'GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([AllowAny,])
def DeleteCommentView(request):

    if request.method == 'GET':
        user = request.user
        comment_id = request.params.get('comment_id','')
        post_id = request.params.get('post_id','')

        try:
            comment = Comment.objects.get(id=int(comment_id))
            comment.delete()

            comments = Comment.objects.filter(post_id=int(post_id))
            serializer = CommentSerializer(comments,many=True)
            return Response({"comments":serializer.data})

        except Exception as e:
            return Response({'message':'error','error':str(e)})
 

    elif request.method == 'POST':
        comment_id = request.data['comment_id']
        post_id = request.data['post_id']

        try:
            comment = Comment.objects.get(id=int(comment_id))
            comment.delete()

            comments = Comment.objects.filter(post_id=int(post_id))
            serializer = CommentSerializer(comments,many=True)
            return Response({"comments":serializer.data})

        except Exception as e:
            return Response({'message':'error','error':str(e)})


############################################
## Add comment to a post                  ##
## Extends: restless Endpoint             ##
## METHOD:  GET, POST                     ##
## Type:    Endpoint View (JSON)          ##
############################################
@api_view(['POST', 'GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([AllowAny,])
def EditCommentView(request):

    if request.method == 'GET':
        user = request.user
        return Response({"message":"success"})
 
    elif request.method == 'POST':
        user = request.user
        return Response({"message": "success"})



############################################
## Add a New Post view                    ##
## Extends: restless Endpoint             ##
## METHOD:  GET, POST                     ##
## Type:    Endpoint View (JSON)          ##
############################################

@api_view(['POST', 'GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([AllowAny,])
def AddPostView(request):

    if request.method == 'GET':
        user = request.user
        title = request.params.get("title","")
        body = request.params.get("body","")  
        category_id = request.params.get("category_id","")

        try:

            category = Category.objects.get(id=int(category_id))
            post = Post.objects.create(title=title,body=body,
                                       category=category,author=user)
            posts = Post.objects.filter(author=user)
            serializer = PostSerializer(posts,many=True)
            return Response(serializer.data)

        except Exception as e:
            return Response({'message':'error '+str(e)})


    elif request.method == 'POST':
        user = request.user
        title = request.data["title"]
        body = request.data["body"]
        category_id = request.data["category_id"]
        link = request.data["link"]
 
        try:

            category = Category.objects.get(id=int(category_id))
            post = Post.objects.create(title=title,body=body,category=category,
                                       author=user,link=link,is_published=True)
            posts = Post.objects.filter(author=user)
            serializer = PostSerializer(posts,many=True)
            return Response(serializer.data)

        except Exception as e:
            log = Logger(log=str(e))
            log.save()
            return Response({'message':'error  '+str(e)})     


############################################
## Add a New Post view                    ##
## Extends: restless Endpoint             ##
## METHOD:  GET, POST                     ##
## Type:    Endpoint View (JSON)          ##
############################################

@api_view(['POST', 'GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([AllowAny,])
def SavePostView(request):

    if request.method == 'GET':
        user = request.user
        post_id = request.params.get("post_id","")
        title = request.params.get("title","")
        body = request.params.get("body","")
        category_id = request.params.get("category_id","")
        link = request.params.get("link","")

        try:

            category = Category.objects.get(id=int(category_id))
            post = Post.objects.get(id=int(post_id))
            post.category=category
            post.title=title
            post.body=body
            post.link=link
            post.save()   
            posts = Post.objects.filter(author=user)
            serializer = PostSerializer(posts,many=True)
            return Response(serializer.data)

        except Exception as e:
            return Response({'message':'error '+str(e)})

    elif request.method == 'POST':
        user = request.user
        post_id = request.data["post_id"]
        title = request.data["title"]
        body = request.data["body"]
        category_id = request.data["category_id"]
        link = request.data["link"]

        try:

            category = Category.objects.get(id=int(category_id))
            post = Post.objects.get(id=int(post_id))
            post.category=category
            post.title=title
            post.body=body
            post.link=link
            post.save()
            posts = Post.objects.filter(author=user)
            serializer = PostSerializer(posts,many=True)
            return Response(serializer.data)

        except Exception as e:
            log = Logger(log=str(e))
            log.save()
            return Response({'message':'error  '+str(e)})


############################################
## Add a New Post view                    ##
## Extends: restless Endpoint             ##
## METHOD:  GET, POST                     ##
## Type:    Endpoint View (JSON)          ##
############################################

@api_view(['POST', 'GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([AllowAny,])
def GetAllPostsView(request):

    if request.method == 'GET':
        user = request.user

        try:

            posts = Post.objects.all().order_by('-time_published')
      
            for post in posts:
               comments = Comment.objects.filter(post=post)
               post.total_comments = len(comments)
               post.save()
      
            serializer = PostSerializer(posts,many=True)
            return Response(serializer.data)

        except Exception as e:
            return Response({'message':'error '+str(e)})


    elif request.method == 'POST':
        user = request.user

        try:

            posts = Post.objects.all().order_by('-time_published')

            for post in posts:
               comments = Comment.objects.filter(post=post)
               post.total_comments = len(comments)
               post.save()

            serializer = PostSerializer(posts,many=True)
            return Response(serializer.data)

        except Exception as e:
            log = Logger(log=str(e))
            log.save()
            return Response({'message':'error  '+str(e)})




############################################
## Add a New Post view                    ##
## Extends: restless Endpoint             ##
## METHOD:  GET, POST                     ##
## Type:    Endpoint View (JSON)          ##
############################################

@api_view(['POST', 'GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([AllowAny,])
def GetPostsView(request):

    if request.method == 'GET':
        user = request.user

        try:

            posts = Post.objects.filter(author=user)
            serializer = PostSerializer(posts,many=True)
            return Response(serializer.data)

        except Exception as e:
            return Response({'message':'error '+str(e)})

    elif request.method == 'POST':
        user = request.user

        try:

            posts = Post.objects.filter(author=user)
            serializer = PostSerializer(posts,many=True)
            return Response(serializer.data)

        except Exception as e:
            log = Logger(log=str(e))
            log.save()
            return Response({'message':'error  '+str(e)})


############################################
## Delete a Post view                     ##
## Extends: restless Endpoint             ##
## METHOD:  GET, POST                     ##
## Type:    Endpoint View (JSON)          ##
############################################

def DeletePostView(request):

    if request.method == 'GET':
        user = request.user
        post_id = request.params.get("post_id","")

        try:
            post = Post.objects.get(id=int(post_id))
            post.delete()
            posts = Post.objects.filter(author=user)
            serializer = PostSerializer(posts,many=True)
            return Response(serializer.data)
        except Exception as e:
            log = Logger(log=str(e))
            log.save()
            return Response({'message':'error  '+str(e)})

        
    elif request.method == 'POST':
        user = request.user
        post_id = request.data["post_id"]


        try:
            post = Post.objects.get(id=int(post_id))
            post.delete()
            posts = Post.objects.filter(author=user)
            serializer = PostSerializer(posts,many=True)
            return Response(serializer.data)
        except Exception as e:
            log = Logger(log=str(e))
            log.save()
            return Response({'message':'error  '+str(e)})


############################################
## Archive a Post view                    ##
## Extends: restless Endpoint             ##
## METHOD:  GET, POST                     ##
## Type:    Endpoint View (JSON)          ##
############################################

@api_view(['POST', 'GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([AllowAny,])
def ArchivePostView(request):
 
    if request.method == 'GET':
        user = request.user
        post_id = request.params.get("post_id","")
        return Response({"message": "success"})
    elif request.method == 'POST':
        user = request.user
        post_id = request.data["post_id"]
        return Response({"message": "success"})


############################################
## Delete a Post view                     ##
## Extends: restless Endpoint             ##
## METHOD:  GET, POST                     ##
## Type:    Endpoint View (JSON)          ##
############################################

@api_view(['POST', 'GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([AllowAny,])
def ReadPostView(request):

    if request.method == 'GET':
        user = request.user
        post_id = request.params.get("post_id","")

        try:
            post = Post.objects.get(id=int(post_id))
            serializer = PostSerializer(post,many=False)
            return Response(serializer.data)

        except Exception as e:
            log = Logger(log=str(e))
            log.save()
            logger.error('Internal Server Error: %s', request.path,
                exc_info=sys.exc_info(),
                extra={
                    'status_code': 500,
                    'request': request
                }
            )

            return Response({'message':'error  '+str(e)})



    elif request.method == 'POST':
        user = request.user
        post_id = request.data["post_id"]


        try:
            post = Post.objects.get(id=int(post_id))
            serializer = PostSerializer(post,many=False)
            return Response(serializer.data)

        except Exception as e:
            log = Logger(log=str(e))
            log.save()
            logger.error('Internal Server Error: %s', request.path,
                exc_info=sys.exc_info(),
                extra={
                    'status_code': 500,
                    'request': request
                }
            )

            return Response({'message':'error  '+str(e)})
