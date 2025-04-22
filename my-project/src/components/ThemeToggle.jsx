import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="relative inline-flex items-center p-1 w-16 h-8 rounded-full transition-colors duration-500 bg-gradient-to-r from-blue-100 to-yellow-100 dark:from-blue-900 dark:to-purple-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
    >
    
      <span className="sr-only">Toggle theme</span>
      
   
      <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full transform transition-all duration-500 shadow-lg ${
        theme === 'light' 
          ? 'translate-x-0 bg-yellow-300 shadow-yellow-300/30' 
          : 'translate-x-8 bg-gray-100 shadow-gray-100/30'
      }`}>
      
        <span className={`absolute -inset-0 rounded-full bg-yellow-300/30 transition-opacity duration-300 ${
          theme === 'light' ? 'opacity-100' : 'opacity-0'
        }`}></span>
      </span>
      
      <div className="flex items-center justify-between w-full h-full px-1.5">
        
        <svg 
          className={`w-4 h-4 transition-colors duration-300 ${
            theme === 'light' ? 'text-yellow-500' : 'text-yellow-500/30'
          }`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
        
        <svg 
          className={`w-4 h-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-blue-300' : 'text-blue-300/30'
          }`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>
      
      <div className={`absolute inset-0 flex justify-around items-start w-full h-full px-1 transition-opacity duration-1000 ${
        theme === 'dark' ? 'opacity-100' : 'opacity-0'
      }`}>
        {[1, 2, 3].map((star) => (
          <span 
            key={star}
            className={`w-1 h-1 rounded-full bg-blue-300 ${
              star % 2 === 0 ? 'mt-1' : 'mt-2'
            }`}
            style={{
              animation: `twinkle ${Math.random() * 2 + 1}s infinite alternate`
            }}
          ></span>
        ))}
      </div>
    </button>
  );
}

export default ThemeToggle;