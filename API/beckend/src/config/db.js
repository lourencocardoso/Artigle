const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const connect = () => {
  mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.kabzecy.mongodb.net/anotations?retryWrites=true&w=majority`)

  const connection = mongoose.connection;

  connection.on("error", ()=> {
    console.log('Erro ao se conectar com o mongoDB')
  })

  connection.on("open", ()=> {
    console.log('MongoDb Conectado com sucesso')
  })
}

connect();
module.exports = mongoose