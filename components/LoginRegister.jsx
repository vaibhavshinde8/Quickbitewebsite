import React, { useState } from 'react';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and registration forms
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });
  const [errors, setErrors] = useState({}); // State for storing validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error for the current field
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    if (!isLogin && !formData.email) {
      newErrors.email = 'Email is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set validation errors
      return; // Stop form submission
    }
    if (isLogin) {
      // Handle login
      console.log('Login Data:', formData);
    } else {
      // Handle registration
      console.log('Registration Data:', formData);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        {isLogin ? 'Login' : 'Register'}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-left">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className={`w-full p-2 border rounded ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        </div>
        {!isLogin && (
          <div className="mb-4">
            <label htmlFor="email" className="block text-left">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="password" className="block text-left">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className={`w-full p-2 border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
        <button
          type="button"
          onClick={() => setIsLogin((prev) => !prev)}
          className="bg-gray-500 text-white py-2 px-4 rounded ml-4"
        >
          Switch to {isLogin ? 'Register' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginRegister;
