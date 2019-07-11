# Base image
FROM node:current-alpine

# Set custom working directory. All the following commands will be run from this dir.
WORKDIR /app

# Install dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Set startup command
CMD ["npm", "start"]