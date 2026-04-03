FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
ARG CACHEBUST=1
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/dist ./dist
COPY astro.config.mjs ./
EXPOSE 4321
CMD ["node_modules/.bin/astro", "preview", "--host", "0.0.0.0", "--port", "4321"]
