import React from 'react'
import { Link } from 'react-router-dom'
import "../../Styling/Welcome.css"
export default function Welcome() {
  return (<>
    <div className='welcome-container'>
        <Link to="/"><button>Contacteaza-ne</button></Link>
    </div>
    <p className='para-welcome'>Un proaspat absolvit medic veterinar iti ofera unele dintre cele mai bune servicii si in cea mai scurta perioada de timp, chiar la tine acasa! Trebuie doar sa ne dai o adresa si noi vom veni.</p>
    </>
  )
}
