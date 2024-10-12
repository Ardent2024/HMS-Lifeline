import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Modal from "./Modal"; // Import the modal for messages

function Adminlogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [modalMessage, setModalMessage] = useState("");
    const [modalType, setModalType] = useState("");
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset modal state
        setModalMessage("");
        setModalType("");
        setShowModal(false);

        try {
            const response = await fetch("https://admin-login-registration.onrender.com/api/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            // Handle different responses from the backend
            if (data.type === "error") {
                setModalMessage(data.message); // Display error message
                setModalType("error");
            } else {
                setModalMessage("Welcome Admin!"); // Display success message
                setModalType("success");

                // Redirect to the admin page after a short delay
                setTimeout(() => {
                    navigate("/Admin"); // Adjust this route based on your admin page path
                }, 2000);
            }

            setShowModal(true);
        } catch (error) {
            setModalMessage("Server error. Please try again later."); // Handle server errors
            setModalType("error");
            setShowModal(true);
        }
    };

    return (
        <div>
            <div className="div-h2">
                <h1 className="hd">Login</h1>
            </div>
            <div className="Login-Box">
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="mail" className="ml">Email:</label><br />
                        <input
                            type="text"
                            id="mail"
                            className="mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        /><br /><br />

                        <label htmlFor="pass" className="ps">Password:</label><br />
                        <input
                            type="password"
                            id="pass"
                            className="pass"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        /><br /><br />

                        <div className="rdr-rg">
                            <p>Don't have an account? <Link to="/Adminregister">Register</Link></p>
                        </div><br />

                        <input type="submit" className="sub-bt" value="Login" />
                    </form>
                </div>
            </div>

            {showModal && (
                <Modal 
                    message={modalMessage}
                    messageType={modalType}
                    onClose={() => setShowModal(false)} 
                />
            )}
        </div>
    );
}

export default Adminlogin;
