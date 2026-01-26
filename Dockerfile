# Dockerfile CORREGIDO
FROM node:20-alpine AS builder

WORKDIR /app

# 1. Copiar archivos de dependencias
COPY package*.json ./
COPY package-lock.json ./

# 2. Instalar TODAS las dependencias (incluye devDependencies)
RUN npm ci  # ← QUITAR --only=production

# 3. Copiar todo el código
COPY . .

# 4. Construir aplicación
RUN npm run build

# 5. Stage 2: Nginx
FROM nginx:stable-alpine

# 6. Configuración para React Router
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 7. Copiar build
COPY --from=builder /app/dist /usr/share/nginx/html

# 8. Salud check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]