import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoLocation, IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import axios from "axios";

// Update the backend URI here
const backUri = "https://contact-zpp3.onrender.com";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    location: "",
  });
  const [msg] = useState(" ");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = () => {
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      mobileNumber: formData.mobileNumber,
      location: formData.location,
    };

    emailjs
      .send(
        "service_42w0vmm",
        "template_x83p857",
        templateParams,
        "qrJl2Mu_iLoNCtCbB"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      let response = await axios.post(backUri + "/contact", formData);
      console.log(response);

      if (response.data.success) {
        toast.success(response.data.data);
      } else {
        throw new Error(response.data.data);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

    if (Object.values(formData).every((field) => field !== "")) {
      setFormSubmitted(true);
      setFormErrors(false);
      sendEmail();

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        location: "",
      });
    } else {
      setFormErrors(true);
      setFormSubmitted(false);
    }
  };

  return (
    <>
      {/* Your JSX content remains unchanged */}
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
                  <Link to="Online_r" className="nav-link active mt-3 ho" >Online report</Link>
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

      <ToastContainer />

      <div className="contact_main">
        <div className="contact">
          <h1>Contact Us</h1>
        </div>

        <div className="contact_info">
          <div className="contact_item">
            <div className="contact_icon">
              <IoLocation />
            </div>
            <div className="contact_details">
              <h4>ADDRESS</h4>
              <p>24,1A, Chandi Ghosh Rd, Ashok Nagar, Tollygunge Kolkata, West Bengal 700040</p>
            </div>
          </div>

          <div className="contact_item">
            <div className="contact_icon">
              <CiMail />
            </div>
            <div className="contact_details">
              <h4>EMAIL-ID</h4>
              <p><a href="mailto:lifeline@gmail.com">lifeline@gmail.com</a></p>
            </div>
          </div>

          <div className="contact_item">
            <div className="contact_icon">
              <IoCallOutline />
            </div>
            <div className="contact_details">
              <h4>PHONE</h4>
              <p>022-69197788</p>
              <p>022-62597788</p>
            </div>
          </div>
        </div>

        <div className="connect_section">
          <h2>Connect with us</h2>
          <div className="divp">
            <p>
              {msg} Our aim is to provide our customers with the best medical facilities, constant care, and reliable support. If you would like to get in touch with a doctor from a specific department, would like some specific information about the services we provide, or just have a question for us, please fill up the form below and we will get back to you.
            </p>
          </div>
        </div>

        <div className="sum">
          <div className="map_frame">
            <div className="map">View Map</div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.522717595921!2d88.34314047475463!3d22.484563136192296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270ecc09b4691%3A0x7f99d48523fd066a!2sCalcutta%20Institute%20of%20Engineering%20And%20Management%20(CIEM)!5e0!3m2!1sen!2sin!4v1726934565802!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              className="if"
            ></iframe>
          </div>

          <div className="form_section">
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobileNumber">Mobile Number:</label>
                <input
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn_submit">
                  Submit
                </button>
              </div>
              {formErrors && <p className="error">Please fill in all fields.</p>}
              {formSubmitted && <p className="success">Form submitted successfully!</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
