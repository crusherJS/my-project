import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { FaLock, FaEnvelope, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const isDark = theme === 'dark';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      // Mock authentication
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (!email || !password) {
        throw new Error('Please fill all fields');
      }
      
      // Demo login - any email/password works
      login(email, password);
      navigate(email.includes('') ? '/' : '/');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Color definitions for consistent theming
  const colors = {
    primary: isDark ? 'bg-indigo-600' : 'bg-indigo-500',
    primaryHover: isDark ? 'hover:bg-indigo-700' : 'hover:bg-indigo-600',
    secondary: isDark ? 'bg-amber-500' : 'bg-amber-400',
    cardBg: isDark ? 'bg-gray-800' : 'bg-white',
    text: isDark ? 'text-gray-100' : 'text-gray-800',
    lightText: isDark ? 'text-gray-300' : 'text-gray-600',
    border: isDark ? 'border-gray-700' : 'border-gray-300',
    inputBg: isDark ? 'bg-gray-700' : 'bg-white',
    errorBg: isDark ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800',
    link: isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
  };

  return (
    <div className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className={`w-full max-w-md p-8 space-y-8 rounded-xl shadow-lg ${colors.cardBg}`}>
        {/* Header */}
        <div className="text-center">
          <h2 className={`text-3xl font-bold ${colors.text} mb-2`}>
            Welcome Back
          </h2>
          <p className={colors.lightText}>
            Sign in to manage your hostel experience
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className={`p-4 rounded-lg ${colors.errorBg} flex items-center`}>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        )}

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${colors.lightText} mb-1`}>
                Email Address
              </label>
              <div className="relative">
                <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${colors.lightText}`}>
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`pl-10 block w-full px-3 py-2 rounded-lg border ${colors.border} ${colors.inputBg} ${colors.text} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className={`block text-sm font-medium ${colors.lightText} mb-1`}>
                Password
              </label>
              <div className="relative">
                <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${colors.lightText}`}>
                  <FaLock className="h-5 w-5" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`pl-10 block w-full px-3 py-2 rounded-lg border ${colors.border} ${colors.inputBg} ${colors.text} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className={`h-4 w-4 rounded ${colors.border} ${isDark ? 'bg-gray-700' : 'bg-white'} focus:ring-indigo-500`}
                />
                <label htmlFor="remember-me" className={`ml-2 block text-sm ${colors.lightText}`}>
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className={`font-medium ${colors.link}`}>
                  Forgot password?
                </a>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white ${colors.primary} ${colors.primaryHover} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                <>
                  <FaSignInAlt className="mr-2" />
                  Sign In
                </>
              )}
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className={`text-sm text-center ${colors.lightText}`}>
          Don't have an account?{' '}
          <a 
            href="/signup" 
            className={`font-medium ${colors.link} flex items-center justify-center`}
          >
            <FaUserPlus className="mr-1" />
            Create one now
          </a>
        </div>

        {/* Social Login Options */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className={`w-full border-t ${colors.border}`}></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className={`px-2 ${isDark ? 'bg-gray-800' : 'bg-white'} ${colors.lightText}`}>
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className={`flex items-center justify-center py-2 px-4 rounded-lg border ${colors.border} ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors`}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
            GitHub
          </button>
          <button
            type="button"
            className={`flex items-center justify-center py-2 px-4 rounded-lg border ${colors.border} ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors`}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm6.25 10.5h-5.5v5.5h-1.5v-5.5h-5.5v-1.5h5.5v-5.5h1.5v5.5h5.5v1.5z" clipRule="evenodd" />
            </svg>
            Google
          </button>
        </div>
      </div>
    </div>
  );
}