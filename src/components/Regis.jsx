import React, { useState } from "react"; 
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import axios from 'axios';
import Modal from './Modal'; // Update import path if necessary
const img1 = 'image/lg1.png';

function Regis() {
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpass, setConfpass] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); 
    const [successMessage, setSuccessMessage] = useState(""); 
    const [showModal, setShowModal] = useState(false); 
    const [messageType, setMessageType] = useState(""); // State for message type

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(""); 
        setSuccessMessage(""); 

        if (password !== confpass) {
            setErrorMessage("Passwords do not match.");
            setMessageType("error");
            setShowModal(true); 
            return;
        }

        try {
            await axios.post('http://localhost:5001/api/auth/register', { phone, email, password, confpass });
            setSuccessMessage("Registration successful!");
            setMessageType("success");
            setShowModal(true);
        } catch (err) {
            console.error(err);
            setErrorMessage(err.response?.data?.error || "Registration failed. Please try again.");
            setMessageType("error");
            setShowModal(true); 
        }
    };

    const location = useLocation();
    const shouldHideContent = location.pathname !== '/Regis';

    // Redirect to login page
    const handleRedirect = () => {
        navigate('/Logins'); // Change '/' to the path of your login page if different
    };

    return (
      <>
      


        <div>
            {shouldHideContent ? null : (
                <div>
                    <div className="reg-form">
                        <img src={img1} alt="Check your internet" className="logoo" />
                    </div>
                    <div className="ref">
                        <form className="rf" onSubmit={handleSubmit}>
                            <h3>Register</h3>

                            {successMessage && <p className="success-message">{successMessage}</p>} 

                            <label htmlFor="Num"><p className="mon">Mobile Number*</p></label>
                            <div className="mondiv1">
                                <div className="mondiv">+91 | </div>
                                <input
                                    type="number"
                                    id="Num"
                                    placeholder="Enter Phone no."
                                    className="monin"
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>

                            <label htmlFor="Mail"><p className="ml">Email*</p></label>
                            <div className="mldiv1">
                                <input
                                    type="email"
                                    id="Mail"
                                    placeholder="Enter your email"
                                    className="mlin"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <label htmlFor="Cpass"><p className="cpw">Create Password*</p></label>
                            <div className="cpwdiv1">
                                <input
                                    type="password"
                                    id="Cpass"
                                    placeholder="Create Password"
                                    className="cpwin"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <label htmlFor="Copass"><p className="copw">Confirm Password*</p></label>
                            <div className="copwdiv1">
                                <input
                                    type="password"
                                    id="Copass"
                                    placeholder="Confirm Password"
                                    className="copwin"
                                    onChange={(e) => setConfpass(e.target.value)}
                                    required
                                />
                            </div>

                            <button className="btn" type="submit">Register</button>
                        </form>
                    </div>
                    {showModal && (
                        <Modal 
                            message={errorMessage || successMessage} 
                            messageType={messageType}
                            onClose={() => {
                                setShowModal(false);
                                if (successMessage) handleRedirect(); // Redirect on success
                            }} 
                        />
                    )}
                </div>
            )}
        </div>
        </>
    );
}

export default Regis;
