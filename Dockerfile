FROM node:carbon
WORKDIR /nihao.there/server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD [ "npm", "start" ]