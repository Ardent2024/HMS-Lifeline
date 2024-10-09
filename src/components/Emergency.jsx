import React from "react";
import { Link } from "react-router-dom";
const Emergency = () => {
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


      <div className= "emergencySection" >
        <h1>Emergency Services</h1>

        <div className="emergencyWarning">
          For life-threatening emergencies, please call 911 immediately.
        </div>

        <div className= "contactInfo">
          <h2>Emergency Department Contact</h2>
          <p>Phone: (555) 123-4567</p>
          <p>Available 24/7</p>
        </div>

        <div className= "services">
          <h2>Our Emergency Services</h2>
          <ul>
            <li>Trauma Care</li>
            <li>Cardiac Emergencies</li>
            <li>Stroke Treatment</li>
            <li>Pediatric Emergencies</li>
            <li>Respiratory Distress</li>
          </ul>
        </div>

        <div className= "whatToExpect">
          <h2>What to Expect</h2>
          <p>Our emergency team is ready to provide immediate care. Upon arrival:</p>
          <ol>
            <li>You'll be quickly assessed by a triage nurse</li>
            <li>Critically ill patients will be seen immediately</li>
            <li>Others will be seen in order of medical priority</li>
          </ol>
        </div>
      </div>

    </>
  )
}
export default Emergency