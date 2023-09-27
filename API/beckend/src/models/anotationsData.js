const mongoose = require('mongoose')

const anotationsShema = new mongoose.Schema({
  title: String,
  notes: String,
  autor: String,
  category: String,
  priority: Boolean,
  image: String,
  date: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Anotations', anotationsShema)