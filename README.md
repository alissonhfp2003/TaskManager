# TaskManager

TaskManager é uma aplicação para gerenciar tarefas, permitindo que você crie, edite, conclua e exclua tarefas de forma fácil e eficiente. O projeto utiliza **React.js** no front-end e **Node.js** com **MongoDB** no back-end para fornecer uma solução completa para gerenciamento de tarefas.

## Demonstração

[Adicione aqui um link para uma demonstração online, se disponível]

## Funcionalidades

- Criar novas tarefas
- Listar todas as tarefas
- Editar tarefas existentes
- Concluir tarefas
- Excluir tarefas

## Tecnologias Utilizadas

### Front-End:
- React.js
- React Router
- Axios

### Back-End:
- Node.js
- Express.js
- MongoDB
- Mongoose

## Estrutura do Projeto

```
TaskManager/
├── client/                # Código fonte do front-end
│   ├── public/            # Arquivos públicos do React
│   ├── src/               # Código fonte do React
│       ├── components/    # Componentes reutilizáveis
│       ├── pages/         # Páginas principais
│       ├── service/       # Configuração de API
├── server/                # Código fonte do back-end
│   ├── models/            # Modelos do Mongoose
│   ├── routes/            # Rotas da API
│   ├── controllers/       # Lógica dos controladores
│   └── server.js          # Configuração do servidor
└── README.md
```

## Como Executar

### Pré-requisitos
Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### Passos para Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/alissonhfp2003/TaskManager.git
   cd TaskManager
   ```

2. Instale as dependências no diretório do servidor:
   ```bash
   cd server
   npm install
   ```

3. Configure as variáveis de ambiente no servidor:
   Crie um arquivo `.env` na pasta `server` com as seguintes variáveis:
   ```env
   PORT=5000
   MONGO_URI=<sua_string_de_conexão_mongodb>
   ````

4. Inicie o servidor:
   ```bash
   npm start
   ```

5. Configure o front-end:
   ```bash
   cd ../client
   npm install
   ```

6. Configure as variáveis de ambiente no front-end:
   Crie um arquivo `.env` na pasta `client` com a seguinte variável:
   ```env
   REACT_APP_BASE_URL=http://localhost:5000
   ```

7. Inicie o front-end:
   ```bash
   npm start
   ```

Agora você pode acessar a aplicação em `http://localhost:3000`.

## Rotas da API

- `GET /api/task` - Listar todas as tarefas
- `POST /api/task` - Criar uma nova tarefa
- `PUT /api/task/:id` - Atualizar uma tarefa existente
- `DELETE /api/task/:id` - Excluir uma tarefa

## Melhorias Futuras

- Implementar autenticação de usuários
- Adicionar filtros e busca para tarefas
- Criar uma interface para histórico de tarefas concluídas


