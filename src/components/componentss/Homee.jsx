// pages/Home.jsx
import { useAuth } from './AuthContext';
import { useTheme } from './contexts/ThemeContext';
import HeroSection from './HeroSection';
import Features from './Features';
import Testimonials from './Testimonials';

const Home = () => {
  const { user } = useAuth();
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <HeroSection />
      <Features />
      <Testimonials />
      
      <div className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-3xl font-extrabold sm:text-4xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Ready to get started?
          </h2>
          <p className={`mt-3 max-w-md mx-auto text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
            {user ? 'Manage your hostel stay or request changes to your allocation.' : 'Sign up now to request hostel accommodation.'}
          </p>
          <div className="mt-8 flex justify-center">
            {user ? (
              <a
                href="/dashboard"
                className={`px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10`}
              >
                Go to Dashboard
              </a>
            ) : (
              <a
                href="/request"
                className={`px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10`}
              >
                Request Hostel
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;