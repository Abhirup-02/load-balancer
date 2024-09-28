ARG NODE_VERSION=18

FROM node:${NODE_VERSION}-alpine

WORKDIR /app/server

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
