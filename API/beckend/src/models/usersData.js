const mongoose = require('mongoose')

const userCadastro = new mongoose.Schema({
  name: String,
  email: String,
  namber: Number,
  senha: Number,
})

module.exports = mongoose.model('CadastroUser', userCadastro)