import React, { useState } from "react";
import './Auth.css'
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "./utils/auth";


const AuthSignup: React.FC = () => {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState<boolean>(false);
 
    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
    
        setSubmitting(true);
        
        setTimeout(() => {
            setSubmitting(false);
            const check = registerUser({name, email, password});
                if(!check){
                    console.error("error Submiting your data");
                    return;
                }
                console.log("Registering in with", { email, password });
            
            navigate("/authLogin");
        }, 900);
    }
    return (
    <div className="login-wrap" >
        <form className="login-card" onSubmit={handleSubmit} >
            <h1 className="login-brand">Register</h1>
            <p className="login-sub">Ready to dive in to the future.</p>
    
    
            <div className="field">
                <label htmlFor="name">Name</label>
                <div className="field-input">
                    
                    <input
                    id="name"
                    type="text"
                    placeholder="XYZ"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    />

                </div>
            </div>

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
                {submitting ? "Signing up..." : "Sign up"}
            </button>
    
            <p className="signup-line">
                <p> Don't have an account? </p><Link to="/authLogin"><i className="fas fa-sign-in-alt"></i> SingIn</Link>
            </p>
        </form>
    </div>
  )
}

export default AuthSignup
