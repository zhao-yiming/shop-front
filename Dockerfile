# Utilisez l'image officielle de Node.js comme base
FROM node:14

# Créez le répertoire de travail de l'application
WORKDIR /usr/src/app

# Copiez le package.json et le package-lock.json pour installer les dépendances
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Exposez le port sur lequel l'application sera accessible
EXPOSE 3000

# Commande par défaut pour lancer l'application
CMD ["npm", "start"]