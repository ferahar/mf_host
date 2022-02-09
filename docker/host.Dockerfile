FROM node:14-alpine AS build

# build args
ARG PORT
#ARG NODE_ENV
ARG AG_GRID_KEY

# environment vars
ENV PORT=$PORT
#ENV NODE_ENV=$NODE_ENV
ENV AG_GRID_KEY=$AG_GRID_KEY

# enable for node 17
#ENV NODE_OPTIONS=--openssl-legacy-provider

# build app
WORKDIR /app
COPY ./host/package*.json .
RUN npm install --legacy-peer-deps
COPY ./host/src ./src
COPY ./host/webpack ./webpack
COPY ./host/tsconfig.json ./tsconfig.json
COPY ./shared/types ./types
RUN npm run build:prod

# start APP
FROM node:14-alpine AS web-service
WORKDIR /app
COPY --from=build ./app/dist ./dist
COPY --from=build ./app/node_modules ./node_modules
COPY ./host/server.js .
CMD node server.js
