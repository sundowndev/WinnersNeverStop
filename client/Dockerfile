FROM node:8

WORKDIR /usr/app/client

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build