import { useTheme } from "./contexts/ThemeContext";
import useAuth from "./hooks/useAuth"; // ✅ fixed
import Button from "./Button";


const HeroSection = () => {
  const { theme } = useTheme();
  const { user } = useAuth();

  return (
    <div className={`relative ${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-700'}`}>
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-700'}`}></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className={`text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            {user ? `Welcome back, ${user.name}` : 'College Hostel Management'}
          </h1>
          <p className={`mt-6 max-w-3xl mx-auto text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-blue-100'}`}>
            {user ? 'Manage your hostel accommodation with ease' : 'A modern system for managing student accommodations efficiently'}
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            {user ? (
              <Button 
                href="/dashboard" 
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100"
              >
                Go to Dashboard
              </Button>
            ) : (
              <>
                <Button 
                  href="/request" 
                  size="lg"
                 className=" text-blue-700 border border-blue-700 rounded"
                >
                  Request Hostel
                </Button>

                <Button 
                  href="/login" 
                  size="lg"
                  className=" text-blue-700 border border-blue-700 rounded"
                >
                  Login
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;