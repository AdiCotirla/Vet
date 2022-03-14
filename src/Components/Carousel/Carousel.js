import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import "../../Styling/Slider.css"
import { Link } from 'react-router-dom';

export default function Slider() {
    return (
        <>
            <Carousel className='main-slider' 
             swipeable={false}
             showThumbs={false}
             showStatus={false}
             autoPlay ={"stopOnHover"}
             infiniteLoop>
            <div className='image-container'>
                    <p className="legend">Stiai ca Ectropionul, afectiune in care pleoapa inferioara se rasfrange in exterior, facilitand expunere conjuctivala cu afectarea filmului lacrimal poate induce conjuctivita. Netratata, in tip apar secretii purulente la nivel ocular, insotit de prurit iar comportamentul animalului se poate schimba. </p>
                    <Link to="/servicii/oftalmologie" className='more'>Vedeti mai multe...</Link>
                </div>
                <div className='image-container'>
                    <p className="legend">Keratoconjuctivita sicca este una dintre cele mai comune afectiune oculare la caine, care afecteaza productia si calitatea filmului lacrimal. Datorita acestui fenomen apare sindromul de ochi uscat care, la randul lui, netratat da iritatie oculara, ifectii secundare si in cazuri extreme ulcer cornean cu pierderea vederii.</p>
                    <Link to="/servicii/oftalmologie" className='more'>Vedeti mai multe...</Link>
                </div>
                <div className='image-container'>
                    <p className="legend">Sufera animalul tau de zone de alopecie? Acestea se pot datora mai multor afectiuni. Dermatita atopica ( dermatita alergica) este una din afectiunile care se manifesta cu zone de alopecie  care apare la tineretul canin intre 1 si 3 ani.</p>
                    <Link to="/servicii/dermatologie" className='more'>Vedeti mai multe...</Link>
                </div>
                <div className='image-container'>
                    <p className="legend">Starea de sanatate a animalului tau este afectata atat de starea blanii, a ochilor, cat si a comportamentului general. Modificarile comportamentale sunt deseori asociate cu unele afectiuni sistemice.</p>
                    <Link to="/servicii/general" className='more'>Vedeti mai multe...</Link>
                </div>
            </Carousel>
        </>
    )
}
