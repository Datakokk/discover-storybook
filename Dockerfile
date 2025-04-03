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
# Expose port 80
EXPOSE 8080
# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
