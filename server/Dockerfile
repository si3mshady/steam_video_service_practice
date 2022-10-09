FROM node:16
WORKDIR /streaming

COPY ./package.json ./package.json


COPY drone_footage.mp4 drone_footage.mp4
COPY server.js server.js

RUN yarn install

EXPOSE 888

HEALTHCHECK CMD curl --fail http://localhost:888/health || exit 1


CMD ["node","server.js"]
