import React from 'react'
import logo from "../../assets/deplasare.png"

import * as Bs from "react-icons/bs"
import * as Gr from "react-icons/gr"
import * as Fa from "react-icons/fa"
import * as Io from "react-icons/io5"
import "../../Styling/Footer.css"
import { Link } from 'react-router-dom'



export default function Footer() {
  return (
    <div className='footer'>
    <div className='footer-container'>
      <div className='footer-logo'>
        <img src={logo} alt="Logo" className='footer-logo-image'></img>
        <a href="tel:+0746878517" className='links-footer'><Bs.BsFillTelephoneFill className='icon'/><p>07468785117</p></a>
        <a href="mailto:adioprea@gmail.com" className='links-footer'><Io.IoPaperPlaneOutline  className='icon'/><p>Trimite email</p></a>
       <div className='icons-container'>
        <a href="https://www.instagram.com" className='links-footer-apps instagram'><Fa.FaInstagram className='apps'/></a>
        <a href="https://www.facebook.com" className='links-footer-apps facebook'><Gr.GrFacebookOption className='apps'/></a>
        <a href="https://www.w3schools.com/" className='links-footer-apps linkedin'> <Fa.FaLinkedinIn className='apps'/></a>
      </div>
      </div>
      <div className='footer-middle'>
        <p className='para-footer'><span className='para-span'>Luni </span > : 09:00 - 22:00</p>
        <p className='para-footer'><span className='para-span'>Marti </span> : 09:00 - 22:00</p>
        <p className='para-footer'> <span className='para-span'>Miercuri  </span> : 09:00 - 22:00</p>
        <p className='para-footer'><span className='para-span'>Joi  </span> : 09:00 - 22:00</p>
        <p className='para-footer'><span className='para-span'>Vineri  </span> : 09:00 - 22:00</p>
        <p className='para-footer'><span className='para-span'>Sambata  </span> : 11:00 - 22:00</p>
        <p className='para-footer'><span className='para-span'>Duminica  </span> : 12:00 - 15:00</p>
      
      </div>
      <div className='footer-contact'>
        <div className='container-links'>
        <Link to="/" className='links-footer-contact'>Acasa</Link>
        <Link to="/servicii" className='links-footer-contact'>Servicii</Link>
        <Link to="/about" className='links-footer-contact'>About us</Link>
        <Link to="/contact" className='links-footer-contact'>Contact</Link>
        </div>
      </div>
    </div>
      <div className='producator-container'>
      <h3>Copyright © 2021-<span>{(new Date().getFullYear())}</span> www.kevinvetdoc.com All rights reserved.
                Site designed and built by Front-End Developer: Adi Cotirla <a href="mailto:adioprea53@gmail.com">adioprea53@gmail.com</a>
                </h3> 
      </div>
    </div>
  )
}
