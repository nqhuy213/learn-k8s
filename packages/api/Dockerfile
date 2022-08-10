FROM node:14-alpine as builder
ENV NODE_OPTIONS="max_old_space_size=2048"

WORKDIR /app/api

COPY ./package.json ./
COPY tsconfig.json ./

RUN yarn

COPY ./src ./src

RUN yarn build

CMD [ "yarn", "start" ]