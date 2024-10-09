import React, { useState } from "react"; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from './Modal'; // Update import path if necessary

function Logins() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); 
    const [successMessage, setSuccessMessage] = useState(""); 
    const [showModal, setShowModal] = useState(false); 
    const [messageType, setMessageType] = useState(""); // State for message type

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(""); 
        setSuccessMessage(""); 

        try {
            const response = await axios.post('https://login-registration-o11e.onrender.com/api/auth/login', { email, password });
            setSuccessMessage("Login successful!");
            setMessageType("success");
            setShowModal(true);
            // Redirect to another page after successful login
            navigate('/dashboard'); // Change this to your desired page
        } catch (err) {
            console.error(err);
            setErrorMessage(err.response?.data?.error || "Login failed. Please try again.");
            setMessageType("error");
            setShowModal(true); 
        }
    };

    return (
        <div>
            <div className="login-form">
                <h3>Login</h3>

                {successMessage && <p className="success-message">{successMessage}</p>} 

                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email*</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password*</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Login</button>
                </form>
            </div>

            {showModal && (
                <Modal 
                    message={errorMessage || successMessage} 
                    messageType={messageType}
                    onClose={() => {
                        setShowModal(false);
                    }} 
                />
            )}
        </div>
    );
}

export default Logins;
