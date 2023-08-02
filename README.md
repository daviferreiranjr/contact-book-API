# README - Contact Book

Este é o README para o backend da aplicação do projeto Contact Book. A seguir, você encontrará instruções detalhadas para configurar e executar o backend em seu ambiente local.

## Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado em seu sistema:

- Node.js: https://nodejs.org/ (versão 12 ou superior)
- PostgreSQL: https://www.postgresql.org/ (Certifique-se de ter um servidor PostgreSQL configurado e em execução)

## Instalação

Siga as etapas abaixo para configurar e executar o backend:

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Acesse o diretório do projeto:
   ```
   cd nome-do-repositorio
   ```

3. Instale as dependências do projeto:
   ```
   npm install
   ```

## Configuração do Banco de Dados

Antes de executar o backend, você precisa configurar o banco de dados PostgreSQL. Crie um banco de dados vazio para a aplicação e defina as credenciais de acesso no arquivo `config/database.js`.

```javascript
module.exports = {
  development: {
    dialect: 'postgres',
    host: 'localhost',
    username: 'seu-usuario',
    password: 'sua-senha',
    database: 'nome-do-banco-de-dados',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  // Configurações para outros ambientes (produção, teste, etc.) podem ser adicionadas aqui
};
```

Substitua `seu-usuario`, `sua-senha` e `nome-do-banco-de-dados` pelas credenciais corretas do seu banco de dados PostgreSQL.

## Executando o backend

Após a instalação e configuração do banco de dados, você pode executar o backend usando o seguinte comando:

```
npm run dev
```

O backend será iniciado e estará disponível. Certifique-se de que o servidor PostgreSQL também esteja em execução.

## Rotas da API

O backend expõe as seguintes rotas da API:

- **GET /users**: Retorna todos os usuários cadastrados.
- **POST /users**: Cria um novo usuário com base nos dados fornecidos.
- **PATCH /users/:id**: Atualiza os dados de um usuário específico com base no ID.
- **DELETE /users/:id**: Deleta um usuário específico com base no ID.


Aproveite o backend da aplicação e obrigado por contribuir!