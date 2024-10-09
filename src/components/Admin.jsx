import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
// import '../CSS/Admin.css';

const Admin = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments data from backend
    axios.get('http://localhost:5050/getAppointments')
      .then(response => setAppointments(response.data))
      .catch(err => console.log(err));
  }, []);

  // Function to format the date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>

      {/* Navbar */}

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


      {/* Sidebar for navigation */}
      <div className="sidebar">
        <h2>Hospital Lifeline</h2>
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#appointments">Appointments</a></li>
        </ul>
      </div>

      {/* Header section */}
      <div className="header ">
        <div className="logog">Hospital Lifeline Admin Panel</div>
        <div className="profile">
          <span>Admin</span>
        </div>
      </div>

      {/* Dashboard section */}
      <div className="dashboard1 " id="dashboard">
        <h1 className="yal">Dashboard</h1>
        <div className="stats-cards">
          <div className="stat-card">
            <h4>Total Patients</h4>
            <p>150</p>
          </div>
          <div className="stat-card">
            <h4>Total Doctors</h4>
            <p>50</p>
          </div>
        </div>
      </div>

      {/* Appointments management section */}
      <div className="appointments" id="appointments">
        <h1 className="yal">Appointments Management</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Date</th>
              <th>Doctor</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.name}</td>
                <td>{appointment.email}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.city}</td>
                <td>{formatDate(appointment.date)}</td>
                <td>{appointment.doctor}</td>
              </tr>
            ))}



          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
