FROM node:14
WORKDIR app
COPY package*.json ./
RUN npm install
RUN npm i -g ts-node
RUN npm i -g typescript
COPY . .
EXPOSE 8080