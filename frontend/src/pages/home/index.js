import React, {useState, useEffect} from "react";
import '../../global.css'
import '../../styles/header.css'
import '../../styles/aside.css'
import '../../styles/footer.css'
import '../../styles/modal.css'
import Card from '../../components/Notes/index'
import api from '../../services/api'
import VisualizeCard from "../card/index";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function Home() {
  function mostraMenu(){
    const menu = document.getElementById('menu')
    
    if(menu.style.display == 'none'){
      menu.style.display = 'flex'
    } else{
      menu.style.display = 'none'
    }
  }

  function mostraModal(){
    const modal = document.getElementById('modal')

    if(modal.style.display == 'none'){
      modal.style.display = 'flex'
    } else{
      modal.style.display = 'none'
    }
  }

  function showFilter(){
    const div = document.getElementById('filter')

    if(div.style.display == 'none'){
      div.style.display = 'flex'
    } else{
      div.style.display = 'none'
    }
  }

  function ocultarModal(){
    const modal = document.getElementById('modal')

    if(modal.style.display == 'flex'){
      modal.style.display = 'none'
    } else{
      modal.style.display = 'flex'
    }
  }
   

  const [title, setTitles] = useState('')
  const [selectedValue, setSelectedValue] = useState('all')
  const [notes, setNotes]  = useState('')
  const [autor, setAutor]  = useState('')
  //const [image, setImage] = useState('')
  const [category, setCategory] = useState('')
  const [allNotes, setAllNotes] = useState([])
 

   //Tratando a imagem 


   //Get
  useEffect(()=> { 
    getAllNotes();
  }, [])

  async function getAllNotes(){
   const response = await api.get('/anotations',)
   setAllNotes(response.data)
  }

  async function loadNotes(option){
    const params = {priority: option};
    const response = await api.get('/priorites', { params })

    if(response){
      setAllNotes(response.data)
    }
  }

  function handleChange(e){
    setSelectedValue(e.value)

    if(e.checked && e.value != 'all'){
      loadNotes(e.value);
    } else{
      getAllNotes()
    }
  }
  
  async function handleDelete(id){
    const deleteNotes = await api.delete(`/anotations/${id}`)

    if(deleteNotes){
      setAllNotes(allNotes.filter(note => note._id != id));
    }
  }

  async function hangleChangePriority(id){
    const note = await api.post(`/priorites/${id}`)

    if(note){
     getAllNotes()
    }
  }

 
  async function handleSubmit(e){
       e.preventDefault()

       //Fazendo o Post
       const response = await api.post('/anotations', {
          title,
          notes,
          autor,
          category,
          priority: false
       })

       setTitles('')
       setNotes('')
       setAutor('')
       setCategory('')
 
       setAllNotes([...allNotes, response.data])
   }

   useEffect(()=> {
      function anableSubmitButton(){
        let btn = document.getElementById('submit')
        btn.style.background = '#777'
        if(title && notes && autor && category){
          btn.style.background = '#333'
        }
      }
      anableSubmitButton()
   }, [title, notes, autor, category])
  


  //BuscaInput
  const handleFilter = async ({ target }) => {
    const response = await api.get('/anotations',)
    if(!target.value){
      setAllNotes(response.data)
      return
    }
    
    const filterRepo = allNotes.filter((card) => card.title.includes(target.value))
    setAllNotes(filterRepo)
  }

  var selectd = document.querySelectorAll('option')
  selectd.forEach(element => {

    element.addEventListener('dblclick', ()=> {
      console.log('ola')
    })
  });
 
  return (
   //Rotas


    <div className="app">
            <div className="modal" id='modal'>

            <form onSubmit={handleSubmit} encType="multipart/form-data" action="/anotations">
                <h2>Create Artiggle</h2>
                <span className='x' onClick={ocultarModal}>x</span>

                <label>Title</label>
                <input 
                  required
                  value={title}
                  onChange={e => setTitles(e.target.value)}
                />

                <label>Image</label>
                <input type="file" id="file" name="image" required
                  
                  
                  />

                <label >Author Title</label>
                <input 
                  required
                  value={autor}
                  onChange={e => setAutor(e.target.value)}
                />

                <label >Category</label>
                <input 
                  required
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                />

               <label>Descripition</label>
               <textarea 
                  required
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
               />

               <button id='submit' type='submit'>Create</button>
            </form>
          </div>
         <header>
          <div id='menu' className="menu">
          <ul>
              <li className='ativo'>Home</li>
              <li>About Us</li>
            </ul>
          </div>
           <menu>
          <h1>News <br/> <span>Aggregator</span></h1>
            <ul>
              <li className='ativo'>Home</li>
              <li>About Us</li>
            </ul>
             <article onClick={mostraMenu}>
             <i class='bx bx-menu'></i>
             </article>
          </menu>
          <div className="btns">
            <button className='ativo'>Sign In</button>
            <button>Sign Up</button>
          </div>
         </header>
         <aside>
          <header id='header'>
            <h1>Article</h1>
            <div className="btns">
            <button id='button2' className='ativo' onClick={mostraModal}>Create Posts</button>
            <button id='button' onClick={showFilter}>Show Filter</button>
          </div>
          </header>
          <div className="filter" id="filter">
            <label >Todos</label>
            <input type="checkbox" 
             checked={selectedValue === 'all'}
             onChange={e => handleChange(e.target)}
             value='all'
            /> 
            <label >Prioridades</label>
            <input type="checkbox" 
            checked={selectedValue === 'true'}
            onChange={e => handleChange(e.target)}
            value='true'
            /> 
            <label >Normal</label>
            <input type="checkbox" 
            checked={selectedValue === 'false'}
            onChange={e => handleChange(e.target)}
            value='false'
            /> 
           <label className="filterInput">
            <span>FilterName:</span>
            <input type="text" id="filterInput" 
             onChange={handleFilter}
            />
           </label>
             
           <div class="custom-select">
  <select>
    <option  value="0">Select car:</option>
    <option   value="1">Autor</option>
    <option   value="2">Category</option>
    <option  value="3">Date</option>
  </select>
</div>
          </div>
          <section>
          
           {allNotes.map(data=>(
             <Card 
             key={data._id}
             data={data}
             handleDelete={handleDelete}
             hangleChangePriority={hangleChangePriority}
             />
           ))}
          </section>
         </aside>
         <footer>
          <h3>Nwesletter</h3>
          <input type="text" placeholder='Email adress...'/>
          <aside id='linkes'>

            <p>Linkedin</p>
            <p>Github</p>
            <p>Instagram</p>
            
          </aside>
          <span>© 2023 Antonio Gabriel. All rights reserved</span>
         </footer>
    </div>
  );
 
}

export default Home;
