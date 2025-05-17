Frontend - Hora da Régua
O frontend do Hora da Régua é uma interface web construída com Vite, React, TypeScript, e Tailwind CSS, projetada para interagir com a API REST do backend, permitindo que clientes agendem horários e barbeiros gerenciem suas agendas. Configurado com ESLint e Prettier para linting e formatação.
Tecnologias

React: 18.3.1
TypeScript: 5.6.3
Vite: 6.3.5
Tailwind CSS: 3.4.14
Node.js: 20.19.2
npm: 10.x.x (ou superior)

Pré-requisitos

Node.js: v20.19.2
npm: v10.x.x (ou superior)
PowerShell: Para executar comandos
Backend rodando em http://localhost:3000 (consulte backend/README.md)

Instalação

Navegue até o diretório do frontend:
cd frontend

Instale as dependências:
npm install

Configure as variáveis de ambiente (se necessário, crie um arquivo .env):
echo VITE_API_URL=http://localhost:3000 > .env

Executando o Frontend

Inicie o servidor de desenvolvimento:
npm run dev

A interface estará disponível em http://localhost:5173.

Scripts Disponíveis

Iniciar: npm run dev
Build: npm run build
Lint: npm run lint
Lint com correção: npm run lint:fix
Formatar código: npm run format
Preview: npm run preview

Estrutura do Código
frontend/
├── src/
│   ├── components/     # Componentes React reutilizáveis
│   ├── pages/          # Páginas da aplicação (ex.: Login, Agendamento)
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Entrada da aplicação
├── .env                # Variáveis de ambiente
├── package.json        # Dependências e scripts
├── vite.config.ts      # Configuração do Vite
├── tailwind.config.js  # Configuração do Tailwind CSS
├── README.md           # Este arquivo

Integração com o Backend
O frontend se comunica com a API em http://localhost:3000. Principais endpoints (em desenvolvimento):

POST /auth/login: Autentica o usuário e retorna um token JWT.
Mais endpoints serão consumidos conforme implementados no backend.

Desenvolvimento

Criar Componentes:Adicione componentes em src/components/ ou páginas em src/pages/.

Chamar a API:Use fetch ou uma biblioteca como Axios (instale com npm install axios):
const login = async (username: string, password: string) => {
  return fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
};

Estilização:Use Tailwind CSS em classes diretamente nos componentes.

Linting e Formatação:
npm run lint
npm run lint:fix
npm run format

Solução de Problemas

Erro de conexão com a API:

Verifique se o backend está rodando (http://localhost:3000).
Confirme a variável VITE_API_URL no .env.

Erro de linting:

Execute npm run lint:fix ou corrija manualmente.
Verifique o arquivo .prettierrc para consistência.

Dependências incorretas:Limpe o ambiente e reinstale:
npm cache clean --force
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install

Problemas com Vite 6.3.5:Reverter para uma versão estável, se necessário:
npm install vite@5.4.8

Contato

Autor: Esdras Donglares
Email: esdras.donglares@gmail.com