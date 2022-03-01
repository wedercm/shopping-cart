# Base image
FROM nginx:alpine
# Install dependencies
RUN apk add apache2-utils

# Set our working directory inside the image
WORKDIR /app

# Copy Nginx config template
COPY nginx/nginx.conf /tmp/docker.nginx

# substitute variable references in the Nginx config template for real values from the environment
# put the final config in its place
RUN envsubst '/app' < /tmp/docker.nginx > /etc/nginx/conf.d/default.conf

EXPOSE 80
# Use the "exec" form of CMD so Nginx shuts down gracefully on SIGTERM (i.e. `docker stop`)
CMD [ "nginx", "-g", "daemon off;" ]
