FROM mhart/alpine-node:12
WORKDIR /dist
COPY package*.json ./
COPY . /dist
RUN chmod +x /dist
RUN yarn
EXPOSE 8000
