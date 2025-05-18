Hora da Régua
Sobre o Projeto
Hora da Régua é um sistema de agendamento para barbearias, permitindo que clientes marquem horários e barbeiros gerenciem suas agendas. O projeto é dividido em dois módulos principais: um backend (API REST com NestJS, Sequelize, SQLite, e autenticação JWT) e um frontend (interface web com React, Vite, TypeScript, e Tailwind CSS).
Pré-requisitos

Node.js: v20.19.2
npm: v10.x.x (ou superior)
Git: Para clonar o repositório
PowerShell: Para executar comandos (Windows)
Docker Desktop: Para rodar com Docker Compose

Instalação

Clone o repositório:
git clone https://github.com/seralgnod/horadaregua.git
cd G:\Users\Donglares\Documents\PROJETO\HoraDaRegua

Crie o arquivo de configuração do RabbitMQ:
echo deprecated_features.permit.management_metrics_collection = true > rabbitmq.conf

Crie os arquivos .env com base nos exemplos:

Para o backend:Copy-Item backend\.env.example backend\.env

Edite backend\.env para definir JWT_SECRET e REDIS_URL.
Para o frontend:Copy-Item frontend\.env.example frontend\.env

Construa e inicie os contêineres:
docker-compose build --no-cache
docker-compose up

Executando o Projeto

Backend: Acesse http://localhost:3000 (retorna "Hello World!" por padrão).
Frontend: Acesse http://localhost:5173.
RabbitMQ: Acesse http://localhost:15672 (usuário: guest, senha: guest).
Redis: Teste a conectividade:docker run -it --rm --network horadaregua_horadaregua-network redis redis-cli -h redis -p 6379 -a CR7nohoradaregua ping

Saída esperada: PONG.

CI/CD

O projeto usa GitHub Actions para CI/CD.
A pipeline (ci.yml) executa build, linting (ESLint) e testes para backend e frontend em pull requests e pushes na branch main.
Verifique o status na aba Actions do repositório: https://github.com/seralgnod/horadaregua/actions.

Estrutura do Projeto
HoraDaRegua/
├── .github/workflows/       # Workflows do GitHub Actions
├── backend/                # API REST com NestJS, Sequelize, SQLite, e JWT
├── frontend/               # Interface web com Vite, React, TypeScript, e Tailwind CSS
├── rabbitmq.conf           # Configuração do RabbitMQ
├── docker-compose.yml      # Orquestração dos serviços
├── .gitignore              # Ignora node_modules, .env, database.sqlite, etc.
├── README.md               # Visão geral do projeto

Linting e Formatação

Ambos os projetos usam ESLint e Prettier para garantir código consistente:
Backend: npm run lint, npm run format
Frontend: npm run lint, npm run format

Desenvolvimento

Backend: Utilize NestJS com Sequelize (SQLite) para criar modelos, controladores e serviços. Consulte backend/README.md.
Frontend: Desenvolva componentes React para interação com a API. Consulte frontend/README.md.

Contribuição

Crie uma branch para sua feature:git checkout -b feature/nome-da-feature

Faça commit das mudanças:git commit -m "Descrição da mudança"

Envie para o repositório remoto:git push origin feature/nome-da-feature

Abra um Pull Request.

Licença
Este projeto é licenciado sob a licença ISC.
Contato

Autor: Esdras Donglares
Email: esdras.donglares@gmail.com