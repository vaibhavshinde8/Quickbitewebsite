// Shimmer.js
import React from 'react';

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="w-64 h-64 bg-gray-200 rounded-lg animate-pulse">
          <div className="h-3/4 bg-gray-300 rounded-t-lg"></div>
          <div className="h-1/4 bg-gray-300 rounded-b-lg"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
