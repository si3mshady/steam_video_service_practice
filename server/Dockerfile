FROM node:16
WORKDIR /streaming

COPY ./package.json ./package.json


COPY *mp4 .
COPY server.js server.js

RUN yarn install 

EXPOSE 888

HEALTHCHECK CMD curl --fail http://localhost:888/health || exit 1     


CMD ["node","server.js"]
