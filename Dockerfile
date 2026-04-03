FROM node:22-alpine AS builder
WORKDIR /app

# Install deps (cached if package.json unchanged)
COPY package*.json ./
RUN npm ci

# Build arg to bust cache when needed  
ARG CACHEBUST=1

# Copy source and build fresh
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:80/ > /dev/null 2>&1 || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
