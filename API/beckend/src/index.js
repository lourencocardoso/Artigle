const express = require('express');
const routes = require('./routes')
require('dotenv').config()
const app = express();
require('./config/db') 
const cors = require('cors')
const nodemailer = require('nodemailer')


 
app.use(cors())
app.use(express.json())
app.use(routes)

//Nodemailer
let transport =nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
   user: 'lorryscode@gmail.com',
   pass: 'eekmekjnznwdvxav',
  }
}); 


transport.sendMail({
 from: 'Article <lorryscode@gmail.com>',
 to: 'lorryscode@gmail.com',
 subject: 'Nwes Article',
 html: '<h1> Olá Lourenço!</h1> <p>Foi publicado um novo atrido do Prof AG',
 text: 'Olá Dev!Esse email foi enviado usando Nodemailer'
})
.then(() => console.log('Email enviado com sucesso'))
.catch((err) => console.log('Erro ao enviar o email', err))


app.listen(6060, ()=>{
  console.log('Servidor Rodando')
});