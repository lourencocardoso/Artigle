const Anotations = require('../models/anotationsData')

//Priority com o Query// Buscar
module.exports = {
  //Execuntado o Priority
  async read (req, res){
    //Usando o query
     const priority = req.query

     const priorityNotes = await Anotations.find(priority)
     return res.json(priorityNotes)
   },

   async update(req, res){
     const { id } = req.params

     const anotation = await Anotations.findOne({_id: id})

    //Condição Bolleana 
     if(anotation.priority){
      anotation.priority = false
     }else{
      anotation.priority = true
     }
     //salvando Alterações
     await anotation.save();

     return res.json(anotation)
   }
}