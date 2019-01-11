FROM node:carbon-alpine

ADD . /code
WORKDIR /code
RUN npm install
RUN npm run build
CMD ["npm", "start"]
