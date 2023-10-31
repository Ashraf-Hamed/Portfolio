import React from 'react'
import 'animate.css';
import { Helmet } from 'react-helmet';
import BackGroundAnimation from '../BackGroundAnimation/BackGroundAnimation';

export default function Services() {
  return (
    <>


        <header className='services py-5'> 

        <Helmet>
        <meta charSet="utf-8" />
        <title>Services</title>
      </Helmet>
      <BackGroundAnimation/>
        
            <div className="container">
            
                  <div className="row">
                  
                      <div className="row-md-12">
                          <div className="info">
                            <h5>Welcome to <br /> Services Section</h5>
                          </div>

                          <div className="softSkill overflow-hidden">
                              <div className="row text-center fw-bold mt-5 g-5">
                                <div className="col-md-3 mb-4   animate__animated  animate__backInLeft ">
                                    <div className="details">
                                        <i className="fa fa-code text-main mb-4"></i>
                                        <p>Clean and Professional codes</p>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-4   animate__animated animate__backInLeft">
                                    <div className="details">
                                        <i className="fa fa-mobile  text-main mb-4"></i>
                                        <p>Fully Responsive Design</p>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-4  animate__animated  animate__backInLeft">
                                    <div className="details">
                                        <i className="fa fa-magic text-main mb-4"></i>
                                        <p>Creative and Modern Design</p>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-4   animate__animated animate__backInLeft">
                                    <div className="details">
                                        <i className="fa fa-font text-main mb-4"></i>
                                        <p>Free Google font and Icon Used</p>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-4 animate__animated animate__backInRight">
                                    <div className="details">
                                        <i className="fa fa-rocket text-main mb-4"></i>
                                        <p>Clean and Professional codes</p>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-4 animate__animated animate__backInRight">
                                    <div className="details">
                                        <i className="fa fa-clone text-main mb-4"></i>
                                        <p>Smooth Transition Effects</p>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-4 animate__animated animate__backInRight">
                                    <div className="details">
                                        <i className="fa fa-crop text-main mb-4"></i>
                                        <p>Easily Customizable</p>
                                    </div>
                                </div>
                                
                              </div>
                          </div>
                      </div>
                  </div>
            </div>
        </header>

    </>
  )
}
