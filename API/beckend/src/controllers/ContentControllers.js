const Anotations = require('../models/anotationsData')

//Editagem do Artigos /Update
module.exports = {
   async update(req, res){
     const {id} = req.params
     const {notes, title, autor, category} = req.body

     const anotation = await Anotations.findOne({_id: id})

     if(notes, title, autor, category){
      anotation.notes = notes
      anotation.title = title
      anotation.autor = autor
      anotation.category = category

      await anotation.save()
     }

     return res.json(anotation)
   }
}