 FROM node:9.11.1-alpine

  WORKDIR /code

  RUN npm i nodemon@latest -g
  COPY package.json /code/package.json
  RUN npm install
  RUN mv /code/node_modules /node_modules

  COPY . /code
  CMD ["npm", "start"]