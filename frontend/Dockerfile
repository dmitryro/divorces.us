FROM mhart/alpine-node
WORKDIR /dist
COPY package*.json ./

COPY . /dist

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


RUN \
  apk update                     && \
  apk add bash                   && \
  apk add --no-cache python3 python3-dev && \ 
  npm install -G yarn typescript && \
  npm install
EXPOSE 8000
