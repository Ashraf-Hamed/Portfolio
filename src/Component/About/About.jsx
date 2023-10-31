import React, { useEffect, useRef } from "react";
import AboutImage from "../../assets/image/5114855.png";
import Typed from "typed.js";
import 'animate.css';
import { Helmet } from "react-helmet";
import BackGroundAnimation from "../BackGroundAnimation/BackGroundAnimation";

export default function About() {
  return (
    <>


      <header className=" overflow-hidden ">

        <Helmet>
          <meta charSet="utf-8" />
          <title>About Us</title>
        </Helmet>

        <BackGroundAnimation/>
        <div className="About">
          <div className="container  pt-5">
            <div className="row justify-content-center align-items-center gx-3">
              <div className="col-lg-7 col-md-12">
                <div className="image animate__animated animate__backInLeft animate-duration animate-delay ">
                  <img src={AboutImage} className="w-100" alt="About Us Image" />
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="info animate__animated  animate__backInRight d-flex justify-content-start flex-column align-items-start ">
                  <h5 className="fw-bold ">Know more <br /> about me</h5>
                  <p className="text-main fs-1 overflow-hidden fw-bold "></p>
                  <span className="fw-semibold my-2 d-block">
                    Experience more than 1 year as a Front End Developer,I Will graduated from faculty of Computers science - MET (2022).
                  </span>
                    <table class="table table-bordered table-striped mt-3
                    ">
                      <thead>
                        <tr>
                          <th scope="row">
                            <i class="fa fa-user  me-2"></i>  Name
                          </th>
                          <td scope="col"> Ashraf Mohamed Ahmed Hamed</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <i class="fa fa-calendar-alt   me-2"></i>  Date of birth
                          </th>
                          <td scope="col">April  17, 2000.</td>
                        </tr>

                        <tr>
                          <th scope="row">
                            <i class="fa fa-address-card  me-2"></i>     Address
                          </th>
                          <td scope="col">Mansoura, Egypt.</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <i class="fa fa-phone  me-2"></i>
                            Phone
                          </th>
                          <td scope="col">
                            <a className="text-dark" href="tel:+20 106 4146 193">+20 1026760747</a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <i class="fa fa-envelope  me-2"></i>
                            Email
                          </th>
                          <td scope="col">

                            <a className="text-dark" href="mailto:ashrafmhmd83@gmail.com">ashrafmhmd83@gmail.com</a>

                          </td>
                        </tr>

                      </tbody>
                    </table>
                </div>
              </div>
            </div>
          </div>
        </div>


      </header>

    </>
  )
}
