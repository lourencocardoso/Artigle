import React, { useState } from "react";
import { Link } from 'react-router-dom'
import img from '../Rectangle 3.png';
import './editmodal.css'
import api from "../../services/api";

var dataStorageTitle = ''
var dataStorageAutor = ''
var dataStorageDate = ''
var dataStorageCategory = ''
var dataStorageNotes = ''
var dataStorageID = ''


function Card({ data, handleData, handleDelete, hangleChangePriority  }) {

  function handleEdit(e, priority) {
    e.style.cursor = 'text'
    e.style.borderRadius = '5px'

    if (priority) {
      e.style.boxShadow = '0 0 5px white'
    } else {
      e.style.boxShadow = '0 0 5px gray'
    }
  }

  function ocultarModal() {
    const modal = document.getElementById('modal2')
    if (modal.style.display == 'flex') {
      modal.style.display = 'none'
    } else {
      modal.style.display = 'flex'
    }
  }

  function renderCard() {
    window.location.href = '/card'

    dataStorageTitle = sessionStorage.setItem("title", data.title);
    dataStorageAutor = sessionStorage.setItem("autor", data.autor);
    dataStorageDate = sessionStorage.setItem("data", data.date);
    dataStorageCategory = sessionStorage.setItem("categoria", data.category);
    dataStorageNotes = sessionStorage.setItem("notes", data.notes);
    dataStorageID = sessionStorage.setItem("id", data._id);
  }
   function op(){
     const op = document.getElementById('opsoes')
     if(op.style.display == 'none'){
      op.style.display = 'flex'
     } else{
      op.style.display = 'none'
     }
   }

   function edit(){
    var title_id = document.getElementById('title')
    var notes_id = document.getElementById('notes')
    var autor_id = document.getElementById('autor')
    var category_id = document.getElementById('category')
    let modal = document.getElementById('modal2')
    if(modal.style.display == 'none'){
      modal.style.display = 'flex'
    } else{
      modal.style.display = 'none'
    }
    title_id.value = data.autor
    notes_id.value = data.title
    autor_id.value = data.autor
    category_id.value = data.category
  }

  const[changeTitle, setTitle] = useState('')
  const[changeNotes, setNotes] = useState('')
  const [changeAutor, setAutor] = useState('')
  const [changeCategory, setCategory] = useState('')

  async function editHandle(e, title, notes, autor, category){
    if(changeTitle && changeTitle != title || changeNotes && changeNotes !=notes || changeAutor && changeAutor != autor || changeCategory && changeCategory != category){
     await api.post(`/contents/${data._id}`,{
       title: changeTitle,
       notes: changeNotes,
       autor: changeAutor,
       category: changeCategory,
      }) 
  }
}


  return (

    <>

<div className="modal" id='modal2'>
<form >
    <h2>Edit Artiggle</h2>
    <span className='x' onClick={ocultarModal}>x</span>


    <label>Title</label>
    <input 
      id='title'
      value={changeTitle}
      onChange={e => setTitle(e.target.value)}
      
    />
      <label>Descripition</label>
    <input 
      id='notes'
      value={changeNotes}
      onChange={e => setNotes(e.target.value)}
      
    />  <label>Author</label>
    <input 
      id='autor'
      value={changeAutor}
      onChange={e => setAutor(e.target.value)}
      
    />
      <label>Category</label>
    <input 
      id='category'
      value={changeCategory}
      onChange={e => setCategory(e.target.value)}
      
    />
   <button onClick={e => editHandle(e.target, data.autor, data.title, data.autor, data.category)} id='submit' type='submit'>Create</button>
</form>
</div>



      <div id="card" onClick={op} className={data.priority ? "notepad-infos-priority" : 'card'}>
        <button onClick={renderCard} id="op">...</button>
        <div id="opsoes" className="op">
        <button onClick={()=> handleDelete(data._id)}>Deletar</button>
       <button onClick={edit}>Edit</button>
     <button onClick={()=> hangleChangePriority(data._id)}>Priority</button>
        </div>
        <figure>
          <img src={img} alt="" />
        </figure>
        <h2>{data.title}</h2>

        <h3 onClick={e => handleEdit(e.target, data.priority)}>
          Malesuada egestas nunc vestibulum egestas
          mauris augue tempor scelerisque eros.
        </h3>

        <div className="dados">
          <p>{data.autor}</p>
          <p id='p'>{data.date}</p>
        </div>

      </div>

    </>
  );

}


export default Card