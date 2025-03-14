import React from 'react';
import { useNavigate } from 'react-router-dom';

function Toggle({ handleChange, isChecked }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/Quizz');
  };

  return (
    <div className="toggle-container">
      <img
        src={
          isChecked
            ? `${process.env.PUBLIC_URL}/assets/images/icon-sun-light.svg`
            : `${process.env.PUBLIC_URL}/assets/images/icon-sun-dark.svg`
        }
        alt="sun-icon"
      />
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
      <img
        src={
          isChecked
            ? `${process.env.PUBLIC_URL}/assets/images/icon-moon-light.svg`
            : `${process.env.PUBLIC_URL}/assets/images/icon-moon-dark.svg`
        }
        alt="moon-icon"
      />
      <button onClick={handleLogout} style={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  logoutButton: {
    marginTop: '10px',
    padding: '8px 20px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    cursor: 'pointer',
  },
};

export default Toggle;