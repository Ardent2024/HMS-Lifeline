import React, { useState } from "react"; 
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Modal from './Modal'; // Import the Modal component

const img = 'image/lg1.png';

function Logins() {
    const navigate = useNavigate();
    const location = useLocation();
    const shouldHideContent = location.pathname !== '/Logins';
    
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // "success" or "error"

    const handleSubmit = async (e) => {
        e.preventDefault();
        setModalVisible(false); // Reset modal visibility

        try {
            // Change the login request URL to your updated API endpoint
            const response = await axios.post('https://login-registration-o11e.onrender.com/api/auth/login', { phone, password });
            setModalMessage("Login successful!");
            setMessageType("success");
            setModalVisible(true);

            // Redirect to a different page upon successful login
            setTimeout(() => {
                navigate('/Bookapp'); // Change this to your desired route
            }, 2000);
        } catch (err) {
            console.error(err);
            // Set error message based on the error response
            setModalMessage(err.response?.data?.message || "Invalid Mobile no. and Password");
            setMessageType("error");
            setModalVisible(true);
        }
    };

    return (
        <div>
            {shouldHideContent ? null : (
                <div>
                    <div className="or-form">
                        <img src={img} alt="Check your internet" className="img-fluid" />
                    </div>
                    <div className="lof">
                        <form className="lf" onSubmit={handleSubmit}>
                            <h3>Login</h3>

                            <label htmlFor="Mynum">
                                <p className="mn">Mobile Number*</p>
                            </label>
                            <div className="mndiv1">
                                <div className="mndiv">+91 | </div>
                                <input
                                    type="number"
                                    id="Mynum"
                                    placeholder="Enter Phone no."
                                    className="mnin"
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>

                            <label htmlFor="Mypass">
                                <p className="pw">Password*</p>
                            </label>
                            <div className="pwdiv1">
                                <div className="pwdiv"></div>
                                <input
                                    type="password"
                                    id="Mypass"
                                    className="pwin"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <p className="reg">
                                For new user <Link to="/Regis" className="lrg">Register</Link>
                            </p>

                            <p className="tac">
                                <input type="checkbox" className="tacin" required /> I agree to our <Link to="/tc" className="tnc">Terms & Conditions</Link>
                            </p>

                            <button className="btn" type="submit">Login</button>
                        </form>
                    </div>

                    {/* Modal for displaying messages */}
                    {modalVisible && (
                        <Modal
                            message={modalMessage}
                            onClose={() => setModalVisible(false)}
                            messageType={messageType}
                        />
                    )}
                </div>
            )}
        </div>
    );
}

export default Logins;
