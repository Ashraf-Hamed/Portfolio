import React, { useEffect, useRef } from "react";
import image from "../../assets/image/3426526.png";
import Typed from "typed.js";
import 'animate.css';
import { Helmet } from "react-helmet";
import BackGroundAnimation from "../BackGroundAnimation/BackGroundAnimation";

export default function Home() {
  let el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front-end Developer. "],

      startDelay: 200,
      typeSpeed: 100,
       backDelay: 110,
      backSpeed: 110,
      smartBackspace: true,
      showCursor: false,
      
    });
  }, []);

  return (
    <>
      <header className="Home overflow-hidden ">

      <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
     </Helmet>
       

     <BackGroundAnimation/>
 
        <div className="container  pt-5">
          <div className="row justify-content-center align-items-center gx-3">
            <div className="col-lg-7 col-md-12">
              <div className="image animate__animated animate__backInLeft animate-duration animate-delay ">
                <img src={image} className="w-100" alt="Coding" />
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="info animate__animated  animate__backInRight">
                <h5 className="fw-bold ">Welcome To My Portfolio</h5>
                <p className="text-main fs-1 overflow-hidden fw-bold " ref={el}></p>
                <span className="fw-semibold my-2 d-block">
                  Hi, i'm Ashraf Mohmmed Hamed , Front End Developer with 1+
                  years of hands-on experience designing, developing, and
                  implementing applications and solutions using a range of
                  technologies and programming languages. Seeking to leverage
                  broad development experience and hands-on technical expertise
                  in a challenging role as a Front End Developer.
                </span>
                <ul className="my-4 p-0 d-flex  align-items-center ">
                  <li className="d-inline-block me-5">
                    <a
                      href="https://drive.google.com/file/d/1Mau6oUQunnginarJijspy281SoNPgzFC/view?usp=drive_link"
                      download
                      target="_blank"
                    >
                      <button
                        className="btn  Download "
                        
                      >
                        MY CV
                      </button>
                    </a>
                  </li>
                  
                  <div className="social">
                  <li className=" d-inline-block ">
                  <a href="https://www.facebook.com/ashrafhamed367" target="_blank">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li className=" d-inline-block ">
                  <a href="https://www.linkedin.com/in/ashraf-hamed-66581b204/" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li className=" d-inline-block ">
                  <a href="https://github.com/Ashraf-Hamed" target="_blank">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li className=" d-inline-block ">
                <a href="https://api.whatsapp.com/send?phone=201026760747" target="_blank">
                   
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
                  </div>
                 
                </ul>
              </div>
            </div>
           
          </div>
        </div>
        
      </header>
     
    </>
  );
}
