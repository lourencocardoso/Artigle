const { json } = require('express')
const CadastroUser = require('../models/usersData')

module.exports = {
  //Get User
  async cadastroFind(req, res){
     const getUser = await CadastroUser.find()
     return res.json(getUser)
   },

   //Post User
   async cadastroPost(req, res){

    const {name, email, namber, senha} =  req.body
   //Validação dos Campos 
   if(!name || !email || !namber || !senha){
       return res.status(400).json(error= 'Erro ao pegar os valores');
   }
    const userCreate = await CadastroUser.create({
      name,
      email,
      namber,
      senha,
    })
    return res.json(userCreate)
},

async logar(req, res){
    const {id} = req.params
    const {name, email, senha} = req.body

    const login = await CadastroUser.findOne({_id: id})

    return res.json(login)
}
}