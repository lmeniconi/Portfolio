FROM node:14-alpine

WORKDIR /app
EXPOSE ${NUXT_PORT}
ENV NUXT_HOST 0.0.0.0
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build
CMD npm start
