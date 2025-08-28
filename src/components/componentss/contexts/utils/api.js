// utils/api.js
import axios from 'axios';
import { useAuth } from '../components/componentss/AuthContext';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token expired or invalid
      const { logout } = useAuth();
      logout();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Authentication API
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  refreshToken: () => api.post('/auth/refresh-token'),
  logout: () => api.post('/auth/logout')
};

// Student API
export const studentAPI = {
  getAllStudents: () => api.get('/students'),
  getStudentById: (id) => api.get(`/students/${id}`),
  createStudent: (studentData) => api.post('/students', studentData),
  updateStudent: (id, studentData) => api.put(`/students/${id}`, studentData),
  deleteStudent: (id) => api.delete(`/students/${id}`),
  submitHostelRequest: (requestData) => api.post('/students/request', requestData),
  getStudentRequests: () => api.get('/students/requests')
};

// Room API
export const roomAPI = {
  getAllRooms: () => api.get('/rooms'),
  getRoomById: (id) => api.get(`/rooms/${id}`),
  createRoom: (roomData) => api.post('/rooms', roomData),
  updateRoom: (id, roomData) => api.put(`/rooms/${id}`, roomData),
  deleteRoom: (id) => api.delete(`/rooms/${id}`),
  getAvailableRooms: () => api.get('/rooms/available'),
  allocateRoom: (allocationData) => api.post('/rooms/allocate', allocationData),
  deallocateRoom: (allocationId) => api.delete(`/rooms/allocate/${allocationId}`)
};

// Warden/Admin API
export const adminAPI = {
  getAllRequests: () => api.get('/admin/requests'),
  getRequestById: (id) => api.get(`/admin/requests/${id}`),
  approveRequest: (id) => api.put(`/admin/requests/${id}/approve`),
  rejectRequest: (id, reason) => api.put(`/admin/requests/${id}/reject`, { reason }),
  getOccupancyReport: () => api.get('/admin/reports/occupancy'),
  getFinancialReport: () => api.get('/admin/reports/financial')
};

// Maintenance API
export const maintenanceAPI = {
  createRequest: (requestData) => api.post('/maintenance', requestData),
  getAllRequests: () => api.get('/maintenance'),
  getRequestById: (id) => api.get(`/maintenance/${id}`),
  updateRequestStatus: (id, status) => api.put(`/maintenance/${id}/status`, { status }),
  deleteRequest: (id) => api.delete(`/maintenance/${id}`)
};

// Payment API
export const paymentAPI = {
  createPayment: (paymentData) => api.post('/payments', paymentData),
  getAllPayments: () => api.get('/payments'),
  getPaymentById: (id) => api.get(`/payments/${id}`),
  verifyPayment: (reference) => api.get(`/payments/verify/${reference}`),
  getStudentPayments: (studentId) => api.get(`/payments/student/${studentId}`)
};

// Notification API
export const notificationAPI = {
  getNotifications: () => api.get('/notifications'),
  markAsRead: (id) => api.put(`/notifications/${id}/read`),
  markAllAsRead: () => api.put('/notifications/read-all'),
  deleteNotification: (id) => api.delete(`/notifications/${id}`)
};

export default api;