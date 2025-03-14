import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate(); // Hook to handle navigation
  const [users, setUsers] = useState([]);

  // Simulating fetching user scores from an API or backend
  useEffect(() => {
    // In a real app, replace this with an actual fetch call to a backend
    const fetchedUsers = [
      { name: 'User 1', email: 'user1@gmail.com', score: 8 },
      { name: 'User 2', email: 'user2@gmail.com', score: 10 },
      { name: 'User 3', email: 'user3@gmail.com', score: 7 },
    ];

    setUsers(fetchedUsers);
  }, []);

  // Handle logout (redirect to login page)
  const handleLogout = () => {
    // You can clear any authentication data here (e.g., token, user info)
    // localStorage.removeItem('authToken');
    navigate('/'); // Redirect to login page
  };

  return (
    
    <div className="admin-container">
      <h2 className="admin-header">Admin Dashboard</h2>
      <button onClick={handleLogout} className="logout-button">Logout</button>

      <table className="user-table">
        <thead>
          <tr>
            <th className="table-header">Name</th>
            <th className="table-header">Email</th>
            <th className="table-header">Score</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="table-data">{user.name}</td>
              <td className="table-data">{user.email}</td>
              <td className="table-data">{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
