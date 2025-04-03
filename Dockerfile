# Base image
FROM node:20 AS builder

# Create and set the working directory
WORKDIR /app

# Copy all project files
COPY . .

# Build Storybook
RUN yarn install
RUN yarn build-storybook

FROM nginx:alpine
# Copy the built Storybook from the builder stage
COPY --from=builder /app/storybook-static /usr/share/nginx/html
# Copy the custome nginx configuration file
COPY default.conf /etc/nginx/conf.d/default.conf
# Expose port 80
EXPOSE 8080
# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
