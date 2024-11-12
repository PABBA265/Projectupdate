# Use official Node.js image
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port for application if required (for UI tests)
EXPOSE 3000

# Start the tests (adjust the command based on your needs)
CMD ["npm", "run", "test"]
