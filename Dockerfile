FROM node:22-alpine
WORKDIR /app

# Install dependencies (layer cached unless package.json changes)
COPY package*.json ./
RUN npm ci

# Copy source and build fresh every time
COPY . .
# Force fresh vite build by removing any stale cache
RUN rm -rf node_modules/.cache && npm run build

EXPOSE 4321
CMD ["npm", "run", "start"]
