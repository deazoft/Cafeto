FROM node:latest
EXPOSE 3000 9229
RUN mkdir -p /server
WORKDIR /server
COPY server/package.json /server
COPY server/package-lock.json /server
RUN npm install -quiet
COPY server/src/. /server/src
CMD [ "npm", "start"]


