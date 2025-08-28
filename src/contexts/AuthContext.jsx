import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize user from localStorage if available
    const storedUser = localStorage.getItem('hostelUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const signup = async (userData) => {
    // Mock signup function
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = {
          email: userData.email,
          name: userData.name,
          role: 'student' // Default role for signups
        };
        setUser(newUser);
        localStorage.setItem('hostelUser', JSON.stringify(newUser));
        resolve();
      }, 1000); // Simulate network delay
    });
  };

  const login = async (email, password) => {
    // Mock login function
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = {
          email,
          name: email.split('@')[0],
          role: email.includes('admin') ? 'admin' : 'student'
        };
        setUser(user);
        localStorage.setItem('hostelUser', JSON.stringify(user));
        resolve();
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('hostelUser');
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};