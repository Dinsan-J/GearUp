import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navigation.css';

// Mock function to get the logged-in user's name
const getUserName = () => {
  try {
    const token = localStorage.getItem('token');
    console.log('Token retrieved:', token);
    if (token) {
      // Replace with actual logic to decode token and get user name
      return 'User'; // Replace with actual user name
    }
    return null;
  } catch (error) {
    console.error('Error getting user name:', error);
    return null;
  }
};

export default function Navigation() {
  const navigate = useNavigate();
  const userName = getUserName();
  console.log('User name:', userName);

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      console.log('Token removed');
      navigate('/Login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="navi">
      <div className='navtable'>
        <table>
          <tbody>
            <tr>
              <td><NavLink to="/Home">Home</NavLink></td>
              <td><NavLink to="/Aboutus">About Us</NavLink></td>
              <td><NavLink to="/Contactus">Contact Us</NavLink></td>
              <td><NavLink to="/Feedback">Feedback</NavLink></td>
              {userName ? (
                <>
                  <td>
                    <button className="logout-button" onClick={handleLogout}>
                      Logout
                    </button>
                  </td>
                </>
              ) : (
                <td><NavLink to="/Login">Login</NavLink></td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function NavLink({ to, children }) {
  return (
    <Link to={to} className={window.location.pathname === to ? "active" : ""}>
      {children}
    </Link>
  );
}
