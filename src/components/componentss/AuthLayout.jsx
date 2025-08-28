// components/auth/AuthLayout.jsx
import { useTheme } from './contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import { Helmet } from 'react-helmet';


const AuthLayout = ({ title, children }) => {
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <>
      <Helmet>
        <html lang="en" dir="ltr" />
      </Helmet>

      <div className={`min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${isDark ? 'bg-blue-700' : 'bg-blue-100'}`}>
              <svg 
                className={`w-8 h-8 ${isDark ? 'text-blue-300' : 'text-blue-600'}`} 
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
            </div>
          </div>
          <h2 className={`mt-6 text-center text-3xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className={`py-8 px-4 shadow sm:rounded-lg sm:px-10 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            {children}
          </div>
        </div>

        <div className={`mt-8 text-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          <p>Hostel Management System © {new Date().getFullYear()}</p>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
