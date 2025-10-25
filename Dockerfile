# image from Docker Hub – has Node + Chromium + Puppeteer
FROM ghcr.io/puppeteer/puppeteer:21.3.6

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# The command to run the application
CMD ["node", "src/app.js"]