FROM node:16-slim

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --modules-folder ../node_modules \
  && rm -rf node_modules./cache

EXPOSE 3000

CMD [ "yarn", "start" ]
