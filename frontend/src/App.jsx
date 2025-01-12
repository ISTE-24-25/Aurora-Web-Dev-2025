import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Hackathon from './pages/Hackathon';
import Home from './pages/Hackathonmain';
import Navbar from './components/navbar';
import HackDemo from './pages/HackDemo';
import Teams from "./components/Teams";

function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <AuthProvider>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hackathon" element={<Home />} />
          <Route path="/hackathon-info" element={<Hackathon />} />
          <Route path="/hackathon-demo" element={<HackDemo />} />
          <Route path="/hackathon-create" element={<Teams />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
    </>
  );
}

export default App;