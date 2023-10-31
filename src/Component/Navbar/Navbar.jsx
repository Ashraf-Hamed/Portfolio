import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import moon from '../../assets/image/moon.png'
import sun from '../../assets/image/sun.png'

export default function Navbar() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode])
  

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  



  return (
    <>
      <header>
      <nav className="navbar navbar-expand-sm navbar-light  py-3 ">
      <div className="container">
        <Link className="navbar-brand" to={'/'}>
         <i className="fab fa-codepen text-color me-2 text-center  fw-bold"></i> ASHRAF HAMED
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
        
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0 fw-semibold ">
            <li className="nav-item mx-2 ">
              <NavLink to={'/'} className="nav-link" href="#" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to={'about'} className="nav-link" href="#">
                About Us
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to={'skill'} className="nav-link" href="#">
                Skills
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to={'portfolio'} className="nav-link" href="#">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to={'services'} className="nav-link" href="#">
                Services
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to={'contact'} className="nav-link" href="#">
                Contact Me
              </NavLink>
            </li>
          </ul>

         
         <img src={isDarkMode ? sun : moon} onClick={toggleDarkMode} alt="" id="icon" className="d-block mx-auto" />
           

        </div>
  
      </div>
        
    </nav>
      </header>
    </>
  );
}
