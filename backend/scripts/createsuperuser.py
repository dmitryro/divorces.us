import os
from users.models import User
username = os.environ.get('DJANGO_ADMIN_USER', 'root') 
user = User.objects.filter(username=username)

if not user:
    password = os.environ.get('DJANGO_ADMIN_PASSWORD',"testit123")
    email = os.environ.get('DJANGO_ADMIN_EMAIL', "info@info.com")
    user = User.objects.create(username='root', email='dmitryro@gmail.com')
    user.set_password(password)
    user.is_superuser = True
    user.is_staff = True
    user.save()
