import React, { useState } from "react";
import './Auth.css'
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "./utils/auth";


const AuthLogin: React.FC = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [submitting, setSubmitting] = useState<boolean>(false);
 
    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        setError("");
        setSubmitting(true);

        setTimeout(() => {
            const result = loginUser({ email, password });
            setSubmitting(false);

            if (!result.ok) {
                setError(result.message || "Something went wrong!!");
                console.error(result.message);
                return;
            }

            navigate("/");
        }, 900);
    }
    return (
    <div className="login-wrap" >
        <form className="login-card" onSubmit={handleSubmit} >
            <h1 className="login-brand">Welcome back!</h1>
            <p className="login-sub">Sign in to continue to your account.</p>
    
            {error && <p className="error-text">{error}</p>}
    
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
    
            <div className="signup-line">
                <span>Don't have an account?</span>
                <Link to="/authSignup"><i className="fas fa-user-plus"></i> Sign up</Link>
            </div>
        </form>
    </div>
  )
}


export default AuthLogin
