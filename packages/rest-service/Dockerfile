FROM node:14 as builder
WORKDIR /scheduler/rest-service
COPY ./package.json ./
COPY tsconfig.json ./
RUN yarn
COPY ./src ./src
COPY ./config ./config
RUN yarn build
CMD [ "yarn", "start" ]