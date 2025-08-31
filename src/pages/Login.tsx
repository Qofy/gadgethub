import Logo from "../home/Logo";
import "../style/login.css"
import { Github, Chrome, EyeOff,Eye } from "lucide-react";
import { useNavigate } from "react-router";
import React, { useState } from "react";
import { 
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../firebase_config/config";


function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email:"",
    password:""
  })

  const[loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const[showPassword, setShowPassword] = useState(false);
  const[rememberMe, setRememberMe] = useState(false);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if(error) setError("");
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) =>{
   e.preventDefault();
   setLoading(true);
   setError("");
   try{
    const userCredential = await signInWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );
    console.log("User signed in:", userCredential.user);

    //Store user session if remember me is checked
    if(rememberMe){
      localStorage.setItem("rememberUser", "true");
    }

    // Redirect to home or intended page
    navigate("/");
   } catch(error){
    console.error("Login error:", error);

    //handle Different error types
    switch(error){
      case "auth/user-not-found":
        setError("No user found with this email.");
        break;
      case "auth/wrong-password":
        setError("Incorrect password. Please try again.");
        break;
      case "auth/invalid-email":
        setError("Invalid email address.");
        break;
      case "auth/user-disabled":
        setError("This user account has been disabled.");
        break;
      case "auth/too-many-requests":
        setError("Too many unsuccessful login attempts. Please try again later.");
        break;
      default:
        setError("An error occurred during login. Please try again.");
    }
   }finally{
    setLoading(false);
   }
  };

  //Google Sign-In
  const handleGoogleSignIn = async() => {
    setLoading(true);
    setError("");
    try{
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Google sign-in successful:", result.user);
      navigate("/");
    }catch(error){
      console.error("Google sign-in error:", error);
      setError("An error occurred during Google sign-in. Please try again.");
    }finally{
      setLoading(false);
    }
  };  
  //GitHub Sign-In
  const handleGithubSignIn = async() => {
    setLoading(true);
    setError("");
    try{
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("GitHub sign-in successful:", result.user);
      navigate("/");
    }catch(error){
      console.error("GitHub sign-in error:", error);
      setError("An error occurred during GitHub sign-in. Please try again.");
    }finally{
      setLoading(false);
    }
  };

  //forgot Password
  const handleForgotPassword = async() => {
    if(!formData.email){
      setError("Please enter your email address to reset password.");
      return;
    }
    try{
      await sendPasswordResetEmail(auth, formData.email);
      alert("Password reset email sent. Please check your inbox.");
    }catch(error){
      console.error("Password reset error:", error);
      setError("An error occurred while sending password reset email. Please try again.");
    }
  };
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
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          <form action="" className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange}/>
            
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required  value={formData.password} onChange={handleChange}/>

            <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
            </button>
            
            <div className="login-options">
              <div className="remember-me">
                <input type="checkbox"  id="remember" checked={rememberMe} onChange={(e)=> setRememberMe(e.target.checked)}/>
                <label htmlFor="remember">Remember me</label>
              </div>
              {/* <a href="#" className="forgot-password">Forgot Password?</a> */}
            <button type="button" className="forgot-password"  onClick={handleForgotPassword}>Forgot Password?</button>
            </div>
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </button>
            <p className="continue-with">OR CONTINUE WITH</p>
            <div className="social-login">
              <button className="google-btn" type="button" onClick={handleGoogleSignIn} disabled={loading}><Chrome width={20}/>Google</button>
              <button className="facebook-btn" type="button" onClick={handleGithubSignIn} disabled={loading}><Github width={20}/>GitHub</button>
            </div>
            <p className="signup-link">Don't have an account? <button type="button" onClick={()=> navigate("/signup")} className="sign-up">Sign Up</button></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;