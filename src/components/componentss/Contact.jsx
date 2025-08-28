// Contact.jsx
// pages/Contact.jsx
import { useState } from 'react';
import { useTheme } from './contexts/ThemeContext';
// import Button from '../components/common/Button';
import ContactForm from './ContactForm';

const Contact = () => {
  const { theme } = useTheme();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e, formData) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto">
        <div className={`p-8 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white'}`}>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
            <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Have questions or feedback? Reach out to our hostel management team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Our Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className={`p-2 rounded-full mr-4 ${theme === 'dark' ? 'bg-gray-600' : 'bg-blue-100'}`}>
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>+1 (123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className={`p-2 rounded-full mr-4 ${theme === 'dark' ? 'bg-gray-600' : 'bg-blue-100'}`}>
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>hostel@university.edu</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className={`p-2 rounded-full mr-4 ${theme === 'dark' ? 'bg-gray-600' : 'bg-blue-100'}`}>
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      University Hostel Complex<br />
                      123 Campus Road<br />
                      University Town, 12345
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Office Hours</h2>
                <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-100'}`}>
                  <p className="font-medium">Monday - Friday</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>9:00 AM - 5:00 PM</p>
                  <p className="font-medium mt-2">Saturday</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>10:00 AM - 2:00 PM</p>
                  <p className="font-medium mt-2">Sunday</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Closed</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
              {isSubmitted ? (
                <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-green-800' : 'bg-green-100'} text-green-800 dark:text-green-200`}>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Thank you for your message! We'll get back to you soon.</span>
                  </div>
                </div>
              ) : (
                <ContactForm onSubmit={handleSubmit} theme={theme} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;