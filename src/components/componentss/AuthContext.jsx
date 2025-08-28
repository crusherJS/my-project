import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // DEMO USER DATABASE
  const demoUsers = {
    'student@hostel.com': {
      password: 'Student@123',
      name: 'Test Student',
      role: 'student',
      token: 'demo-student-token-123'
    },
    'admin@hostel.com': {
      password: 'Admin@123',
      name: 'Hostel Admin',
      role: 'admin',
      token: 'demo-admin-token-456'
    }
  };

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (demoUsers[email] && demoUsers[email].password === password) {
          const user = {
            email,
            name: demoUsers[email].name,
            role: demoUsers[email].role,
            token: demoUsers[email].token
          };
          setUser(user);
          localStorage.setItem('user', JSON.stringify(user));
          resolve(user);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 500); // Simulate network delay
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);