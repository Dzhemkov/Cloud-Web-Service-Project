FROM node:18
# create app directory
WORKDIR /src
# copy package.json and package-lock.json
COPY package*.json /src/
# install npm dependencies
ENV NODE_ENV=production
RUN npm ci --only=production
# copy app source code
COPY . /src
# expose port 8080
EXPOSE 8080
# start the app
CMD ["node", "server.js"]
