FROM node:18-alpine

WORKDIR /server

COPY package.json package-lock.json* ./

RUN npm ci

COPY . .

USER node

CMD ["npm", "run", "start:dev"]