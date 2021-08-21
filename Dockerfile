FROM node:16-alpine

ENV NODE_ENV=production
# set your bot token, while running the container 

RUN mkdir -p /home/app

COPY . /home/app

WORKDIR /home/app

RUN npm install --production

CMD ["npm","start"]