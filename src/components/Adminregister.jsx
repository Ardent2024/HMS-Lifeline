import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Modal from "./Modal"; // Importing the modal for error/success messages

function Adminregister() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [modalMessage, setModalMessage] = useState("");
    const [modalType, setModalType] = useState("");
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset modal
        setModalMessage("");
        setModalType("");
        setShowModal(false);

        // Frontend validation for password match
        if (password !== confirmPassword) {
            setModalMessage("Passwords do not match");
            setModalType("error");
            setShowModal(true);
            return;
        }

        try {
            const response = await fetch("https://admin-login-registration.onrender.com/api/admin/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, confirmPassword }),
            });

            const data = await response.json();

            // Show modal based on response
            if (data.type === "error") {
                setModalMessage(data.message);
                setModalType("error");
            } else {
                setModalMessage(data.message);
                setModalType("success");

                // Navigate to Admin login page after successful registration
                setTimeout(() => {
                    navigate("/Adminlogin"); // Use useNavigate to redirect
                }, 2000);
            }

            setShowModal(true);
        } catch (error) {
            setModalMessage("Server error. Please try again later.");
            setModalType("error");
            setShowModal(true);
        }
    };

    return (
        <div>
            <div className="div-h2">
                <h1 className="hd">Register</h1>
            </div>
            <div className="Login-Box">
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="mail" className="ml">Email:</label><br />
                        <input
                            type="email"
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

                        <label htmlFor="confpass" className="cps">Confirm Password:</label><br />
                        <input
                            type="password"
                            id="confpass"
                            className="confpass"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        /><br /><br />

                        <input type="submit" className="sub-bt" value="Register" />
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

export default Adminregister;
