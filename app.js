/* imports */
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

/** Configuração da resposta do json ja q o express nao vem como padrão */
app.use(express.json())

/** Rota Pública */
app.get('/', (req, res) => {
    res.status(200).json({msg: "Bem vindo a nossa API!"})
})

/** Registro de usuário */
app.post('/auth/register', async(req, res) => {

    const {name, email, password, confirmpassword} = req.body

    /**
     * Validações
     */
    if(!name){
        return res.status(422).json({msg: "O nome é obrigatório"})
    }
})


/** Credenciais */
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

/** Conexão com database */
mongoose
    .connect(
        `mongodb+srv://${dbUser}:${dbPassword}@authjwt.7vpj84r.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        app.listen(3000)
        console.log('Conectou ao banco')
    })
    .catch((err) => console.log(err))

app.listen(3000)
