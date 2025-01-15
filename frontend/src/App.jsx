// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

import '@fortawesome/fontawesome-free/css/all.min.css';


import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Hackathon from './pages/Hackathonmain';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Teamlogin from './components/teamlogin';
import TeamManagement from './components/teamlogin2';
import TeamManagementPage from './pages/HackDemo';
import CreateTeam from './components/Createteam';
import Developer from "./pages/Developer";
import Footer from "./components/Footer";
import WorkshopPage from './pages/WorkshopPage';

function App() {
    return (
        <>

            <Router>
                <Navbar />
                <AuthProvider>
                    <Toaster position="top-right" />
                    <Routes>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/hackathon" element={<Hackathon />} />
                        {/* <Route path="/workshop" element={<Workpage />} /> */}
                        <Route path='/workshop' element={<WorkshopPage />} />
                        <Route path="/fetch" element={<Teamlogin />} />
                        <Route path="/fetchteam" element={<TeamManagement />} />
                        <Route path="/fetchnew" element={<TeamManagementPage />} />
                        <Route path="/createteam" element={<CreateTeam />} />
                        <Route path="/developer" element={<Developer />} />
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
            <Footer />
        </>
    );
}

export default App;
