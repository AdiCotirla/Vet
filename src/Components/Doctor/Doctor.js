import React from 'react'
import "../../Styling/Card.css"
import doc from "../../assets/doc.jpg"
export default function Doctor() {
  return (
    <div className='doc-container'>
        <h1 className='header-doc'>Doctorul nostru :</h1>
        <div className='img-doc-div'>
        <img src={doc} alt="Doctor" className='img-doc'/>
        <div className='infos'>
        <p>Kevin Farcas</p>
        <p>Veterinar</p>
        </div>
        </div>
    </div>
  )
}
