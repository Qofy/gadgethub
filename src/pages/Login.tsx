import Logo from "../home/Logo";
import "../style/login.css"
import { Github, Chrome } from "lucide-react";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-container">
        <span className="back-home" onClick={() => navigate(-2)} >  
        &larr; Back to Home
        </span>
        <div className="login-box">
          <div className="logo-header">
           <Logo conName="logo-container" logo="logo" spanName="title"/>
          <h3>
            Welcome Back
          </h3>
          <p>Sign in to your account to continue shopping</p>
          </div>
          <form action="" className="login-form">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
            
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
            
            <div className="login-options">
              <div className="remember-me">
                <input type="checkbox" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="login-btn">Sign In</button>
            <p className="continue-with">OR CONTINUE WITH</p>
            <div className="social-login">
              <button className="google-btn"><Chrome width={20}/>Google</button>
              <button className="facebook-btn"><Github width={20}/>GitHub</button>
            </div>
            <p className="signup-link">Don't have an account? <a href="#" className="sign-up">Sign Up</a></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;