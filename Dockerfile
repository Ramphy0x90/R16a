# Multi-stage build for Angular application
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (include dev dependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Accept build configuration argument
ARG NG_BUILD_CONFIGURATION=production

# Build the application
RUN npm run build -- --configuration=${NG_BUILD_CONFIGURATION}

# Production stage with nginx
FROM nginx:alpine

COPY --from=build /app/dist/r16a/browser /usr/share/nginx/html

# Copy nginx configuration (Traefik terminates TLS; Nginx serves HTTP)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
