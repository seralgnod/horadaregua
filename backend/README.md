Backend - Hora da Régua
O backend do Hora da Régua é uma API REST construída com NestJS, utilizando Sequelize com SQLite para persistência de dados, autenticação com JWT e Passport, e validação com TypeScript. Configurado com ESLint e Prettier para linting e formatação.
Tecnologias

NestJS: 10.4.16
Sequelize: 6.37.7
SQLite: 5.1.7
JWT: Autenticação com @nestjs/jwt@10.2.0
Passport: @nestjs/passport@10.0.3
TypeScript: 5.6.3
Node.js: 20.19.2

Pré-requisitos

Node.js: v20.19.2
npm: v10.x.x (ou superior)
PowerShell: Para executar comandos

Instalação

Navegue até o diretório do backend:
cd backend

Instale as dependências:
npm install

Configure o arquivo .env:
echo JWT_SECRET=sua-chave-secreta-muito-longa-e-unica-1234567890 > .env

Executando o Backend

Inicie o servidor em modo de desenvolvimento:
npm run start:dev

A API estará disponível em http://localhost:3000.

Verifique se o banco de dados SQLite (database.sqlite) foi criado:
dir

Scripts Disponíveis

Build: npm run build
Formatar código: npm run format
Iniciar em produção: npm run start:prod
Executar testes: npm run test
Lint: npm run lint
Lint com correção: npm run lint:fix

Estrutura do Código
backend/
├── src/
│   ├── auth/           # Módulo de autenticação (JWT, Passport)
│   ├── app.module.ts   # Módulo principal
│   ├── app.controller.ts # Controlador inicial
│   ├── main.ts         # Entrada da aplicação
├── database.sqlite      # Banco de dados SQLite
├── .env                # Variáveis de ambiente
├── package.json        # Dependências e scripts
├── README.md           # Este arquivo

Endpoints

GET /: Retorna "Hello World!" (teste inicial).
POST /auth/login: Autentica um usuário e retorna um token JWT (em desenvolvimento).
Mais endpoints serão adicionados conforme o desenvolvimento avança.

Desenvolvimento

Criar Modelos Sequelize:Configure modelos diretamente no código com @nestjs/sequelize (ex.: User com username e password).Exemplo em src/app.module.ts:
SequelizeModule.forRoot({
  dialect: 'sqlite',
  storage: './database.sqlite',
  autoLoadModels: true,
  synchronize: true,
})

Adicionar Endpoints:Crie novos módulos com:
nest g module nome-do-modulo

Testes:Escreva testes em src/**/*.spec.ts e execute com:
npm run test

Linting e Formatação

ESLint: Configurado com @typescript-eslint para TypeScript.
Prettier: Garante formatação consistente.npm run lint
npm run lint:fix
npm run format

Solução de Problemas

Erro SequelizeConnectionError:Verifique se src/app.module.ts está configurado para SQLite:
SequelizeModule.forRoot({
  dialect: 'sqlite',
  storage: './database.sqlite',
  autoLoadModels: true,
  synchronize: true,
})

Dependências incorretas:Limpe o ambiente e reinstale:
npm cache clean --force
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install

Contato

Autor: Esdras Donglares
Email: esdras.donglares@gmail.com