import React from 'react'
import "../../Styling/Despre.css"
import Slider from '../Carousel/Carousel'
import derma from "../../assets/derma.png"
import ofta from "../../assets/ofta.png"
import general from "../../assets/general.png"
export default function Tips() {
    return (
        <div className='servicii-container'>
            <h1 className='servicii-header'>Servicii</h1>
            <div className='container-tricks'>
                <div className='tips-tricks'>
                    <Slider />
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
    )
}
