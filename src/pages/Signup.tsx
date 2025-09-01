import Logo from "../home/Logo";
import "../style/login.css" // Reuse the same CSS
import { Github, Chrome, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  GithubAuthProvider,
  updateProfile
} from 'firebase/auth';
import { auth } from '../firebase_config/config';

function Signup() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      );
      
      // Update user profile with name
      await updateProfile(userCredential.user, {
        displayName: formData.name
      });

      console.log('Signup successful:', userCredential.user);
      navigate('/');
    } catch (error) {
      console.error('Signup error:', error);
      
      switch (error) {
        case 'auth/email-already-in-use':
          setError('An account with this email already exists.');
          break;
        case 'auth/invalid-email':
          setError('Please enter a valid email address.');
          break;
        case 'auth/weak-password':
          setError('Password is too weak. Please choose a stronger password.');
          break;
        default:
          setError('Signup failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError('');
    
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log('Google signup successful:', result.user);
      navigate('/');
    } catch (error) {
      console.error('Google signup error:', error);
      setError('Google sign-up failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    setLoading(true);
    setError('');
    
    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log('GitHub signup successful:', result.user);
      navigate('/');
    } catch (error) {
      console.error('GitHub signup error:', error);
      setError('GitHub sign-up failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <span className="back-home" onClick={() => navigate("/")}>  
          &larr; Back to Login
        </span>
        <div className="login-box">
          <div className="logo-header">
            <Logo conName="logo-container" logo="logo" spanName="title"/>
            <h3>Create Account</h3>
            <p>Sign up to start shopping with us</p>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter your full name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />

            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            
            <label htmlFor="password">Password</label>
            <div className="password-input-container">
              <input 
                type={showPassword ? "text" : "password"}
                id="password" 
                name="password" 
                placeholder="Create a password" 
                value={formData.password}
                onChange={handleChange}
                required 
              />
              <button 
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-input-container">
              <input 
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword" 
                name="confirmPassword" 
                placeholder="Confirm your password" 
                value={formData.confirmPassword}
                onChange={handleChange}
                required 
              />
              <button 
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button 
              type="submit" 
              className="login-btn"
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>

            <p className="continue-with">OR CONTINUE WITH</p>
            
            <div className="social-login">
              <button 
                type="button"
                className="google-btn"
                onClick={handleGoogleSignIn}
                disabled={loading}
              >
                <Chrome width={20}/>
                Google
              </button>
              <button 
                type="button"
                className="facebook-btn"
                onClick={handleGithubSignIn}
                disabled={loading}
              >
                <Github width={20}/>
                GitHub
              </button>
            </div>
            
            <p className="signup-link">
              Already have an account? 
              <button 
                type="button"
                className="sign-up"
                onClick={() => navigate('/login')}
              >
                Sign In
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;