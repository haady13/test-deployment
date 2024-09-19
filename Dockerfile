FROM node:16.17.1

WORKDIR /app

COPY package*.json ./
COPY client/package*.json ./client/
COPY client/index.html ./client/public/index.html

RUN npm install --prefix ./client

RUN npm install

COPY . .
 
RUN npm run build --prefix ./client

EXPOSE 3000

CMD ["node", "index.js"]
