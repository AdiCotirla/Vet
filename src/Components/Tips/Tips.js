import React from 'react'
import "../../Styling/Despre.css"
import derma from "../../assets/derma.png"
import ofta from "../../assets/ofta.png"
import general from "../../assets/general.png"
import cat from "../../assets/log.png"
import SimpleSlider from '../Carousel/Carousel'
export default function Tips() {
    return (<>
        <div className='servicii-container'>
            <h1 className='servicii-header'>Servicii</h1>
            <div className='container-tricks'>
                <div className='tips-tricks'>
                    <SimpleSlider />
                </div>
                <div className='container-servicii'>
                    <div className='servicii ofta'>
                        <img src={ofta} alt="oftalmologie"/>
                        <h1 className='servicii-hover-header'>Oftalmologie</h1>
                        </div>
                    <div className='servicii derma'>
                        <img src={derma} alt="dermatologie" />
                        <h1 className='servicii-hover-header'>Dermatologie</h1>
                        </div>
                    <div className='servicii generale'>
                        <img src={general} alt="servicii generale" />
                        <h1 className='servicii-hover-header'>General</h1>
                        </div>
                </div>
            </div>
        </div>
            <div className='contact-servicii'>
                <img src={cat} alt="servicii" className='back-contact'></img>
                <h1 className='contact-servicii-header'>Programeaza o intalnire cu doctorul</h1>
                <a href='tel:+0746878517' className='servicii-a'>
                    <button className='servicii-a-buton'>
                        <p className='buton-nr'>0746878517</p>
                    </button>
                </a>
            </div>
            </>
    )
}
