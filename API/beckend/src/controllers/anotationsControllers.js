const Anotations = require('../models/anotationsData')

module.exports = {
//Get
 async read(request, response){
    const annotationList = await Anotations.find();
    return response.json(annotationList);
  },

//Post
 async create(req, res){
    const {title, notes, priority, date, autor, category} = req.body;
    //Tratando Img
   
    //Validação dos Campos
    if(!notes || !title || !autor){
      
       return res.status(400).json({error : 'É necesserario um Titulo e um contiudo'})
    }
    //Criando na BD
    const annotationCreat = await Anotations.create({
      title,
      notes,
      date,
      autor,
      category,
      priority
    })
    return res.json(annotationCreat)
   },
   //Deletar

   async delete(req, res){
    const { id } = req.params;
    
    const anotationDelete = await  Anotations.findOneAndDelete({_id: id});

    if(anotationDelete){
      return res.json(anotationDelete)
    }

    return res.status(401).json({error: 'Dado não encontrado'})
   },

   async rediri(req, res){
     const {id} = req.params
     const {title, notes, date, autor, image} = req.body

     const anotation = await Anotations.findOne({_id: id})

     return res.json(anotation)
  }
}