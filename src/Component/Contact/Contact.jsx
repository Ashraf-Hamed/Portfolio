import React from "react";
import { Helmet } from "react-helmet";
import img from "../../assets/image/5081336.png";
import BackGroundAnimation from "../BackGroundAnimation/BackGroundAnimation";

export default function Contact() {
  return (
    <>
      <header className=" overflow-hidden contact ">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact Us</title>
        </Helmet>
        <BackGroundAnimation/>
        <div className="container  pt-5">
          <div className="row justify-content-center align-items-center gx-3">
            <div className="col-lg-7 col-md-12">
              <div className="image animate__animated animate__backInLeft animate-duration animate-delay ">
                <img src={img} className="w-100" alt="contact Us Image" />
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="info animate__animated  animate__backInRight d-flex justify-content-start flex-column align-items-start ">
                <h5 className="fw-bold ">
                  Get in <br />
                  Touch
                </h5>
              <p className="fs-5 ">
                  Call, email, text me — whatever works for you. I'll be here.{" "}
                  <br /> Let's Talk!
                </p>

                <table class="table table-bordered table-striped mt-3">
                  <thead>
                    <tr>
                      <th scope="row">
                        <i class="fa fa-user main-icon  me-2"></i> Name
                      </th>
                      <td scope="col"> Ashraf Mohamed Ahmed Hamed</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row ">
                        <i class="fa fa-calendar-alt   me-2"></i> Date
                        of birth
                      </th>
                      <td scope="col">April 17, 2000.</td>
                    </tr>

                    <tr>
                      <th scope="row">
                        <i class="fa fa-address-card  me-2"></i>{" "}
                        Address
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
                        <a className="text-dark" href="mailto:ashrafmhmd83@gmail.com">
                          ashrafmhmd83@gmail.com
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr />

                <ul className="d-flex mt-3 ">
                  <li>
                    <a
                      href="https://www.facebook.com/ashrafhamed367"
                      target="_blank"
                    >
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/in/ashraf-hamed-66581b204/"
                      target="_blank"
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Ashraf-Hamed" target="_blank">
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://api.whatsapp.com/send?phone=201026760747"
                      target="_blank"
                    >
                      <i class="fa-brands fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
