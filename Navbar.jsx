import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { Link } from 'react-scroll'
// we installed package of react scroll
const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])
  const [mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu=()=>{
    mobileMenu?setMobileMenu(false): setMobileMenu(true);

  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ""}`}>
      <p className='nav-logo'>Future-Upskill🧠🥇 </p>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><button className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></button></li>
      </ul>
      <img src="https://cdn-icons-png.flaticon.com/128/8212/8212733.png" alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
