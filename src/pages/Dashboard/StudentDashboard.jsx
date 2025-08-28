import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FaWrench, FaBroom, FaExchangeAlt, FaCheck, FaPaperPlane } from 'react-icons/fa';

export default function StudentDashboard() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    room: '',
    requestType: 'maintenance',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const isDark = theme === 'dark';

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingRequests = JSON.parse(localStorage.getItem('hostelRequests') || '[]');
    const newRequest = {
      id: Date.now(),
      ...formData,
      status: 'pending',
      date: new Date().toLocaleDateString()
    };
    localStorage.setItem('hostelRequests', JSON.stringify([...existingRequests, newRequest]));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`min-h-screen p-6 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
        <div className={`max-w-md mx-auto p-8 rounded-xl shadow-lg text-center ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${isDark ? 'bg-green-900' : 'bg-green-100'} text-green-500 mb-4`}>
            <FaCheck className="text-2xl" />
          </div>
          <h2 className="text-xl font-bold mb-4">Request Submitted Successfully!</h2>
          <p className="mb-6">We'll review your request and get back to you soon.</p>
          <button 
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                room: '',
                requestType: 'maintenance',
                description: ''
              });
            }}
            className={`px-6 py-2 rounded-lg ${isDark ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-500 hover:bg-indigo-600'} text-white transition-colors`}
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  const requestTypeIcons = {
    maintenance: <FaWrench className="mr-2" />,
    cleaning: <FaBroom className="mr-2" />,
    'room-change': <FaExchangeAlt className="mr-2" />,
    'booking-room': <FaCheck className="mr-2" />
  };

  return (
    <div className={`min-h-screen p-6 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className={`max-w-md mx-auto p-6 rounded-xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <h1 className="text-2xl font-bold mb-6">Submit Request</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className={`block mb-2 font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className={`w-full p-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className={`block mb-2 font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Room Number</label>
            <input
              type="text"
              value={formData.room}
              onChange={(e) => setFormData({...formData, room: e.target.value})}
              className={`w-full p-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className={`block mb-2 font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Request Type</label>
            <select
              value={formData.requestType}
              onChange={(e) => setFormData({...formData, requestType: e.target.value})}
              className={`w-full p-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none`}
            >
              <option value="booking-room">Booking Room</option>
              <option value="maintenance">Maintenance</option>
              <option value="cleaning">Cleaning</option>
              <option value="Hostal Leave">Hostal Leave</option>

              <option value="room-change">Room Change</option>
            </select>
          </div>
          
          <div className="mb-6">
            <label className={`block mb-2 font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className={`w-full p-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              rows="4"
              required
              placeholder="Please provide detailed information about your request..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            className={`w-full py-3 px-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-500 hover:bg-indigo-600'} text-white font-medium transition-colors`}
          >
            <FaPaperPlane className="mr-2" />
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}