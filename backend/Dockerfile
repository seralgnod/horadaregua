# Usar imagem base do Node.js
FROM node:20.19.2

# Instalar dependências do sistema para sqlite3
RUN apt-get update && apt-get install -y \
    libsqlite3-dev \
    && apt-get clean

# Definir diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Limpar cache do npm e instalar dependências com logs detalhados
RUN npm cache clean --force && \
    npm install --build-from-source=sqlite3 --verbose > npm-install.log 2>&1 || (cat npm-install.log && exit 1)

# Copiar o restante do código
COPY . .

# Compilar o projeto
RUN npm run build

# Expor a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação em modo produção com log de erros
CMD ["sh", "-c", "npm run start:prod 2>&1 | tee -a /app/startup.log"]