import React, { useState } from "react";
import '../../styles/header.css'
import '../../styles/footer.css'
import '../../styles/card.css'
import img from'./Rectangle 3.png'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
var title = sessionStorage.getItem("title");
var autor = sessionStorage.getItem("autor");
var data = sessionStorage.getItem("data");
var categoria = sessionStorage.getItem("categoria");
var notes = sessionStorage.getItem("notes");
var id = sessionStorage.getItem("id");
function VisualizeCard({handleDelete}) {

  return (
    <>
      <header>
        <div id='menu' className="menu">
          <ul>
            <li className='ativo'>Home</li>
            <li>About Us</li>
          </ul>
        </div>
        <menu>
          <h1>News <br /> <span>Aggregator</span></h1>
          <ul>
            <li className='ativo'>Home</li>
            <li>About Us</li>
          </ul>

        </menu>
        <div className="btns">
          <button className='ativo'>Sign In</button>
          <button>Sign Up</button>
        </div>
      </header>

      <section className="section">
        <h1>{title}</h1>
        <aside className="aside">
          <h2>By {autor} <span>{categoria}</span></h2>

          <h3>{data}</h3>
        </aside>
        <figure>
          <img src={img} alt="" />
        </figure>
        <p className="obs">Malesuada egestas nunc vestibulum egestas mauris augue tempor scelerisque eros.</p>

        <textarea 
        className="descri"
         defaultValue={notes}
        />

      </section>

      <footer>
        <h3>Nwesletter</h3>
        <input type="text" placeholder='Email adress...' />
        <aside id='linkes'>

          <p>Linkedin</p>
          <p>Github</p>
          <p>Instagram</p>

        </aside>
        <span>© 2023 Antonio Gabriel. All rights reserved</span>
      </footer>
    </>
  )

}

export default VisualizeCard;