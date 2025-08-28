// components/dashboard/StudentRequests.jsx
import { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import Button from '../Button';
import Modal from '../Modal';

const StudentRequests = () => {
  const { theme } = useTheme();
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requests, setRequests] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', department: 'Computer Science', year: '2nd Year', status: 'pending', date: '2023-05-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', department: 'Electrical', year: '1st Year', status: 'pending', date: '2023-05-16' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', department: 'Mechanical', year: '3rd Year', status: 'approved', date: '2023-05-10' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', department: 'Civil', year: '4th Year', status: 'rejected', date: '2023-05-12' },
  ]);

  const handleApprove = (id) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: 'approved' } : request
    ));
  };

  const handleReject = (id) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: 'rejected' } : request
    ));
  };

  const viewDetails = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  return (
    <div className={`p-6 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
      <h2 className="text-xl font-semibold mb-4">Student Requests</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
          <thead className={`${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-50'}`}>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Department</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Year</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className={`divide-y divide-gray-200 dark:divide-gray-600 ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
            {requests.map((request) => (
              <tr key={request.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-300 font-medium">
                        {request.name.charAt(0)}
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium">{request.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{request.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{request.department}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{request.year}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${request.status === 'approved' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                      request.status === 'rejected' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}`}>
                    {request.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => viewDetails(request)}
                    >
                      View
                    </Button>
                    {request.status === 'pending' && (
                      <>
                        <Button 
                          size="sm" 
                          onClick={() => handleApprove(request.id)}
                        >
                          Approve
                        </Button>
                        <Button 
                          size="sm" 
                          variant="danger" 
                          onClick={() => handleReject(request.id)}
                        >
                          Reject
                        </Button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Request Details">
        {selectedRequest && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</p>
                <p>{selectedRequest.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                <p>{selectedRequest.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Department</p>
                <p>{selectedRequest.department}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Academic Year</p>
                <p>{selectedRequest.year}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Request Date</p>
                <p>{selectedRequest.date}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</p>
                <p className={`inline-flex px-2 text-xs font-semibold rounded-full 
                  ${selectedRequest.status === 'approved' ? 'bg-green-100 text-green-800' : 
                    selectedRequest.status === 'rejected' ? 'bg-red-100 text-red-800' : 
                    'bg-yellow-100 text-yellow-800'}`}>
                  {selectedRequest.status}
                </p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default StudentRequests;