Hora da Régua
Hora da Régua é um sistema de agendamento para barbearias, permitindo que clientes marquem horários e barbeiros gerenciem suas agendas. O projeto é dividido em dois módulos principais: um backend (API REST com NestJS, Sequelize, SQLite, e autenticação JWT) e um frontend (interface web com React, Vite, TypeScript, e Tailwind CSS).
Estrutura do Projeto
HoraDaRegua/
├── backend/        # API REST com NestJS, Sequelize, SQLite, e JWT
├── frontend/       # Interface web com Vite, React, TypeScript, e Tailwind CSS
├── .gitignore      # Ignora node_modules, .env, database.sqlite, etc.
├── README.md       # Visão geral do projeto

Pré-requisitos

Node.js: v20.19.2
npm: v10.x.x (ou superior)
Git: Para clonar o repositório
PowerShell: Para executar comandos (Windows)

Instalação

Clone o repositório:
git clone https://github.com/seralgnod/horadaregua.git
cd HoraDaRegua

Instale as dependências do backend e frontend (veja as seções específicas nos respectivos README.md).

Executando o Projeto
Backend

Navegue até backend/ e siga as instruções em backend/README.md.
Inicie o servidor:cd backend
npm run start:dev

A API estará disponível em http://localhost:3000.

Frontend

Navegue até frontend/ e siga as instruções em frontend/README.md.
Inicie o servidor de desenvolvimento:cd frontend
npm run dev

A interface estará disponível em http://localhost:5173.

Linting e Formatação
Ambos os projetos usam ESLint e Prettier para garantir código consistente:

Backend: npm run lint, npm run format
Frontend: npm run lint, npm run format

Consulte os READMEs de cada módulo para detalhes.
Desenvolvimento

Backend: Utilize NestJS com Sequelize (SQLite) para criar modelos, controladores e serviços. Consulte backend/README.md para detalhes.
Frontend: Desenvolva componentes React para interação com a API. Consulte frontend/README.md para detalhes.

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