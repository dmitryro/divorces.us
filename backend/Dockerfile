# start from an official image
FROM python:3.9.0b3-alpine
# arbitrary location choice: you can change the directory
# install psycopg2 dependencies
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
RUN apk update \
    && apk add --no-cache bash postgresql-dev gcc python3-dev gcc python3-dev jpeg-dev zlib-dev musl-dev openssl-dev libffi-dev build-base
RUN pip install --upgrade pip
RUN mkdir -p /opt/services/backend
WORKDIR /opt/services/backend

# install our dependencies
# we use --system flag because we don't need an extra virtualenv
COPY . .
COPY ./media /media
COPY ./services_files /services_files
COPY . /opt/services/backend
RUN pip install -r requirements.txt \
    && python manage.py collectstatic \
    && ln -s /opt/services/backend/static /static 
EXPOSE 8080
