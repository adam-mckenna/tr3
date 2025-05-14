# Step 1: Build the app
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build the production version of the app
RUN npm run build

# Step 2: Serve the built app
FROM node:18 AS runner

# Install the `serve` package globally
RUN npm install -g serve

# Copy built files from the previous stage
COPY --from=builder /app/dist /app/dist

# Set working directory
WORKDIR /app

# Expose the port
EXPOSE 4173

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "4173"]