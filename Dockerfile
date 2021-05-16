FROM node:12

WORKDIR /app

COPY ./dist /app

RUN npm i --only=prod

EXPOSE 9001

CMD [ "npm", "start" ]