import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'
import SignUp from './SignUp'
import UserProfile from './UserProfile'
import AdminLogin from './AdminLogin'
import AdminDashboard from './AdminDashboard'

function Body() {
    
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/Admin-Dashboard" element={<AdminDashboard />} />
          </Routes>
        </Router>
      );
}

export default Body