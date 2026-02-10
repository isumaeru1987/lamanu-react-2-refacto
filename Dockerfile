FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Port par défaut de Vite
EXPOSE 5173

# Commande pour Vite
CMD ["npm", "run", "dev", "--", "--host"]