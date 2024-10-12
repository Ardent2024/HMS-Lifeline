import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Bookapp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    date: '',
    doctor: '',
  });

  const [submitted, setSubmitted] = useState(false); // State to handle form submission
  const [emailSent, setEmailSent] = useState(false); // To track if email was sent successfully
  const [error, setError] = useState(''); // State to handle errors

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Appointment Data:', formData);

    // Show the thank you message
    setSubmitted(true);

    // Send data to the backend to save appointment and send confirmation email
    try {
      await axios.post('https://book-appointment-yckn.onrender.com/send-confirmation', formData);
      setEmailSent(true);
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error('Error sending confirmation email or saving appointment:', error);
      setEmailSent(false);
      setError('Failed to send confirmation email. Please try again.');
    }

    // Clear the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      date: '',
      doctor: '',
    });

    // Hide the thank you message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setEmailSent(false); // Reset email sent status
      setError(''); // Clear any error messages
    }, 5000);
  };

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
                  <Link to="/" className="nav-link active mt-3 ho" aria-current="page">Home</Link>
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
                  <Link to="/Online_r" className="nav-link active mt-3 ho">Online report</Link>
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

      <div className="bg">
        <nav className="navbar">
          <h1 className="navbar-heading">BOOK APPOINTMENT ONLINE</h1>
        </nav>

        <div className="appointment-container">
          <h4 className="cn">Book An Appointment</h4>
          <form className="appointment-form" onSubmit={handleSubmit}>
            <label htmlFor="name" className="label">
              Name:
              <input
                type="text"
                name="name"
                className="ipt"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="email" className="label">
              Email:
              <input
                type="email"
                className="ipt"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="phone" className="label">
              Phone:
              <input
                type="tel"
                className="ipt"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="city" className="label">
              City:
              <input
                type="text"
                className="ipt"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="date" className="label">
              Select Appointment Date:
              <input
                type="date"
                className="ipt"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="doctor" className="label">
              Select Doctor:
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
              >
                <option value="">Select Doctor</option>
                <option value="Dr. Sandeep Budhiraja">Dr. Sandeep Budhiraja</option>
                <option value="Dr. Smith">Dr. Smith</option>
                <option value="Dr. Johnson">Dr. Johnson</option>
                <option value="Dr. Williams">Dr. Williams</option>
              </select>
            </label>
            <button className="but" type="submit">Book Appointment</button>
          </form>

          {/* Display Thank You message or error message when the form is submitted */}
          {submitted && (
            <div className="thank-you-message">
              <h3>Thank you for booking the appointment!</h3>
              <p>We will get back to you soon.</p>
              {emailSent ? (
                <p>A confirmation email has been sent to {formData.email}</p>
              ) : (
                <p>{error}</p>
              )}
            </div>
          )}
        </div>
        <h2 className='hh'>Meet Our Experienced Doctors</h2>
      </div>
    </>
  );
};

export default Bookapp;
