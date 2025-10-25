# image from Docker Hub – has Node + Chromium + Puppeteer
FROM ghcr.io/puppeteer/puppeteer:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies
USER root
RUN npm install --only=production
USER pptruser
# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# The command to run the application
CMD ["node", "src/app.js"]