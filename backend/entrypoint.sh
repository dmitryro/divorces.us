#!/bin/bash
exec python manage.py shell < ./scripts/createsuperuser.py
# Collect static files
#echo "Collect static files"
#python manage.py collectstatic --noinput

## Apply database migrations
#echo "Apply database migrations"
#python manage.py migrate

