import React from 'react'
import line from "../../assets/line.png"
import vertical from "../../assets/vertical.png"
import * as Bi from "react-icons/bi"
import "../../Styling/Services.css"


export default function Service(props) {
  return (<div className='services-page'>
        <h1 className='category-header'>{props.title}</h1>
    <div className='container-services'>
        {props.categories.map((items, index) => {
            return (
                <div className={items.acName} key={index}>
                    <div className={items.imgcName}>
                        <img src={items.img} alt="services" className='img-services'></img>
                    </div>
                <div className={items.cName} >
                    <h1 className='vaccin-title'> {items.title} </h1>
                    <p className='infos'>{items.infos}</p>
                    <p className='time-p'>
                        <Bi.BiTime/>
                        {items.durata}
                    </p>
                    <a href='tel:0746878517' className='a-tarif'>
                    <button className='tarif-button'>
                        {items.tarif}
                    </button>
                     </a>
                    <img src={vertical} className="vertical-sus" alt='line'></img>
                    <img src={line} className="orizontal-sus" alt='line'></img>
                    <img src={vertical} className="vertical-jos" alt='line'></img>
                    <img src={line} className="orizontal-jos" alt='line'></img>
                </div>
                </div>
            )})}
    </div>
    </div>
  )
}
