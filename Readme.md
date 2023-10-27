# Node Authentication

## Example application of authentication with Node.js

<p float="left">
 <img src="https://img.shields.io/badge/Node.js-43853d?style=for-the-badge&logo=Node.js&logoColor=white">
 <img src="https://img.shields.io/badge/Express-010101?style=for-the-badge&logo=express&logoColor=white">
 <img src="https://img.shields.io/badge/Jwt-d63aff?style=for-the-badge&logo=json&logoColor=white">
 <img src="https://img.shields.io/badge/Mongodb-13aa52?style=for-the-badge&logo=Mongodb&logoColor=white">
</p>

## Ideia: 💡
Criar um projeto capaz de criar um serviço de **_autenticação_** com tokens usando **_JWT_**, **_Express_** e **_MongoDB_** como database.

## Funcionalidades: 🔧
- Criação de **_Api_** com Express e MongoDB;
- **_Endpoints_** públicos e privados;
- Privados precisam de **_token_** para serem acessados;
- Token entregue através do **_login_** bem sucedido.
- Token enviado pelo **_header_** da requisição.
- Um **_middleware_** valida se o token é válido ou não.
- Não há persistência de sessao no *~~backend~~*, **_tudo é feito pelo token_**.

## Executando o projeto: 🚀
Para executar e visualizar o projeto em **modo de desenvolvimento**, você precisará seguir as próximas etapas.

### Pré-requisitos: 💻
Abaixo estará listada as ferramentas necessárias para o funcionamento do projeto.


[<ins>Node</ins>](https://nodejs.org/en) 
<br>
[<ins>NPM</ins>](https://www.npmjs.com/) 
<br>
[<ins>MongoDb Atlas</ins>](https://www.mongodb.com/atlas/database) 
<br>
[<ins>Postman</ins>](https://www.postman.com/) 
<br>

###### Para checagem de dependências e bibliotecas vide [LINKS](https://github.com/joapedu/node-authentication#links-).
  
### Executando o projeto: 🏎
Os scripts abaixo executam a compilação do projeto:

###### Comando para executar a instalação de dependências e bibliotecas.
```sh
    npm install --save-dev
```
###### Comando para executar o nodemon e rodar o projeto.
```sh
    npm run start
```

---
## Links: 🌐
***Dependências utilizadas:***<br>

[<ins>Bcrypt</ins>](https://www.npmjs.com/package/bcrypt) 
<br>

[<ins>Dotenv</ins>](https://www.npmjs.com/package/dotenv) 
<br>

[<ins>Express</ins>](https://www.npmjs.com/package/express)
<br>

[<ins>JsonWebToken</ins>](https://www.npmjs.com/package/jwt)
<br>

[<ins>Mongoose</ins>](https://www.npmjs.com/package/mongoose)
<br>

[<ins>Nodemon</ins>](https://www.npmjs.com/package/nodemon)

---
## Licença 📝
Este projeto está licenciado sob a licença [ MIT ] - consulte o arquivo [LICENSE.md](./LICENSE) para obter detalhes.

## Contribuição 🤝
 Para toda e qualquer contribuição de código vide [CONTRIBUTING.md](./CONTRIBUTING.md).

<br>
 <h3 align="center"> 👾 <a href="https://github.com/joapedu"><strong>@joapedu</strong></a> <br />João Eduardo Braga</h3>
<h4 align="center">:phone: <i>C O N T A T O S</i> :phone:</h4>
<div align="center">
    <a href = "mailto:joaoeduardobraga2@gmail.com"><img src="https://img.shields.io/badge/-Gmail-F80000?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
    <a href="https://www.linkedin.com/in/joão-eduardo-braga/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
    <a href="https://wa.me/5584981480327/" target="_blank"><img src="https://img.shields.io/badge/-WhatsApp-4EA94B?style=for-the-badge&logo=WhatsApp&logoColor=white" target="_blank"></a>
</div>