FROM node:14-alpine AS web-build
#FROM node:alpine AS web-build

# build args
ARG PORT
ARG API_URL
#ARG NODE_ENV
ARG AG_GRID_KEY

# environment vars
ENV PORT=$PORT
ENV API_URL=$API_URL
#ENV NODE_ENV=$NODE_ENV
ENV AG_GRID_KEY=$AG_GRID_KEY

# enable for node 17
#ENV NODE_OPTIONS=--openssl-legacy-provider

# build app
WORKDIR /app
COPY ./package.json .
COPY server.js .
RUN npm install --legacy-peer-deps
COPY ./src ./src
COPY ./webpack ./webpack
COPY ./tsconfig.json ./tsconfig.json
RUN npm run build:prod

# start APP
FROM node:14-alpine AS web-service
#FROM node:alpine AS web-service
WORKDIR /app
COPY --from=web-build ./app/dist ./dist
COPY --from=web-build ./app/node_modules ./node_modules
COPY server.js .
CMD node server.js
