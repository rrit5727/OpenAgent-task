# Dockerfile for backend

# Use the official Node.js image as a base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port (if needed)
EXPOSE 5000

# Start the application
CMD ["npm", "start"]