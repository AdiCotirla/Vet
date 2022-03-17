import React from 'react'
import "../../Styling/Category.css"
import line from "../../assets/line.png"
import vertical from "../../assets/vertical.png"
import { Link } from 'react-router-dom'
import * as Bi from "react-icons/bi"

export default function Service(props) {
  return (<div className='category-page'>
        <h1 className='category-header'>Serviciile noastre</h1>
    <div className='container-category'>
        {props.categories.map((items, index) => {
            return (
                <div className={items.acName} key={index}>
                    <div className={items.imgcName}>
                        <img src={items.img} alt="services" className='img-category'></img>
                    </div>
                <div className={items.cName} >
                    <h1 className='vaccin-title'> {items.title} </h1>
                    <p className='infos'>{items.infos}</p>
                    <p className='time-p'>
                        <Bi.BiTime/>
                        {items.durata}
                    </p>
                    <button className='tarif-button'>
                        {items.tarif}
                    </button>
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
