import React from 'react'
import { CategoryData } from '../../Data/CategoryData'
import "../../Styling/Category.css"
import line from "../../assets/line.png"
import vertical from "../../assets/vertical.png"
import { Link } from 'react-router-dom'

export default function Category() {
  return (<>
        <h1 className='category-header'>Serviciile noastre</h1>
    <div className='container-category'>
        {CategoryData.map((items, index) => {
            return (
                <Link to={items.path} className={items.acName} key={index}>
                    <div className={items.imgcName}>
                        <img src={items.img} alt="services" className='img-category'></img>
                    </div>
                <div className={items.cName} >
                    <h1> {items.title} </h1>
                    <img src={vertical} className="vertical-sus" alt='line'></img>
                    <img src={line} className="orizontal-sus" alt='line'></img>
                    <img src={vertical} className="vertical-jos" alt='line'></img>
                    <img src={line} className="orizontal-jos" alt='line'></img>
                </div>
                </Link>
            )})}
    </div>
    </>
  )
}
