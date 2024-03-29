"""
Django settings for backend.project.

Generated by 'django-admin startproject' using Django 2.0.9.

For more information on this file, see
https://docs.djangoproject.com/en/2.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.0/ref/settings/
"""

import os
from datetime import timedelta
# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'x(t_lz%3r(*bota0#0)794aus9ri*qm4#60c+mb@%l$*@iptxg'
SITE_ID = 1
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['localhost', '0.0.0.0',]

CORS_ORIGIN_ALLOW_ALL = True

#CORS_ORIGIN_WHITELIST = (
#    'http://0.0.0.0:80',
#    'http://0.0.0.0:8000',
#    'http://0.0.0.0:8080',
#    'http://localhost:80'
#    'http://localhost:8000',
#    'http://localhost:8080',
#)

# Application definition

INSTALLED_APPS = [
    'grappelli',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.redirects',
    'django.contrib.sitemaps',
    'django.contrib.sites',
    'django_filters',
    'django_jinja',
    'django_jinja2',
    'django_social_share',
    'jinja2',
    'admin_tools',
    'admin_tools.menu',
    'admin_tools.dashboard',
    'adminsortable',
    'filters',
    'ckeditor',
    'ckeditor_widget',
    'corsheaders',
    'imagekit',
    'rest_framework',
    'rest_framework_swagger',
    'rest_framework.authtoken',
    'rest_framework_jwt',
    'rest_framework_simplejwt',
    'rest_registration',
    'social_django',
    'social',
    'social.apps.django_app.default',
    'social_core',
    'tagging',
    'taggit',
    'wymeditor',
    'metaprop',
    'users',
    'gui',
    'signup',
    'utils',
    'consult',
    'payments',
    'messaging',
    'blog',
    'services',
    'chat',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.BrokenLinkEmailsMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.contrib.redirects.middleware.RedirectFallbackMiddleware',
    'social.apps.django_app.middleware.SocialAuthExceptionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'gui.middleware.CORSMiddleware',
]

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'backend', 'templates')],
        'APP_DIRS': False,
        'OPTIONS': {
            'loaders': [
                'admin_tools.template_loaders.Loader', 
                'django.template.loaders.filesystem.Loader',
                'django.template.loaders.app_directories.Loader',
                'django_jinja.loaders.FileSystemLoader',
                'django_jinja.loaders.AppLoader',
             ],
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'postgres',
        'USER': 'postgres',
        'PASSWORD': 'postgres',
        'HOST': 'db',
        'PORT': 5432,
    }
}

# Password validation
# https://docs.djangoproject.com/en/2.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.0/howto/static-files/

STATIC_URL = '/static/'
MEDIA_URL = '/media/'
#STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static'),]

## Serving the STATIC FILES
# as declared in NginX conf, it must match /opt/services/djangoapp/static/
STATIC_ROOT = os.path.join(os.path.dirname(os.path.dirname(BASE_DIR)), 'services/backend/static')

# do the same for media files, it must match /opt/services/djangoapp/media/
MEDIA_ROOT = '/media'

CHANNEL_LAYERS = {
  'default': {
      'BACKEND': 'channels_redis.core.RedisChannelLayer',
      'CONFIG': {
        'hosts': [('0.0.0.0', 6379)],
      },
  },
}

AUTH_USER_MODEL = 'users.User'

JWT_AUTH = {
    'JWT_EXPIRATION_DELTA': timedelta(seconds=259200),  # 3 days 
    'JWT_REFRESH_EXPIRATION_DELTA': timedelta(seconds=259200),  # 3 days
    'JWT_AUTH_COOKIE': 'JWT',
    'JWT_ALLOW_REFRESH': True,
}

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ),
    'DEFAULT_PARSER_CLASSES': [
        'rest_framework.parsers.JSONParser',
    ],
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.AllowAny',
        #'rest_framework.permissions.IsAuthenticated'
    ),
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend'], 
    'TEST_REQUEST_DEFAULT_FORMAT': 'json'
}

REST_REGISTRATION = {
    'REGISTER_VERIFICATION_URL': 'https://frontend-host/verify-user/',
    'RESET_PASSWORD_VERIFICATION_URL': 'https://frontend-host/reset-password/',
    'REGISTER_EMAIL_VERIFICATION_URL': 'https://frontend-host/verify-email/',
    'VERIFICATION_FROM_EMAIL': 'no-reply@example.com',
}

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend', 
)

STRIPE_SECRET_KEY = 'key'
PINAX_STRIPE_SECRET_KEY = 'key'
TAGGIT_CASE_INSENSITIVE = True
GRAPPELLI_ADMIN_TITLE = 'Divorces US'
GRAPPELLI_CLEAN_INPUT_TYPES = True
FIXTURE_DIRS = 'fixtures'
