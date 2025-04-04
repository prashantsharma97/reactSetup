import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }
  
    try {
      setError('');
      const userData = { email, password };
      const response = await loginApi(userData);
  
      if (response?.token) {
        localStorage.setItem("token", response.token);
        navigate('/dashboard');
        console.log('Logged in successfully:', response);
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-500 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-sm w-full">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-6">Please sign in to continue</p>
        
        {/* Error Message */}
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-500" 
              required 
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-500" 
              required 
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors mb-4"
          >
            Login
          </button>
          
          {/* Forgot Password Link */}
          <div className="text-center">
            <a href="#" className="text-indigo-600 hover:underline">Forgot Password?</a>
          </div>
          
          {/* Sign Up Link */}
          <div className="text-center mt-4">
            <p className="text-gray-600">Don't have an account? 
              <a href="#" className="text-indigo-600 font-semibold hover:underline"> Sign Up</a>
            </p>
          </div>
        </form>
      </div>

      
    </div>
  );
}

export default Login;
