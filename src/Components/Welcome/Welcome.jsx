import React from 'react'

import "../../Styling/Welcome.css"
export default function Welcome() {
  return (<>
    <div className='welcome-container'>
        <a href="tel:0746878517" className='welcome-container-a'><button className='button-welcome'>Contacteaza-ne</button></a>
    </div>
    <p className='para-welcome'>Un medic veterinar care iti ofera unele dintre cele mai bune servicii si in cea mai scurta perioada de timp, chiar la tine acasa! Trebuie doar sa ne dai o adresa si noi vom veni.</p>
    </>
  )
}
