// components/dashboard/RoomAllocation.jsx
import { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import Button from '../Button';
import Modal from '../Modal';

const RoomAllocation = () => {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [rooms, setRooms] = useState([
    { id: 101, capacity: 2, occupants: 1, status: 'available' },
    { id: 102, capacity: 2, occupants: 2, status: 'full' },
    { id: 103, capacity: 3, occupants: 1, status: 'available' },
    { id: 104, capacity: 3, occupants: 0, status: 'available' },
    { id: 105, capacity: 2, occupants: 1, status: 'available' },
  ]);

  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'pending' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'approved' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', status: 'pending' },
  ]);

  const allocateRoom = (studentId, roomId) => {
    setRooms(rooms.map(room => 
      room.id === roomId 
        ? { ...room, occupants: room.occupants + 1, status: room.occupants + 1 >= room.capacity ? 'full' : 'available' }
        : room
    ));
    setStudents(students.map(student => 
      student.id === studentId 
        ? { ...student, status: 'allocated', room: roomId }
        : student
    ));
    setIsModalOpen(false);
  };

  return (
    <div className={`p-6 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
      <h2 className="text-xl font-semibold mb-4">Room Allocation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium mb-3">Available Rooms</h3>
          <div className="space-y-2">
            {rooms.map(room => (
              <div 
                key={room.id} 
                className={`p-3 rounded border ${room.status === 'available' ? 'border-green-500' : 'border-red-500'} ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-50'}`}
              >
                <div className="flex justify-between items-center">
                  <span>Room {room.id} - {room.occupants}/{room.capacity}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${room.status === 'available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {room.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-3">Student Requests</h3>
          <div className="space-y-2">
            {students.filter(s => s.status === 'approved').map(student => (
              <div 
                key={student.id} 
                className={`p-3 rounded border border-blue-500 ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-50'}`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-gray-500">{student.email}</p>
                  </div>
                  {!student.room ? (
                    <Button 
                      onClick={() => {
                        setSelectedRoom(student.id);
                        setIsModalOpen(true);
                      }}
                      size="sm"
                    >
                      Allocate Room
                    </Button>
                  ) : (
                    <span className="text-sm text-green-600">Room {student.room}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Select Room">
        <div className="space-y-3">
          {rooms.filter(r => r.status === 'available').map(room => (
            <div 
              key={room.id} 
              className="p-3 border border-gray-200 rounded cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-600"
              onClick={() => allocateRoom(selectedRoom, room.id)}
            >
              Room {room.id} - {room.capacity - room.occupants} bed(s) available
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default RoomAllocation;