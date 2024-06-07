import React, {useState } from 'react';
// import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../../Image/logoo.png"
// 

import Dropdown from '../Dropdown/Dropdown';
// 
function Navbar() {

  const [click, setClick] = useState(false);
  // 
  const [dropdown, setDropdown] = useState(false);
  // 

  const[navbar,setNavbar]=useState(false);

  const changeBackground=()=>{
    if(window.scrollY>=20){
        setNavbar(true);
    }else{
        setNavbar(false);
    }
  }

  window.addEventListener("scroll", changeBackground);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // 
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
  // 

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
         <img className='homelogo' src={logo} alt='logo'/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          {/*  */}
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/tutorial'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Tutorial<i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          {/*  */}
          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links backgrounds'
              onClick={closeMobileMenu}
            >
              Let's Talk
            </Link>
          </li>
          {/* <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li> */}
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;