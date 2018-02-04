FROM node:carbon
WORKDIR /nihao.there
COPY package*.json ./
RUN npm install -g bower 
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "yarn", "start" ]