    import React, { useState } from "react";
    import { Link } from 'react-router-dom';
    import './Login.css';
    import Logo from '../assets/icons8-google-24.png';

    const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement login logic here
    };

    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        console.log("Google Sign-In clicked");
    };

    return (
        <div className="login-container text-center">
        <h1 className="main-heading">Login</h1>
        <div className="login-content">
            <form className="form-signin">
            <input
                className="form-control mb-2"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                autoFocus
            />
            <input
                className="form-control mb-2"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
            />
            <button className="btn btn-lg btn-primary btn-block mb-2" onClick={handleSubmit}>Login</button>
            </form>
            <div className="vertical-line"></div>
            <div className="additional-actions">
            {/* Google Sign-In Button */}
            <button className="btn btn-lg btn-google btn-block btn-outline mb-2" onClick={handleGoogleSignIn}>
                <img src={Logo} alt="Google sign-in" className="google-icon"/>
                Sign in with Google
            </button>
            <Link to="/forgot-password" className="link">Forgot Password?</Link>
            <Link to="/register" className="link">New User? Then Register</Link>
            </div>
        </div>
        </div>
    );
    };

    export default Login;
