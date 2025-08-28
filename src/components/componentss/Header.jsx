// components/dashboard/Header.jsx
import { useAuth } from './AuthContext';
import { useTheme } from './contexts/ThemeContext';
import NotificationBell from './dashboard/NotificationBell';
import ThemeToggle from './ThemeToggle';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const { user, logout } = useAuth();
  const { theme } = useTheme();

  return (
    <header className={`sticky top-0 z-40 flex-shrink-0 h-16 flex items-center ${theme === 'dark' ? 'bg-gray-800 border-b border-gray-700' : 'bg-white border-b border-gray-200'}`}>
      <div className="flex items-center justify-between w-full px-4">
        <div className="flex items-center">
          <button
            className={`p-2 rounded-md ${theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-600'} md:hidden`}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="ml-2 text-xl font-semibold">Dashboard</h1>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <NotificationBell />
          
          <div className="relative ml-3">
            <div className="flex items-center space-x-2">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">{user?.name}</p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {user?.role === 'admin' ? 'Administrator' : 'Student'}
                </p>
              </div>
              <button className="flex-shrink-0 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-blue-700' : 'bg-blue-100'}`}>
                  <span className={`font-medium ${theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}`}>
                    {user?.name?.charAt(0)}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;