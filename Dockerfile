# Usamos una versión estable y moderna de Node
FROM node:20-alpine

# Creamos el directorio de trabajo dentro del contenedor
WORKDIR /src

# Copiamos los archivos de configuración de paquetes primero (para aprovechar la caché de Docker)
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código del proyecto
COPY . .

# Exponemos el puerto por defecto de Nuxt (3000) y el de Vite (24678) para el Hot Reload
EXPOSE 3000
EXPOSE 24678

# Comando por defecto para arrancar Nuxt en modo desarrollo
CMD ["npm", "run", "dev"]