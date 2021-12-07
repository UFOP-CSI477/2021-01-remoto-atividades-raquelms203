# **CSI606-2021-01 - Remoto - Proposta de Trabalho Final**

## _Aluna: Raquel Martins dos Santos_

---

### Resumo

Nessa atividade prática foi desenvolvido um site de e-commerce utilizando as tecnologias HTML, Javascript com framework React e consumo de uma API Restful feita com Node JS.

### 1. Tema

O trabalho final tem como tema o desenvolvimento de um site de e-commerce mostrando roupas/calçados disponíveis e possibilidade de adicionar a um carrinho de compras e efetuar a compra.

### 2. Escopo

Esse projeto permite ao usuário adicionar e remover produtos do carrinho, adicionar e editar a quantidade desejada e visualizar em detalhes cada um dos produtos disponíveis e realizar a compra.

No back-end é possível adicionar produtos, editar e remover. E também visualizar a listagem de todos os produtos e efetuar uma compra.

### 3. Restrições

Neste trabalho não serão considerados métodos de pagamento e cadastro de usuários.

### 4. Protótipo

Protótipos disponível em:
https://www.figma.com/file/4QdAoZM7S3SVAnRK7siOtz/Loja-Tênis?node-id=0%3A1

### 5. Instruções para instalação e execução

Pré-requisitos:

- Possuir o Node instalado no computador, caso não tenha obter em:
  https://nodejs.org/en/download/

É recomendado adicionar as variáveis de ambiente npm e node no terminal.

#### 5.1 Execução do back-end

Para rodar o back-end, execute no terminal na pasta /api

> node index

Na porta 3000 será iniciado o back-end com banco de dados Mongo.

Foram desenvolvidos os seguintes endpoints:

**/products**

GET: listagem de produtos.

POST: cadastro de produtos.

> Exemplo de cadastro:

```
 {
      "title": "Tênis de Caminhada Leve Confortável",
      "price": 179.9,
      "amount": 15,
      "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/7b85bada2e2d4329bdd4aa3100c072a6_9366/Tenis_Energyfalcon_Preto_EE9843_01_standard.jpg"
 }
```

**/product/:id**

GET: retorna o produto com o id informado.

PUT: atualiza o produto pelo id informado, o json de exemplo é igual ao de cadastro de produtos.

DELETE: remove o produto com o id informado.

**/sale**

POST: realiza uma compra.

> Exemplo de compra:

```
 {
     "id": "61afa3d63837578303bc56ae",
     "amount": 3
 }
```

#### 5.2 Execução do front-end

Pré-requisitos:

- Possuir o Node instalado no computador, caso não tenha obter em:
  https://nodejs.org/en/download/

Para rodar o front-end, execute no terminal na pasta /web

> npm start
