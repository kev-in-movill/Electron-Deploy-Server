FROM node:10-slim

MAINTAINER MOVILL


RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

RUN npm install -g pm2
RUN npm install -g yarn
RUN npm install -g node-pre-gyp
RUN npm install -g node-gyp

USER node

COPY package*.json ./
RUN npm install

COPY --chown=node:node . .

EXPOSE 6060:6060

ENV NODE_ENV production

CMD ["yarn", "prod"]