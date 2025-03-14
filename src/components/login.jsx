import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Check for correct credentials based on login type (user/admin)
    if (isAdmin) {
      // Admin login condition
      if (email === "admin@gmail.com" && password === "admin") {
      //  console.log('Admin Email:', email);
      //  console.log('Admin Password:', password);

        // Navigate to admin page (page for admin)
        navigate('/admin');
      } else {
        setError('Invalid Admin credentials. Please try again.');
      }
    } else {
      // User login condition
      if (email === "user@gmail.com" && password === "user") {
       // console.log('User Email:', email);
       // console.log('User Password:', password);

        // Navigate to user page (quiz page)
        navigate('/quiz');
      } else {
        setError('Invalid User credentials. Please try again.');
      }
    }
  };

  // Toggle between User Login and Admin Login
  const toggleLoginType = () => {
    setIsAdmin(!isAdmin);
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="login-container" style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Login Type Heading */}
        <h2 style={styles.heading}>{isAdmin ? 'Admin Login' : 'User Login'}</h2>

        {isAdmin ? ( <>
          <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            placeholder='admin@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            placeholder='admin'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        </> )
        
        : ( <>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            placeholder='user@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            placeholder='user'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>     </>)
        }


        {error && <div style={styles.error}>{error}</div>}

        <button type="submit" style={styles.button}>
          Login
        </button>

        {/* Swap Button to switch between User and Admin Login */}
        <div style={styles.toggleContainer}>
          <button type="button" onClick={toggleLoginType} style={styles.toggleButton}>
            Switch to {isAdmin ? 'User' : 'Admin'} Login
          </button>
        </div>
      </form>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
  },
  form: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '15px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    marginBottom: '15px',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
  toggleContainer: {
    marginTop: '15px',
  },
  toggleButton: {
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '16px',
  },
};

export default Login;
