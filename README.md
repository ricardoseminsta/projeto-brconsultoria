# projeto-brconsultoria

### Projeto da segunda etapa do processo seletivo para estagiário, candidato Ricardo Emanuel

# Comandos necesários
- npm install - para instalar os módulos node e bibliotecas necessárias
- npm run start-dev - para iniciar o projeto no localhost


O objetivo do projeto tem como finalidade realizar um CRUD básico de uma base fictícia de transações de vendas.

Possui três tabelas referenciadas nos 3 models na pasta projeto-brconsultoria/src/models/

### [Modalidade](https://github.com/ricardoseminsta/projeto-brconsultoria/blob/main/src/models/Modality.ts)
### [Loja](https://github.com/ricardoseminsta/projeto-brconsultoria/blob/main/src/models/Store.ts)
### [Vendas](https://github.com/ricardoseminsta/projeto-brconsultoria/blob/main/src/models/Sale.ts)

Com a utilização do ORM [Sequelize](https://sequelize.org/)  foram criadas as tabelas no banco de dados e referenciadas as chaves estrangeiras do model Modality e Store no model Sale.

O model de modalidade de compra possui os unicos valores da tabela que são 1 - Débito e 2 - Crédito, para isso no a partir da linha 24 do Modality.ts uma função verifica se já existem os valores cadastrados na base de dados, se houver alguma divergencia na quantidade de rigistros ou na descrição dos mesmos a base de dados é recriada com os valores iniciais.

### Os endpoints e métodos para criação, atualização e listagem dos dados são:
#### Para Lojas
##### GET - /store => lista id das lojas
##### POST - /store => cria uma nova loja
##### DELETE - /store/:id => deleta uma loja pelo id
##### PUT - /store/:id => atualiza uma loja pelo id

#### Para Vendas
##### POST - /sale => cria uma nova venda
##### DELETE - /sale/:id => deleta uma venda pelo id
##### GET - /sales => lista vendas por filtro de data utilizando queryString na URL
##### GET - /sales/page/:page => lista todas as vendas paginadas (2 vendas por página, a variavel npp da função paginationSale no [saleController.ts](https://github.com/ricardoseminsta/projeto-brconsultoria/blob/main/src/controllers/saleController.ts) quando editada altera o número de itens por página)

As requisições foram feitas utilizando o postman, essa [collection](https://www.getpostman.com/collections/a31653c0262af2c4bc6b) fornece as requsições utilizadas para teste da API.
