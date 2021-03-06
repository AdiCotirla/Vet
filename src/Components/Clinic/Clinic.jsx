import React from 'react'
import { Link } from 'react-router-dom';
import * as GrIcons from "react-icons/gr"
import * as BsIcons from "react-icons/bs"

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
                        <a href='tel:+0743131953' className='emergencies-number-a'>
                            <BsIcons.BsFillTelephoneFill className='phone'/>
                              : 0743 131 953
                            </a>
                    </div>
                    <Link to="/contact-us" className='linkuri'>
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
