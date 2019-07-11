# Base image
FROM alpine

# Download and install dependencies
RUN apk add --update redis
RUN apk add --update gcc

# Command when starting a container
CMD ["redis-server"]