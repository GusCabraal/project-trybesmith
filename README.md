# Projeto TrybeSmith


TrybeSmith foi o 24° projeto realizado durante a formação da Trybe. Esse projeto pertence a seção 8 do Modulo de Back-end e foi desenvolvido em setembro de 2022.

## O que foi desenvolvido

Uma API utilizando a arquitetura MSC, gerenciando uma loja de itens medievais utilizando Typescript. Foram criados alguns endpoints para ler e escrever em um banco de dados utilizando o MySQL.


## Como rodar a aplicação

- Clone o repositório com `git clone git@github.com:GusCabraal/project-trybesmith.git`

- ### Usando o docker

- Instale as dependencias `npm install`
- Há um arquivo `docker-compose.yml` configurado na raiz do projeto com os serviços `node` e `db`, rode  `docker-compose up -d` para subir os containers;
- Entre no container `trybesmith` com `docker exec -it trybesmith bash`
- Crie e popule o banco de dados com `npm run migration`
- Inicie o servidor `npm run dev`
- Importe o arquivo `routes-project-trybesmith.json` para dentro do Insominia
- Consuma a API sem moderação.

## Rotas da aplicação

- POST `/login` -> Faz o login na aplicação;
- POST `/users` -> Cadastra um novo usuario;
- GET `/products` -> Lista todos os produtos;
- POST `/products` -> Cadastra um novo produto;
- GET `/orders` -> Lista todas as vendas;
- POST `/orders` -> Cadastra uma nova venda com base nos produtos vendidos;
