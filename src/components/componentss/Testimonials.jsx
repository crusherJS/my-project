// components/home/Testimonials.jsx
import { useTheme } from './contexts/ThemeContext';

const Testimonials = () => {
  const { theme } = useTheme();

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Computer Science Student',
      content: 'The hostel management system made it so easy to apply for accommodation. I got my room allocation within 2 days!',
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Electrical Engineering Student',
      content: 'As an international student, I really appreciate how streamlined the process was. The warden was very helpful throughout.',
      avatar: 'MC'
    },
    {
      id: 3,
      name: 'Emma Williams',
      role: 'Business Administration Student',
      content: 'The online payment system and maintenance requests work perfectly. No more standing in long queues!',
      avatar: 'EW'
    }
  ];

  return (
    <div className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className={`text-3xl font-extrabold sm:text-4xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            What students are saying
          </h2>
          <p className={`mt-3 max-w-2xl mx-auto text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} sm:mt-4`}>
            Hear from students who have used our hostel management system
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className={`p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}
            >
              <div className="flex items-center">
                <div className={`flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-blue-700' : 'bg-blue-100'}`}>
                  <span className={`font-medium ${theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}`}>
                    {testimonial.avatar}
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className={`mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;