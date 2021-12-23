# **CSI606-2021-01 - Remoto - Atividade Prática 2**

## _Aluna: Raquel Martins dos Santos_

---

### Resumo

Nessa atividade prática foi desenvolvido um site de cadastro de matrículas em uma escola utilizando as tecnologias HTML, Javascript com framework React e consumo de uma API Restful feita com Node JS.

### Instruções para instalação e execução

Pré-requisitos:

- Possuir o Node instalado no computador, caso não tenha obter em:
  https://nodejs.org/en/download/

É recomendado adicionar as variáveis de ambiente npm e node no terminal.

#### 5.1 Execução do back-end

Para rodar o back-end, execute no terminal na pasta /api

> node index

Na porta 3000 será iniciado o back-end com banco de dados Mongo.

Foram desenvolvidos os seguintes endpoints:

**/users**

GET: listagem de usuários.

POST: cadastro de usuário.

**/login/**

POST: realiza o login

**/user/:id**

GET: retorna o usuário com o id informado.

PUT: atualiza o usuário pelo id informado

DELETE: remove o usuário com o id informado.

**/subjects**

GET: listagem de tipos de matrícula.

POST: cadastro de tipo de matrícula.

**/subject/:id**

GET: retorna o tipo de matrícula com o id informado.

PUT: atualiza o tipo de matrícula pelo id informado

DELETE: remove o tipo de matrícula com o id informado.

**/requests**

GET: listagem de matrículas.

POST: cadastro de matrícula.

**/subject/:id**

GET: retorna a matrícula com o id informado.

PUT: atualiza a matrícula pelo id informado

DELETE: remove a matrícula com o id informado.

#### 5.2 Execução do front-end

Pré-requisitos:

- Possuir o Node instalado no computador, caso não tenha obter em:
  https://nodejs.org/en/download/

Para rodar o front-end, execute no terminal na pasta /web

> npm start
