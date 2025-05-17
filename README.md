# Diagnosoft_API

<!-- 🚀 Projeto Integrador – API -->

Este repositório contém o **back-end (API)** do Projeto Integrador, responsável por:

- Expor endpoints REST para criação, leitura, atualização e remoção de **formulários clínicos**.
- Conectar-se ao **MongoDB Atlas** usando **Mongoose**.

---

## ⚙️ Requisitos

- [Docker](https://www.docker.com/) instalado  
- [Git](https://git-scm.com/) instalado  

---

## 📂 Variáveis de Ambiente

Na raiz do projeto, crie um arquivo `.env` (não versionar, adicione ao `.gitignore`) com as seguintes chaves:

```ini
# Porta que sua API vai escutar
PORT=5000

# Credenciais e cluster do MongoDB Atlas
DB_USER=<seu_usuario_atlas>
DB_PASSWORD=<sua_senha_atlas>
DB_CLUSTER=<seu_cluster>.mongodb.net
DB_NAME=<nome_do_banco>      # será criado automaticamente na primeira escrita
```

---

## Como Executar em Desenvolvimento

### 1. Clonar este Repositório

```bash
git clone https://seu-repositorio.git
cd Diagnosoft_API
```

### 2. Instalar Dependências Locais (opcional)

Se quiser validar localmente antes de containerizar:

```bash
npm install
```

### 3. Build dos Contêineres

```bash
docker compose build
```

Para forçar reconstrução sem cache:

```bash
docker compose build --no-cache
```

### 4. Subir a API

```bash
docker compose up
```

- O serviço **api** usará o `Dockerfile` para criar a imagem.
- A porta **5000** do container ficará disponível em `http://localhost:5000`.
- O **nodemon** executará `npm run dev` e recarregará automaticamente a cada alteração de código.
- As variáveis do seu `.env` serão carregadas pelo `docker-compose.yml`.

---

## Endpoints Principais

| Método | Rota                   | Descrição                           |
| ------ | ---------------------- | ----------------------------------- |
| GET    | `/`                    | Verifica se a API está funcionando |
| GET    | `/api/forms`           | Lista todos os formulários          |
| POST   | `/api/forms`           | Cria um novo formulário             |
| GET    | `/api/forms/:id`       | Busca formulário por ID             |
| PUT    | `/api/forms/:id`       | Atualiza formulário por ID          |
| DELETE | `/api/forms/:id`       | Remove formulário por ID            |

> Consulte `./routes/formRoutes.js` para detalhes de validação e payloads.



