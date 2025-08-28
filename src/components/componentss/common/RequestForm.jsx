import { useState } from 'react';
import { useTheme } from '../componentss/contexts/ThemeContext';

export default function RequestForm({ setRequests }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    year: '',
    reason: '',
  });
  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    setRequests(prev => [...prev, formData]);
    alert('Request submitted!');
    setFormData({
      name: '',
      email: '',
      department: '',
      year: '',
      reason: '',
    });
  };

  return (
    <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
      <h2 className="text-2xl font-bold mb-6">Hostel Request Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className={`w-full p-2 rounded border ${theme === 'dark' ? 'bg-gray-600 border-gray-500' : 'border-gray-300'}`}
              required
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className={`w-full p-2 rounded border ${theme === 'dark' ? 'bg-gray-600 border-gray-500' : 'border-gray-300'}`}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2">Department</label>
            <select
              value={formData.department}
              onChange={(e) => setFormData({...formData, department: e.target.value})}
              className={`w-full p-2 rounded border ${theme === 'dark' ? 'bg-gray-600 border-gray-500' : 'border-gray-300'}`}
              required
            >
              <option value="">Select Department</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Electrical">Electrical</option>
              <option value="Mechanical">Mechanical</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Academic Year</label>
            <select
              value={formData.year}
              onChange={(e) => setFormData({...formData, year: e.target.value})}
              className={`w-full p-2 rounded border ${theme === 'dark' ? 'bg-gray-600 border-gray-500' : 'border-gray-300'}`}
              required
            >
              <option value="">Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Reason for Hostel Stay</label>
          <textarea
            value={formData.reason}
            onChange={(e) => setFormData({...formData, reason: e.target.value})}
            className={`w-full p-2 rounded border ${theme === 'dark' ? 'bg-gray-600 border-gray-500' : 'border-gray-300'}`}
            rows="3"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`w-full py-2 rounded-md ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}