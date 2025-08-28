// Sidebar.jsx
// components/dashboard/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Sidebar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="w-64 bg-blue-600 text-white dark:bg-gray-800 h-screen fixed">
      <div className="p-4 border-b border-blue-500 dark:border-gray-700">
        <h1 className="text-xl font-bold">Hostel Management</h1>
        <p className="text-sm text-blue-200 dark:text-gray-400">
          {user?.role === 'admin' ? 'Admin Dashboard' : 'Student Portal'}
        </p>
      </div>
      <nav className="mt-4">
        {user?.role === 'admin' ? (
          <>
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => 
                `block px-4 py-2 ${isActive ? 'bg-blue-700 dark:bg-gray-700' : 'hover:bg-blue-700 dark:hover:bg-gray-700'}`
              }
            >
              Dashboard
            </NavLink>
            <NavLink 
              to="/dashboard/requests" 
              className={({ isActive }) => 
                `block px-4 py-2 ${isActive ? 'bg-blue-700 dark:bg-gray-700' : 'hover:bg-blue-700 dark:hover:bg-gray-700'}`
              }
            >
              Student Requests
            </NavLink>
            <NavLink 
              to="/dashboard/rooms" 
              className={({ isActive }) => 
                `block px-4 py-2 ${isActive ? 'bg-blue-700 dark:bg-gray-700' : 'hover:bg-blue-700 dark:hover:bg-gray-700'}`
              }
            >
              Room Allocation
            </NavLink>
          </>
        ) : (
          <>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `block px-4 py-2 ${isActive ? 'bg-blue-700 dark:bg-gray-700' : 'hover:bg-blue-700 dark:hover:bg-gray-700'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/request" 
              className={({ isActive }) => 
                `block px-4 py-2 ${isActive ? 'bg-blue-700 dark:bg-gray-700' : 'hover:bg-blue-700 dark:hover:bg-gray-700'}`
              }
            >
              Request Hostel
            </NavLink>
          </>
        )}
        <button 
          onClick={logout}
          className="w-full text-left px-4 py-2 hover:bg-blue-700 dark:hover:bg-gray-700 mt-4"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;