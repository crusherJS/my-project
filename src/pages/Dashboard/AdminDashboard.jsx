import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FaCheck, FaTimes, FaSearch, FaFilter, FaSync, FaInfoCircle, FaCalendarAlt } from 'react-icons/fa';

export default function AdminDashboard() {
  const { theme } = useTheme();
  const [requests, setRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isDark = theme === 'dark';

  // Load requests from localStorage on component mount
  useEffect(() => {
    refreshRequests();
  }, []);

  const refreshRequests = () => {
    try {
      const storedRequests = JSON.parse(localStorage.getItem('hostelRequests')) || [];
      setRequests(storedRequests);
    } catch (error) {
      console.error("Error loading requests:", error);
    }
  };

  const handleStatusChange = (id, newStatus) => {
    const updatedRequests = requests.map(request => 
      request.id === id ? { ...request, status: newStatus } : request
    );
    setRequests(updatedRequests);
    localStorage.setItem('hostelRequests', JSON.stringify(updatedRequests));
  };

  const filteredRequests = requests.filter(request => {
    const matchesSearch = request.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         request.room.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const viewRequestDetails = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
  };

  return (
    <div className={`min-h-screen p-6 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Hostel Request Management</h1>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Manage all student requests and maintenance issues
            </p>
          </div>
          <button 
            onClick={refreshRequests}
            className={`p-2 rounded-full ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-200'} shadow flex items-center`}
            title="Refresh requests"
          >
            <FaSync className={isDark ? 'text-gray-300' : 'text-gray-600'} />
          </button>
        </div>
        
        {/* Search and Filter Section */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className={`relative flex-grow ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow`}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className={isDark ? 'text-gray-400' : 'text-gray-500'} />
            </div>
            <input
              type="text"
              placeholder="Search by name, room, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg ${isDark ? 'bg-gray-800 text-white' : 'bg-white'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
          </div>
          
          <div className={`flex items-center ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow px-4`}>
            <FaFilter className={`mr-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={`py-2 pl-2 pr-8 rounded-lg ${isDark ? 'bg-gray-800 text-white' : 'bg-white'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
        
        {/* Requests Table */}
        <div className={`rounded-lg shadow-md overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className={`grid grid-cols-12 p-4 font-semibold ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <div className="col-span-1">ID</div>
            <div className="col-span-2">Name</div>
            <div className="col-span-1">Room</div>
            <div className="col-span-2 hidden md:block">Type</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-3">Actions</div>
          </div>
          
          {filteredRequests.length === 0 ? (
            <div className="p-6 text-center">No requests found matching your criteria</div>
          ) : (
            filteredRequests.map(request => (
              <div key={request.id} className={`grid grid-cols-12 p-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'} items-center`}>
                <div className="col-span-1">#{request.id.toString().slice(-4)}</div>
                <div className="col-span-2 truncate">{request.name}</div>
                <div className="col-span-1">{request.room}</div>
                <div className="col-span-2 hidden md:block capitalize">{request.requestType}</div>
                <div className="col-span-2 text-sm flex items-center">
                  <FaCalendarAlt className="mr-1" /> {request.date || 'N/A'}
                </div>
                <div className="col-span-1">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    request.status === 'approved' ? 
                      (isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800') :
                    request.status === 'rejected' ? 
                      (isDark ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800') :
                      (isDark ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800')
                  }`}>
                    {request.status}
                  </span>
                </div>
                <div className="col-span-3 flex space-x-2">
                  <button 
                    onClick={() => viewRequestDetails(request)}
                    className={`p-1 rounded ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                    title="View details"
                  >
                    <FaInfoCircle className={isDark ? 'text-blue-400' : 'text-blue-600'} />
                  </button>
                  {request.status === 'pending' && (
                    <>
                      <button 
                        onClick={() => handleStatusChange(request.id, 'approved')}
                        className={`px-2 py-1 rounded text-xs flex items-center ${
                          isDark ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'
                        } text-white`}
                        title="Approve request"
                      >
                        <FaCheck className="mr-1" /> Approve
                      </button>
                      <button 
                        onClick={() => handleStatusChange(request.id, 'rejected')}
                        className={`px-2 py-1 rounded text-xs flex items-center ${
                          isDark ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600'
                        } text-white`}
                        title="Reject request"
                      >
                        <FaTimes className="mr-1" /> Reject
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Request Details Modal */}
        {isModalOpen && selectedRequest && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className={`max-w-2xl w-full rounded-xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'} p-6`}>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold">Request Details</h2>
                <button 
                  onClick={closeModal}
                  className={`p-1 rounded-full ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Student Name</h3>
                  <p>{selectedRequest.name}</p>
                </div>
                <div>
                  <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Room Number</h3>
                  <p>{selectedRequest.room}</p>
                </div>
                <div>
                  <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Request Type</h3>
                  <p className="capitalize">{selectedRequest.requestType}</p>
                </div>
                <div>
                  <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Status</h3>
                  <p className={`inline-block px-2 py-1 rounded-full text-xs ${
                    selectedRequest.status === 'approved' ? 
                      (isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800') :
                    selectedRequest.status === 'rejected' ? 
                      (isDark ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800') :
                      (isDark ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800')
                  }`}>
                    {selectedRequest.status}
                  </p>
                </div>
                <div>
                  <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Submission Date</h3>
                  <p>{selectedRequest.date || 'Not available'}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Description</h3>
                <div className={`p-3 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} mt-1`}>
                  {selectedRequest.description || 'No description provided'}
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  onClick={closeModal}
                  className={`px-4 py-2 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                  Close
                </button>
                {selectedRequest.status === 'pending' && (
                  <>
                    <button
                      onClick={() => {
                        handleStatusChange(selectedRequest.id, 'approved');
                        closeModal();
                      }}
                      className={`px-4 py-2 rounded-lg ${isDark ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white`}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => {
                        handleStatusChange(selectedRequest.id, 'rejected');
                        closeModal();
                      }}
                      className={`px-4 py-2 rounded-lg ${isDark ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600'} text-white`}
                    >
                      Reject
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}