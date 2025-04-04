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
      return response.data; 
    } catch (error) {
      console.error('Login failed:', error);
      throw error; 
    }
  };
  
  export const getUserList = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      return response.data; 
    } catch (error) {
      console.error('Failed to fetch users:', error);
      throw error; 
    }
  };