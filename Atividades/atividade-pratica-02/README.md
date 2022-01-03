# **CSI606-2021-01 - Remoto - Prova**

## _Aluna: Raquel Martins dos Santos_

---

### Resumo

Nessa prova foi desenvolvido um site de controle de vacinação utilizando as tecnologias HTML, Javascript com a biblioteca React e consumo de uma API Restful feita com Node JS.

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

**/login/**

POST: realiza o login

**/users**

GET: listagem de usuários.

POST: cadastro de usuário.

**/user/:id**

GET: retorna o usuário com o id informado.

PUT: atualiza o usuário pelo id informado

DELETE: remove o usuário com o id informado.

**/persons**

GET: listagem de pacientes.

POST: cadastro de paciente.

**/person/:id**

GET: retorna o paciente com o id informado.

PUT: atualiza o paciente pelo id informado

DELETE: remove o paciente com o id informado.

**/vaccines**

GET: listagem de vacinas.

POST: cadastro de vacina.

**/vaccine/:id**

GET: retorna a vacina com o id informado.

PUT: atualiza a vacina pelo id informado

DELETE: remove a vacina com o id informado.

**/unities**

GET: listagem de unidades.

POST: cadastro de unidade.

**/unity/:id**

GET: retorna a unidade com o id informado.

PUT: atualiza a unidade pelo id informado

**/registers**

GET: listagem de registros.

POST: cadastro de registro.

**/register/:id**

GET: retorna o registro com o id informado.

PUT: atualiza o registro pelo id informado

DELETE: remove o registro com o id informado.

**/doses**

GET: retorna as informações sobre as doses aplicadas.

#### 5.2 Execução do front-end

Pré-requisitos:

- Possuir o Node instalado no computador, caso não tenha obter em:
  https://nodejs.org/en/download/

Para rodar o front-end, execute no terminal na pasta /web

> npm start

OBS: Desenvolvi o CRUD para todos os modelos tanto no front-end quanto no back-end porque pretendo utilizar esse sistema para o meu portfólio. Qualquer dúvida estou a disposição :)
