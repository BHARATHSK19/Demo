# ------------------------------------------------------------------------------
# OJIX Production Container - Hardened & DPDP 2023 Compliant
# ------------------------------------------------------------------------------

FROM node:22-alpine AS runner

# Set working directory
WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV PORT=3000

# Install dependencies required for health checks
RUN apk add --no-cache wget

# Copy package manifests first for efficient layer caching
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev && npm cache clean --force

# Copy all application assets and code
COPY . .

# Ensure data directory exists with correct permissions for non-root user
RUN mkdir -p /app/data && chown -R node:node /app

# Switch to non-root user for security hardening
USER node

# Health check probe
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

EXPOSE 3000

CMD ["node", "server.js"]
