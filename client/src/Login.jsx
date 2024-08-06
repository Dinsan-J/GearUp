import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import Car from './car.jpg';
import mail from './mail.png';
import plock from './plock.png';
import dp from './dp.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Added state for signup
  const [signupEmail, setSignupEmail] = useState(''); // Added state for signup email
  const [signupPassword, setSignupPassword] = useState(''); // Added state for signup password
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setFeedback('');
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      setLoading(false); // Stop loading
  
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/home'); // Navigate to Home page
      } else {
        setFeedback(data.message); // Show feedback
      }
    } catch (error) {
      setLoading(false); // Stop loading
      setFeedback('             Error logging in. Please try again.'); // Show feedback
      console.error('Error logging in:', error);
    }
  };
  
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setFeedback('');
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username: name, 
          email: signupEmail, 
          password: signupPassword 
        }),
      });
  
      const data = await response.json();
      setLoading(false); // Stop loading
  
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/home'); // Navigate to Home page
      } else {
        setFeedback(data.message); // Show feedback
      }
    } catch (error) {
      setLoading(false); // Stop loading
      setFeedback('Error signing up. Please try again.'); // Show feedback
      console.error('Error signing up:', error);
    }
  };
  
  

  return (
    <div className='log'>
      <div className="containerl">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src={Car} alt="" />
            <div className="text">
              <span className="text-1">Every Vehicle is a <br /> new adventure</span>
              <span className="text-2">Let's get flying</span>
            </div>
          </div>
          <div className="back">
            <img className="backImg" src={Car} alt="" />
            <div className="text">
              <span className="text-1">Complete miles of journey <br /> with one step</span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form onSubmit={handleLogin}>
                <div className="input-boxes">
                  <div className="input-box">
                    <img src={mail} alt="" />
                    <input
                      type="text"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <img src={plock} alt="" />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="text">
                    <NavLink to="/Forpass">Forgot password?</NavLink>
                  </div>
                  <div className="button input-box">
                    <input type="submit" value={loading ? 'Loading...' : 'Submit'} disabled={loading} />
                  </div>
                  <div className="text sign-up-text">
                    Don't have an account? <label htmlFor="flip">Sign up now</label>
                  </div>
                  {feedback && <div className="feedback">{feedback}</div>}
                </div>
              </form>
            </div>
            <div className="signup-form">
              <div className="title">Signup</div>
              <form onSubmit={handleSignup}>
                <div className="input-boxes">
                  <div className="input-box">
                    <img src={dp} alt="" />
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <img src={mail} alt="" />
                    <input
                      type="text"
                      placeholder="Enter your email"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <img src={plock} alt="" />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="button input-box">
                    <input type="submit" value={loading ? 'Loading...' : 'Submit'} disabled={loading} />
                  </div>
                  <div className="text sign-up-text">
                    Already have an account? <label htmlFor="flip">Login now</label>
                  </div>
                  {feedback && <div className="feedback">{feedback}</div>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Login;

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={isActive ? 'active' : ''}>
      {children}
    </Link>
  );
}
