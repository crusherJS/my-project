// RequestForm.jsx
// pages/RequestForm.jsx
import { useState } from 'react';
import { useAuth } from '../components/componentss/AuthContext';
import { useTheme } from '../components/componentss/contexts/ThemeContext';
import Button from '../components/componentss/Button';

const RequestForm = () => {
  const { user } = useAuth();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    department: '',
    academicYear: '',
    reason: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: '',
        academicYear: '',
        reason: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className={`p-8 rounded-lg shadow-lg max-w-md w-full ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white'}`}>
          <div className="text-center">
            <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h2 className="mt-3 text-xl font-semibold">Request Submitted Successfully!</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Your hostel request has been received. The warden will review your application and notify you soon.
            </p>
            <Button className="mt-4" onClick={() => setIsSuccess(false)}>
              Submit Another Request
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className={`max-w-md mx-auto p-8 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white'}`}>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Hostel Accommodation Request</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Please fill out this form to request hostel accommodation
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${theme === 'dark' ? 'bg-gray-600 border-gray-500' : 'border-gray-300'}`}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${theme === 'dark' ? 'bg-gray-600 border-gray-500' : 'border-gray-300'}`}
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${theme === 'dark' ? 'bg-gray-600 border-gray-500' : 'border-gray-300'}`}
              />
            </div>
            
            <div>
              <label htmlFor="department" className="block text-sm font-medium">
                Department
              </label>
              <select
                id="department"
                name="department"
                required
                value={formData.department}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${theme === 'dark' ? 'bg-gray-600 border-gray-500' : 'border-gray-300'}`}
              >
                <option value="">Select Department</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Electrical Engineering">Electrical Engineering</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Business Administration">Business Administration</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="academicYear" className="block text-sm font-medium">
                Academic Year
              </label>
              <select
                id="academicYear"
                name="academicYear"
                required
                value={formData.academicYear}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${theme === 'dark' ? 'bg-gray-600 border-gray-500' : 'border-gray-300'}`}
              >
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="reason" className="block text-sm font-medium">
                Reason for Hostel Stay
              </label>
              <textarea
                id="reason"
                name="reason"
                rows={3}
                required
                value={formData.reason}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${theme === 'dark' ? 'bg-gray-600 border-gray-500' : 'border-gray-300'}`}
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;