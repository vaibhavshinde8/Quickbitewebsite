import React, { useState } from 'react';

const PaymentForm = ({ totalAmount, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Clear error when user types
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.contact) {
      newErrors.contact = 'Contact number is required';
    } else if (!/^\d+$/.test(formData.contact)) {
      newErrors.contact = 'Contact number must be numeric';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      alert('Payment confirmed!'); // Replace with actual payment handling logic
      onClose(); // Close the form after submission
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-2">Payment Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-left">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-left">Contact Number:</label>
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="Enter your contact number"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.contact}
              onChange={handleChange}
            />
            {errors.contact && <p className="text-red-500">{errors.contact}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-left">Amount:</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={`₹${totalAmount}`}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Confirm Payment
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-red-500 text-white py-2 px-4 rounded ml-4"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
