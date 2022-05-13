FROM node:13-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install pm2 -g
RUN npm install --production

COPY . .

EXPOSE 3000
CMD [ "node", "index.js", "pm2-runtime", "pm2.proccess.json" ]