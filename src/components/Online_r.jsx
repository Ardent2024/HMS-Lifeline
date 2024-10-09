import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "./Modal"; // Import your Modal component


function Online_r() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5003/api/onrelo/login", { email, password });

      if (response.status === 200) {
        setModalMessage("File downloaded successfully!");
        setMessageType("success");
        setShowModal(true);

        // File download logic
        const downloadResponse = await axios.get("http://localhost:5003/api/onrelo/download-report", { responseType: "blob" });
        const url = window.URL.createObjectURL(new Blob([downloadResponse.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "report.pdf"); // Name of the downloaded file
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        setModalMessage("Login failed. Please try again.");
        setMessageType("error");
        setShowModal(true);
      }

    } catch (error) {
      const errorMessage = error.response?.data?.error || "An error occurred";
      setModalMessage(errorMessage);
      setMessageType("error");
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalMessage("");
  };

  return (

    <>
    <header className="logo2 life">
    <nav className="navbar navbar-expand-lg bg-body-tertiary container-fluid fixed-top hii">
<div className="container-fluid">
  <div className="icon2"></div>
  <div className="life1">
    <i>LifeLine</i>
  </div>
  <button
    className="navbar-toggler change"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/#" className="nav-link active mt-3 ho">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Doctor" className="nav-link active mt-3 ho">
          Doctor with us
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Health" className="nav-link active mt-3 ho">
          Health package
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Emergency" className="nav-link active mt-3 ho">
          Emergency
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link active mt-3 ho" href="#">
          Online report
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle active mt-3"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          More
        </a>
        <ul className="dropdown-menu">
          <li>
            <Link to="/Feedback" className="dropdown-item">
              Feedback
            </Link>
          </li>
          <li>
            <Link to="/Cont" className="dropdown-item">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/Adminlogin" className="dropdown-item">
              Admin
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link to="/Logins">
          <button className="book">Book Appointment</button>
        </Link>
      </li>
    </ul>
  </div>
</div>
</nav>
</header>


    <div>
      <div className="bd">
        <div className="div-h2">
          <h1 className="hd">Download Your Report</h1>
        </div>
        <div className="Login-Box">
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="mail" className="ml">Email :</label><br />
              <input
                type="text"
                id="mail"
                className="mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              /><br /><br />

              <label htmlFor="pass" className="ps">Password :</label><br />
              <input
                type="password"
                id="pass"
                className="pass"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              /><br /><br />

              <div className="rdr-rg">
                <p>Don't have an account? <Link to="/Regis">Register</Link></p>
              </div><br />

              <input type="submit" className="sub-bt" value="Download" />
            </form>
          </div>
        </div>

        {showModal && (
          <Modal
            message={modalMessage}
            messageType={messageType}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
    </>
  );
}

export default Online_r;