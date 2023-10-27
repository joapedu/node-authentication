/* imports */
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

/** Configuração da resposta do json ja q o express nao vem como padrão */
app.use(express.json())


/** Modulos */
const User = require('./models/User')


/** Rota Pública */
app.get('/', (req, res) => {
    res.status(200).json({msg: "Bem vindo a nossa API!"})
})


/** Rota privada */
app.get("/user/:id", checkToken, async (req, res) => {
    const id = req.params.id

    /** Checando se o usuário existe*/
    const user = await User.findById(id, '-password')

    if(!user){
        return res.status(404).json({ msg: 'Usuário não encontrado '})
    }

    res.status.json({ user })
})

function checkToken(req, res, next){

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if(!token) {
        return res.status(401).json({ msg: "Acesso negado!" })
    }

    try {
        const secret = process.env.secret

        jwt.verify(token, secret)

        next()

    } catch(error) {
        res.status(400).json({ msg: "Token Inválido "})
    }
}

/** Registro de usuário */
app.post('/auth/register', async(req, res) => {

    const {name, email, password, confirmpassword} = req.body

    /* Validações */
    if(!name){
        return res.status(422).json({msg: "O nome é obrigatório"})
    }

    if(!email){
        return res.status(422).json({msg: "O email é obrigatório"})
    }

    if(!password){
        return res.status(422).json({msg: "A senha é obrigatória"})
    }

    if(!password !== confirmpassword){
        return res.status(422).json({msg: "As senhas não conferem"})
    }

    /** Checagem se o usuário existe */
    const userExists = await User.findOne ({ email: email })

    if(userExists) {
        return res.status(422).json({msg: 'Email já cadastrado, utilize outro'})
    }

    /** Criar senha */
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    /** Criar Usuário */
    const user = new User({
        name,
        email,
        password: passwordHash,
    })

    try{

        await user.save()

        res.status(201).json({msg: 'Usuário criado com sucesso!'})

    } catch(error) {
        console.log(error)

        res.status(500)
        .json({
            msg: 'Erro inesperado. Tente novamente mais tarde.'
        })
    }
})

/** Login de usuário */
app.post("/auth/login", async (req, res) => {
    const {email, password} = req.body

    /** Validação */
    if(!email){
        return res.status(422).json({msg: "O email é obrigatório"})
    }

    if(!password){
        return res.status(422).json({msg: "A senha é obrigatória"})
    }

    /** Checagem se o usuário existe */
    const user = await User.findOne({ email: email })

    if(!user) {
        return res.status(404).json ({ msg: 'Usuário não encontrado'})
    }

    /** Checar se a senha ta certa*/
    const checkPassword = await bcrypt.compare(password, user.password)

    if(!checkPassword){
        return res.status(422).json ({ msg: 'Senha inválida'})
    }
    
    try {
        const secret = process.env.secret

        const token = jwt.sign(
            {
            id: user._id,
            },
            secret,
        )

        res.status(200).json({ msg: "Autenticação realizada com sucesso", token})

    } catch(error) {
        console.log(error)

        res.status(500)
        .json({
            msg: 'Erro inesperado. Tente novamente mais tarde.'
        })
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
