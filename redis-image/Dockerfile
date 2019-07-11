# Base image
FROM alpine

# Download and install dependencies
RUN apk add --update redis

# Command when starting a container
CMD ["redis-server"]