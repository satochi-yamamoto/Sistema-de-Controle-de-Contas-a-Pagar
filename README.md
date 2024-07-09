# Sistema de Controle de Contas a Pagar

## Descrição
Este é um sistema web para controle de contas a pagar, com níveis de acesso, criptografia de senha e gestão de contas.

## Tecnologias Utilizadas
- Node.js
- Express
- MySQL
- JWT para autenticação
- Bcrypt para criptografia de senhas

## Instalação
1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/controle-contas.git
    ```
2. Instale as dependências:
    ```sh
        cd controle-contas
    npm install
    ```

3. Configure as variáveis de ambiente:
    - Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
      ```env
      DB_HOST=localhost
      DB_USER=root
      DB_PASS=sua_senha
      DB_NAME=controle_contas
      JWT_SECRET=sua_chave_secreta
      PORT=3000
      ```

4. Configure o banco de dados MySQL:
    - Execute os scripts de criação de tabelas no MySQL conforme definidos nos arquivos de modelo (`/models/user.js` e `/models/account.js`).

5. Inicie o servidor:
    ```sh
    npm start
    ```

6. O servidor estará rodando em `http://localhost:3000`.

## Rotas da API

### Autenticação
- `POST /auth/register` - Registro de novo usuário
  - Body:
    ```json
    {
      "username": "usuario",
      "password": "senha",
      "role": "user"
    }
    ```
- `POST /auth/login` - Login de usuário
  - Body:
    ```json
    {
      "username": "usuario",
      "password": "senha"
    }
    ```

### Contas a Pagar
- `POST /api/accounts` - Criação de nova conta (necessário token de usuário)
  - Headers:
    ```http
    Authorization: Bearer [token]
    ```
  - Body:
    ```json
    {
      "supplier": "Fornecedor X",
      "cnpj": "00.000.000/0000-00",
      "due_date": "2024-07-10",
      "reference_month": "07/2024",
      "issue_date": "2024-07-01",
      "invoice_number": "123456",
      "attachment_path": "/caminho/para/anexo.pdf"
    }
    ```

- `GET /api/accounts` - Listar todas as contas (necessário token de usuário)
  - Headers:
    ```http
    Authorization: Bearer [token]
    ```

## Controle de Acesso
- Usuários com o papel `admin` têm acesso a todas as rotas e podem gerenciar usuários.
- Usuários com o papel `user` têm acesso às rotas de contas a pagar.
- Visitantes têm acesso limitado e não podem acessar rotas protegidas.

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença
Este projeto está licenciado sob a MIT License.

