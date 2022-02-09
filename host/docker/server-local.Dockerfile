FROM node:14-alpine AS web-build

WORKDIR /app
COPY ./dev-api .
RUN npm install json-server --save-dev
CMD node json-server.js

