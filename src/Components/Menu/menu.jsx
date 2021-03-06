import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import '../../Styling/Navbar.css';
import Dropdown from '../SubMenu/SubMenu';
import * as Md from "react-icons/md"
import * as Bs from "react-icons/bs"



function Navbar(props) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };


  const BlurRoot =() => {
    document.getElementById("root").style.backgroundColor = "#00000038;"
  }


  window.onscroll = function() {ShowMenu()};

  function ShowMenu() {
    if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
      document.getElementById("navbar-sticky").style.top = "0";
    } else {
      document.getElementById("navbar-sticky").style.top = "-100%";
    }
  }

  return (
    <div id='navbar'>
      <nav className='navbar'>
        <div className='menu-icon'>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} onClick={()=>{
            handleClick()
            BlurRoot()
          }}/>
          <p>Kevinvet Doc</p>
          <a href='tel:0743131953'>
                            <Bs.BsFillTelephoneFill className='phone'/>
                            </a>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Acasa
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/servicii'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Servicii <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>


      <nav className='navbar-sticky' id="navbar-sticky">
        <Link to='/' className='navbar-logo-sticky' onClick={closeMobileMenu}>
        <Md.MdHealthAndSafety/>
         Kevinvet Doc
        </Link>
        <div className='menu-icon-sticky' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={click ? 'nav-menu-sticky active' : 'nav-menu-sticky'}>
          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Acasa
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/servicii'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Servicii <i className='fas fa-caret-down' />
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;