# Stage 1: Build the Astro static site
FROM node:22.12-alpine AS builder

WORKDIR /app

# Copy essential files for installing dependencies (better caching)
COPY package.json ./
# If they have a lockfile, we use it for a deterministic build
COPY package-lock.json ./
# Or bun.lock? They have both, but we use npm here
# COPY bun.lock ./

# Install dependencies including devDependencies (needed for build)
RUN npm ci

# Copy all source files
COPY . .

# Run the build (creates /app/dist)
RUN npm run build

# Stage 2: Serve the static site using Nginx
FROM nginx:alpine

# Copy the custom Nginx configuration if it exists
# Or use a standard one for SPA/Static
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built site from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port (Nginx default is 80)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
