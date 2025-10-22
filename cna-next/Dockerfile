# Step 1: Build the application
FROM node:20 AS builder
RUN apt-get update

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire application code
COPY . .

# Generate the prisma client
RUN npx prisma generate

# Build the Next.js application
RUN npm run build

# Step 2: Serve the application
FROM node:20 AS runner

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=builder /app ./

# Install only production dependencies
RUN npm install --only=production

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
