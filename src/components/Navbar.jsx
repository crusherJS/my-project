import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme } = useTheme();

  return (
    <nav className={`sticky top-0 z-50 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                HostelHub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}>Home</Link>
              <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}>About</Link>
              <Link to="/history" className={`px-3 py-2 rounded-md text-sm font-medium ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}>History</Link>
              <Link to="/contact" className={`px-3 py-2 rounded-md text-sm font-medium ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}>Contact</Link>
            {/* <Link to="/AdminDashboard" className={`px-3 py-2 rounded-md text-sm font-medium ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}>ADMIN</Link> */}
            </div>
          </div>

          {/* Auth Section */}
          <div className="flex items-center">
            <ThemeToggle />
            
            {user ? (
              <div className="ml-4 flex items-center">
                <Link to={user.role === 'AdminDashboard' ? '/AdminDashboard' : '/StudentDashboard'} className={`px-3 py-2 rounded-md text-sm font-medium ${theme === 'dark' ? 'text-blue-300 hover:bg-gray-800' : 'text-blue-600 hover:bg-gray-100'}`}>Dashboard</Link>
                <button onClick={logout} className={`ml-2 px-3 py-2 rounded-md text-sm font-medium ${theme === 'dark' ? 'text-red-300 hover:bg-gray-800' : 'text-red-600 hover:bg-gray-100'}`}>Logout</button>
              </div>
            ) : (
              <div className="ml-4">
                <Link to="/login" className={`px-3 py-2 rounded-md text-sm font-medium ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}>Login</Link>
                <Link to="/signup" className={`ml-2 px-3 py-2 rounded-md text-sm font-medium ${theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
