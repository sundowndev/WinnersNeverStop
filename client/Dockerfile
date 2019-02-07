FROM node:8

ENV API_URL="https://api.winnersnevers.top/"

WORKDIR /usr/app/client

COPY ./package*.json ./

RUN npm install

COPY . .

CMD ["npm run build"]