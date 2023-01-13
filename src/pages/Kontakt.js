import React from 'react'
import Zgrada from "../images/zgrada.jpeg"
import "../styles/Kontakt.css"

export default function Contact() {
  return (
    <div className="contact">
      <div 
          className="leftSide"
          style={{backgroundImage: `url(${Zgrada})`}}> 
      </div>
      <div className="rightSide">
        <h1>Kontaktirajte nas</h1>
        <form id="contact-from" method="POST">

          <label htmlFor='name'>Vase ime</label>
          <input name="name" placeholder='Unesite vase ime...' type="text"></input>

          <label htmlFor='email'>Email</label>
          <input name="email" placeholder='Vas email...' type="email"></input>

          <label htmlFor='Message'>Poruka</label>
          <textarea rows="6" placeholder='Enter message' name="poruka" required></textarea>
          <button type="submit">Posalji</button>

        </form>
      </div>
    </div>
  )
}
