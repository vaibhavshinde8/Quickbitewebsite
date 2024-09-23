import React from 'react';
import { FiAlertCircle } from 'react-icons/fi'; // Error icon

const Error = ({ message, onRetry, onContactSupport }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center">
      <FiAlertCircle className="text-red-500 mr-3" size={24} />
      <div className="flex-1">
        <strong className="font-bold">Oops! </strong>
        <span className="block sm:inline">{message}</span>
      </div>
      <div className="flex-shrink-0 space-x-2">
        {onRetry && (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
            onClick={onRetry}
          >
            Retry
          </button>
        )}
        {onContactSupport && (
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none"
            onClick={onContactSupport}
          >
            Contact Support
          </button>
        )}
      </div>
    </div>
  );
};

export default Error;
