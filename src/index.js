import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login'; // Ensure this is the correct path
import App from './components/App.js'; // Ensure this is the correct path
import Admin from './components/admin.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/Quizz" element={<Login />} /> {/* Login Page */}
      <Route path="/quiz" element={<App />} /> {/* Quiz App */}
      <Route path='/admin' element={<Admin/>}/> {/* Admin page */}
    </Routes>
  </Router>
);
