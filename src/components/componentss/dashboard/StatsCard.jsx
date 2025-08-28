// components/dashboard/StatsCard.jsx
import { useTheme } from '../contexts/ThemeContext';

const StatsCard = ({ title, value, icon, trend, trendValue, color }) => {
  const { theme } = useTheme();

  const colors = {
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900',
      text: 'text-blue-600 dark:text-blue-300',
      icon: 'text-blue-500 dark:text-blue-400'
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900',
      text: 'text-green-600 dark:text-green-300',
      icon: 'text-green-500 dark:text-green-400'
    },
    orange: {
      bg: 'bg-orange-100 dark:bg-orange-900',
      text: 'text-orange-600 dark:text-orange-300',
      icon: 'text-orange-500 dark:text-orange-400'
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900',
      text: 'text-purple-600 dark:text-purple-300',
      icon: 'text-purple-500 dark:text-purple-400'
    }
  };

  const selectedColor = colors[color] || colors.blue;

  return (
    <div className={`p-4 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
            {title}
          </p>
          <p className={`text-2xl font-semibold mt-1 ${selectedColor.text}`}>
            {value}
          </p>
          <div className="flex items-center mt-2">
            {trend === 'up' ? (
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            )}
            <span className={`ml-1 text-sm ${trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {trendValue} {trend === 'up' ? 'Increase' : 'Decrease'}
            </span>
          </div>
        </div>
        <div className={`p-3 rounded-full ${selectedColor.bg}`}>
          <div className={`w-6 h-6 ${selectedColor.icon}`}>
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;