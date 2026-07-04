import React, { useState } from "react";
import './Auth.css'
import { Link } from "react-router-dom";


const AuthLogin: React.FC = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [submitting, setSubmitting] = useState<boolean>(false);
 
    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
    
        setSubmitting(true);
        // Replace this with your real auth call
        setTimeout(() => {
            setSubmitting(false);
            console.log("Logging in with", { email, password });
        }, 900);
    }
    return (
    <div className="login-wrap" >
        <form className="login-card" onSubmit={handleSubmit} >
            <h1 className="login-brand">Welcome back!</h1>
            <p className="login-sub">Sign in to continue to your account.</p>
    
    
            <div className="field">
                <label htmlFor="email">Email</label>
                <div className="field-input">
                    
                    <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    />

                </div>
            </div>
    
            <div className="field">
                <label htmlFor="password">Password</label>
                <div className="field-input">
                    <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
    
            <button className="submit-btn" type="submit" disabled={submitting}>
                {submitting ? "Signing in..." : "Sign in"}
            </button>
    
            <p className="signup-line">
            Don't have an account? <Link to="/authSignup">Sign up</Link>
            </p>
        </form>
    </div>
  )
}


export default AuthLogin
