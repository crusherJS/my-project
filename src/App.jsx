import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import History from './pages/History';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import StudentDashboard from './pages/Dashboard/StudentDashboard';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState('login');

  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Navbar 
            setShowAuthModal={setShowAuthModal}
            setAuthType={setAuthType}
          />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/history" element={<History />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        <Route path="/Dashboard/StudentDashboard" element={<StudentDashboard />} />
        <Route path="/Dashboard/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/StudentDashboard" element={<StudentDashboard />} />
          </Routes>
          
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;