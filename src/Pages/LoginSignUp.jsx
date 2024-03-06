import React from "react";
import './CSS/LoginSignup.css';
import { Link } from "react-router-dom";

const LoginSignUp = () => {
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button type="submit">Continue</button>
                <p className="loginsignup-login">Already have an account? <span><Link to={'/login'} style={{textDecoration: 'none'}, { color: "#5c5c5c"}}>Login here</Link></span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, i agree to the terms of use and privacy policy</p>
                </div>
            </div>
        </div>
    );
}

export default LoginSignUp;