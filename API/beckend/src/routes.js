const express = require('express')
const routes = express.Router()

const anotationsControllers = require('./controllers/anotationsControllers')
const PriorityControllers = require('./controllers/PriorityControllers')
const ContentControllers = require('./controllers/ContentControllers')
const CadastroControllers = require('./controllers/CadastroControllers')
//Rota anotations
routes.post('/anotations', anotationsControllers.create)
routes.get('/anotations', anotationsControllers.read)
routes.delete('/anotations/:id', anotationsControllers.delete)
routes.post('/anotations/:id', anotationsControllers.rediri)
//Rotas do Cadastro
routes.get('/anotationsUser', CadastroControllers.cadastroFind)
routes.post('/anotationsUser', CadastroControllers.cadastroPost)
routes.post('/anotationsUser/:id', CadastroControllers.logar)

//Rota priority
routes.get('/priorites', PriorityControllers.read)
routes.post('/priorites/:id', PriorityControllers.update)

//Rota Content
routes.post('/contents/:id', ContentControllers.update)

module.exports = routes;