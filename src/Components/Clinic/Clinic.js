import React from 'react'
import { Link } from 'react-router-dom';
import * as GrIcons from "react-icons/gr"
import * as BsIcons from "react-icons/bs"
import logo from "../../assets/deplasare.png"

import "../../Styling/Clinic.css"
export default function Clinic() {
    return (
        <div className='clinic-container'>
            <div className='clinic-logo'>
                <Link to='/' className='clinic-logo-a'>
                    <h1 className='header-clinic'>Kevinvet Doc  </h1>
                    <p className='p-header-clinic'>Medic veterinar la domiciliu  </p>
                </Link>
                </div>
                <div className='clinic-emergencies'>
                    <div className='emergencies-number'>
                        <a href='/#' className='emergencies-number-a'>
                            <BsIcons.BsFillTelephoneFill className='phone'/>
                              :0746878517
                            </a>
                    </div>
                    <Link to="/contact" className='linkuri'>
                    <div className='emergencies-appointment'>
                        <GrIcons.GrSchedules className='calendar'/>
                        <p className='programare-p'>
                        Fa o programare
                        </p>
                    </div>
                    </Link>
                </div>
            
        </div>
    )
}
