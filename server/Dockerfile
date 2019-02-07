FROM node:8

WORKDIR /home/node/app

COPY . /home/node/app

RUN npm install
RUN npm i -g @adonisjs/cli

RUN cp .env.example .env
RUN adonis key:generate

# RUN adonis migration:refresh --seed

CMD ["node", "server.js"]

EXPOSE 3000