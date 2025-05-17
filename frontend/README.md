Frontend - Hora da Régua
O frontend do Hora da Régua é uma interface web construída com React, projetada para interagir com a API REST do backend, permitindo que clientes agendem horários e barbeiros gerenciem suas agendas.
Tecnologias

React: 18.x.x
TypeScript: 5.x.x
Axios: Para chamadas à API
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
echo REACT_APP_API_URL=http://localhost:3000 > .env



Executando o Frontend

Inicie o servidor de desenvolvimento:
npm start


A interface estará disponível em http://localhost:3001.


Scripts Disponíveis

Iniciar: npm start
Build: npm run build
Testes: npm test
Ejetar: npm run eject (se necessário)

Estrutura do Código
frontend/
├── src/
│   ├── components/     # Componentes React reutilizáveis
│   ├── pages/          # Páginas da aplicação (ex.: Login, Agendamento)
│   ├── services/       # Serviços para chamadas à API
│   ├── App.tsx         # Componente principal
│   ├── index.tsx       # Entrada da aplicação
├── .env                # Variáveis de ambiente
├── package.json        # Dependências e scripts
├── README.md           # Este arquivo

Integração com o Backend
O frontend se comunica com a API em http://localhost:3000. Principais endpoints:

POST /auth/login: Autentica o usuário e retorna um token JWT.
Mais endpoints serão consumidos conforme implementados no backend.

Desenvolvimento

Criar Componentes:

Adicione componentes em src/components/ ou páginas em src/pages/.


Chamar a API:

Use Axios em src/services/ para interagir com o backend:import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const login = async (username: string, password: string) => {
  return api.post('/auth/login', { username, password });
};




Testes:

Escreva testes com Jest/React Testing Library em src/**/*.test.tsx.



Solução de Problemas

Erro de conexão com a API:

Verifique se o backend está rodando (http://localhost:3000).
Confirme a variável REACT_APP_API_URL no .env.


Dependências incorretas:

Limpe o ambiente e reinstale:npm cache clean --force
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install





Contato

Autor: Esdras Donglares
Email: esdras.donglares@gmail.com