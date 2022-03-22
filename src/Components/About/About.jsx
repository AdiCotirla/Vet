import React from 'react'
import "../../Styling/About.css"
import tara from "../../assets/logotara.png"
import bully from "../../assets/bully.jpg"
import creator from "../../assets/creator.jpeg"

export default function About() {
    return (
        <div className='about-page'>
            <div className='container-about'>
                <div className='infos-about'>
                    <p className='infos-left'>Medic care iti face viata mai usoara venind si oferind servicii chiar la tine acasa. Ne dezvoltam si lucram impreuna sa asiguram sanatatea animalului dumneavoastra de companie. 
                    În calitate de proprietari de animale de companie, credem că îngrijirea preventivă cu examene de sănătate sunt cheia pentru ca animalul dvs. de companie să trăiască o viață mai lungă, mai sănătoasă și mai fericită.
                    </p>
                    <p className='infos-right'>Personalul nostru vă tratează ca pe o familie și fiecare animal de companie ca pe al nostru. Suntem onorați și mândri să fim partener în echipa de îngrijire a animalelor dvs. de companie.</p>
                </div>
                <div>
                    <div className='container-colaborari'>
                        <h1 className='category-header about-header'>Colaborari</h1>
                        <div className='container-slider-about'>
                            <a href='https://www.rottfreund.com' className='a-about-carusel'>
                                <img src={tara} alt="Rottfreund kennel" className='img-about-carusel'></img>
                                <h2 className='h2-about'>Rottfreund Kennel</h2>
                            </a>
                            <a href='https://www.fiverr.com/adrianoprea657' className='a-about-carusel mijloc'>
                                <img src={creator} alt="Site creator" className='img-about-carusel'></img>
                                <h2 className='h2-about'>Creator site</h2>
                            </a>
                            <a href='https://www.facebook.com/Thebigblue.SonMagoo' className='a-about-carusel'>
                                <img src={bully} alt="Rottfreund kennel" className='img-about-carusel'></img>
                                <h2 className='h2-about'>PSA Bully</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
