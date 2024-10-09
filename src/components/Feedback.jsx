import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from "react-router-dom";
const Feedback = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        center: '',
        feedbackType: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const { name, phone, email, center, feedbackType, message } = formData;
        if (!name || !phone || !email || !center || !feedbackType || !message) {
            setError('Please fill in all fields.');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            emailjs.send('service_lxalokh', 'template_1susbjm', formData, 'jqLGaB7j82wL8oPXi')
                .then(() => {
                    setSubmitted(true);
                    setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        center:'',
                        feedbackType: '',
                        message: ''
                    });
                    setError('');
                })
                .catch(() => {
                    alert('Error sending feedback. Please try again.');
                });
        }
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


    
    
    <div className="feed">
     <h1 className='hhh'>Lifeline Hospital Feedback</h1>

        <div className="feedback-container">
           
            {submitted && (
                <div className="thank-you-message">
                    <p>Thank you for your feedback!</p>
                </div>
            )}

            {!submitted && (
                <form onSubmit={handleSubmit}>
                    {error && <p className="error-message">{error}</p>}

                    <div className="form-group">
                        <label>Name:</label>
                        <input  className="input"
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            placeholder="Enter your Name" 
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone:</label>
                        <input  className="input"
                            type="text" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            placeholder="Enter your Phone" 
                        />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input  className="input"
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder="Enter your Email" 
                        />
                    </div>

                    <div className="form-group">
                        <label>Center:</label>
                        <select name="center" value={formData.center} onChange={handleChange}>
                            <option value="">Select Center...</option>
                            <option value="kolkata">Kolkata</option>
                            <option value="pune">Pune</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="guwahati">Guwahati</option>
                            <option value="ahmedabad">Ahmedabad</option>
                            <option value="shimoga">Shimoga</option>
                            <option value="dhawad">Dhawad</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Feedback Type:</label>
                        <select name="feedbackType" value={formData.feedbackType} onChange={handleChange}>
                            <option value="">Select Feedback Type...</option>
                            <option value="complaint">Complaint</option>
                            <option value="suggestion">Suggestion</option>
                            <option value="compliment">Compliment</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Message:</label>
                        <textarea 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            placeholder="Enter your feedback message"
                        />
                    </div>

                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            )}
        </div>
        </div>

        </>
    );
};

export default Feedback;