FROM node:8

RUN echo "test"

RUN npm install
RUN cp .env.example .env
RUN npm i -g @adonisjs/cli
RUN adonis key:generate
RUN adonis migration:refresh --seed

EXPOSE 3000