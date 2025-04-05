import axios from "axios";
const BASE_URL = 'http://localhost:5000';

export const registerApi = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};

export const loginApi = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/login`, credentials);
    // localStorage.setItem('authToken', response.data.token);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const getUserList = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${BASE_URL}/api/users`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }
};

export const updateUserList = async (id, updatedData) => {
  try {
    const getId = id;
    const token = localStorage.getItem('token');
    const response = await axios.put(`${BASE_URL}/api/users/${getId}`, updatedData, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }
};
export const deleteUser = async (id) => {
  try {
    const getId = id;
    const token = localStorage.getItem('token');
    const response = await axios.delete(`${BASE_URL}/api/users/${getId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }
};