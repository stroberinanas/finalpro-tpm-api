# Gunakan Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh source code backend
COPY . .

# Expose port sesuai aplikasi kamu, misal 5000
EXPOSE 5000

# Perintah menjalankan aplikasi
CMD ["npm", "start"]
