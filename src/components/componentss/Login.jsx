// pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/componentss/AuthContext';
import LoginForm from '../components/componentss/LoginForm';
import AuthLayout from '../components/componentss/AuthLayout';

const Login = () => {
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e, credentials) => {
    e.preventDefault();
    setError('');
    
    try {
      // Simulate API call
      const response = await mockLogin(credentials);
      login(response.user);
      navigate(response.user.role === 'admin' ? '/dashboard' : '/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthLayout title="Hostel Management System">
      <LoginForm onSubmit={handleSubmit} error={error} />
    </AuthLayout>
  );
};

// Mock login function
const mockLogin = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@hostel.com' && password === 'admin123') {
        resolve({
          user: {
            id: 1,
            name: 'Admin',
            email: 'admin@hostel.com',
            role: 'admin',
            token: 'fake-jwt-token'
          }
        });
      } else if (email === 'student@hostel.com' && password === 'student123') {
        resolve({
          user: {
            id: 2,
            name: 'Student',
            email: 'student@hostel.com',
            role: 'student',
            token: 'fake-jwt-token'
          }
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

export default Login;