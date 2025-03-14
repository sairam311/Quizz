import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function Toggle({ handleChange, isChecked }) {
  const navigate = useNavigate();  // Hook to handle navigation

  // Function to handle logout
  const handleLogout = () => {
    //clear any authentication data here (if necessary)
    // For example, if using localStorage to store a token:
    // localStorage.removeItem('authToken');
    
    // Redirect to the login page after logout
    navigate('/');
  };

  return (
    <div className="toggle-container">
      {/* Sun and Moon icons */}
      <img src={isChecked ? "assets/images/icon-sun-light.svg" : "assets/images/icon-sun-dark.svg"} alt="sun-icon" />
      
      <input 
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">
        <div className="toggle-label">&nbsp;</div>
      </label>
      
      <img src={isChecked ? "assets/images/icon-moon-light.svg" : "assets/images/icon-moon-dark.svg"} alt="moon-icon" />
      
      {/* Logout Button */}
      <button onClick={handleLogout} style={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
}

// Inline styles for the logout button
const styles = {
  logoutButton: {
    marginTop: '10px',
    padding: '8px 20px',
    backgroundColor: '#f44336', // Red color for logout
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    cursor: 'pointer',
  },
};

export default Toggle;
