import React from 'react';
import { Link } from "react-router-dom";

const Health = () => {
  return (
<>
<header className="logo2 life">
                  <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top hii">
                    <div className="container-fluid ">
                      <div className="icon2"></div>
                      <div className="life1">
                        <i className="sahil">LifeLine</i>
                      </div>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <Link to="/" className="nav-link active mt-3 ho" aria-current="page" >Home</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/Doctor" className="nav-link active mt-3 ho">Doctor with us</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/Health" className="nav-link active mt-3 ho">Health package</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/Emergency" className="nav-link active mt-3 ho">Emergency</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/Online_r" className="nav-link active mt-3 ho" >Online report</Link>
                          </li>
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle active mt-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              More
                            </a>
                            <ul className="dropdown-menu">
                              <li><Link to="/Feedback" className="dropdown-item">Feedback</Link></li>
                              <li><Link to="/Cont" className="dropdown-item">Contact Us</Link></li>
                              <li><Link to="/Adminlogin" className="dropdown-item">Admin</Link></li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link to="/Logins"><button className="book">Book Appointment</button></Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </header>



    <div className="package-container">
     

      <div className="banner">
        <h1 className='hello'>Choose Your Health Package</h1>
        <p>Comprehensive health packages designed for your well-being.</p>
      </div>

      <div className="packages">
        <div className="package-box">
          <h3>Basic Health Check</h3>
          <p>Essential tests for overall health.</p>
          <Link to="/Basic"> <button>Learn More</button> </Link>
        </div>
        <div className="package-box">
          <h3>Advanced Health Check</h3>
          <p>Detailed tests including advanced diagnostics.</p>
         <Link to="/Adv"> <button>Learn More</button></Link>
        </div>
        <div className="package-box">
          <h3>Premium Health Check</h3>
          <p>Complete health evaluation and specialist consultation.</p>
          <Link to="/Prem"><button>Learn More</button></Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Health;
