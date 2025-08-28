// components/common/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import Button from './Button';
import { useAuth } from "../../contexts/AuthContext";


const Navbar = () => {
  const { user, logout } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className={`sticky top-0 z-50 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and main links */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <svg
                className={`h-8 w-8 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>
              <span className={`ml-2 text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                HostelHub
              </span>
            </Link>

            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/contact"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  Contact
                </Link>
                {user && (
                  <Link
                    to={user.role === 'admin' ? '/dashboard' : '/request'}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      theme === 'dark'
                        ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    Dashboard
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Right side - Auth and theme controls */}
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-4">
              <ThemeToggle />
            </div>

            {user ? (
              <div className="hidden md:block">
                <div className="flex items-center">
                  <span className={`mr-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Welcome, {user.name}
                  </span>
                  <Button
                    onClick={handleLogout}
                    variant="danger"
                    size="sm"
                  >
                    Logout
                  </Button>
                </div>
              </div>
            ) : (
              <div className="hidden md:block">
                <div className="flex items-center space-x-4">
                  <Link to="/login">
                    <Button variant="outline" size="sm">
                      Login
                    </Button>
                  </Link>
                  <Link to="/request">
                    <Button size="sm">Request Hostel</Button>
                  </Link>
                </div>
              </div>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                className={`p-2 rounded-md ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              theme === 'dark'
                ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              theme === 'dark'
                ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            Contact
          </Link>
          {user ? (
            <>
              <Link
                to={user.role === 'admin' ? '/dashboard' : '/request'}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  theme === 'dark'
                    ? 'text-red-400 hover:bg-gray-700 hover:text-red-300'
                    : 'text-red-600 hover:bg-gray-100 hover:text-red-800'
                }`}
              >
                Logout
              </button>
            </>
          ) : (
            <div className="pt-4 pb-2 border-t border-gray-200 dark:border-gray-700">
              <div className="space-y-2">
                <Link
                  to="/login"
                  className={`block w-full px-4 py-2 text-center rounded-md border ${
                    theme === 'dark'
                      ? 'border-gray-600 text-white hover:bg-gray-700'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/request"
                  className={`block w-full px-4 py-2 text-center rounded-md border border-transparent ${
                    theme === 'dark'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Request Hostel
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;