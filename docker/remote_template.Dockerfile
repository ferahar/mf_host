FROM node:14-alpine AS build

# environment vars
ARG PORT
ENV PORT=$PORT

# build app
WORKDIR /app
COPY ./remote_template/package*.json .
RUN npm install --legacy-peer-deps
COPY ./remote_template/src ./src
COPY ./remote_template/webpack ./webpack
COPY ./shared/types ./types
COPY ./remote_template/tsconfig.json ./tsconfig.json
RUN npm run build:prod

# start APP
FROM node:14-alpine AS web-service
WORKDIR /app
COPY --from=build ./app/dist ./dist
COPY --from=build ./app/node_modules ./node_modules
COPY ./remote_template/server.js .
CMD node server.js


