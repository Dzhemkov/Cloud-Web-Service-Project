FROM node:18

WORKDIR /src

# Copy package files and install dependencies
COPY package*.json ./
ENV NODE_ENV=production
RUN npm ci --only=production

# Copy app source
COPY server.js ./
COPY config/ ./config/
COPY .env ./

# Expose port
EXPOSE 8080

# Start app
CMD ["node", "server.js"]
