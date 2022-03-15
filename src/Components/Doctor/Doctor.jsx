import React from 'react'
import "../../Styling/Card.css"
import doc1 from "../../assets/doc.jpg"
import doc2 from "../../assets/doc2.jpg"
import doc3 from "../../assets/doc3.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default function Doctor() {
  return (
    <div className='doc-container'>
        <h1 className='header-doc'>Doctorul nostru :</h1>
        <h2 className='doc-name'>Kevin Farcas</h2>
        <div className='img-doc-div'>
        <img src={doc1} alt="Doctor" className='img-doc'/>
        <img src={doc2} alt="Doctor" className='img-doc'/>
        <img src={doc3} alt="Doctor" className='img-doc'/>
        </div>
        <Carousel
        className='carusel-doc'
        swipeable={true}
             showThumbs={false}
             showStatus={false}
             autoPlay ={"stopOnHover"}
             infiniteLoop>
        <div className='main-slider-doc'>
                <img src={doc1} alt="Doctor"  className='img-doc-carusel' />
                    </div>
                <div className='main-slider-doc'>
                <img src={doc2} alt="Doctor" className='img-doc-carusel' />
                </div>
                <div className='main-slider-doc'>
                <img src={doc3} alt="Doctor" className='img-doc-carusel' />

                </div>
        </Carousel>
        </div>
  )
}
