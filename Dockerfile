FROM node:16.17.1

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY / .

COPY client /app/client
WORKDIR /app/client
RUN npm install --production && npm run build

WORKDIR /app

CMD ["node", "server/index.js"]
