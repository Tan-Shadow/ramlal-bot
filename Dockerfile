FROM node:16-alpine

ENV PORT = 3000

RUN mkdir -p /home/app

COPY . /home/app

WORKDIR /home/app

RUN npm install

CMD ["npm", "start"]