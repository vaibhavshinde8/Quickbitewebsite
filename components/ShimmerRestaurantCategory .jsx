import React from "react";

const ShimmerRestaurantCategory = () => {
  return (
    <div className="p-4">
      {/* Shimmer Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 animate-pulse">
        <div className="flex justify-between">
          <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
          <div className="w-8 h-6 bg-gray-300 rounded"></div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="w-full h-6 bg-gray-300 rounded"></div>
          <div className="w-full h-6 bg-gray-300 rounded"></div>
          <div className="w-full h-6 bg-gray-300 rounded"></div>
        </div>
      </div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 animate-pulse">
        <div className="flex justify-between">
          <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
          <div className="w-8 h-6 bg-gray-300 rounded"></div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="w-full h-6 bg-gray-300 rounded"></div>
          <div className="w-full h-6 bg-gray-300 rounded"></div>
          <div className="w-full h-6 bg-gray-300 rounded"></div>
        </div>
      </div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 animate-pulse">
        <div className="flex justify-between">
          <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
          <div className="w-8 h-6 bg-gray-300 rounded"></div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="w-full h-6 bg-gray-300 rounded"></div>
          <div className="w-full h-6 bg-gray-300 rounded"></div>
          <div className="w-full h-6 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
    
    
  );
};

export default ShimmerRestaurantCategory;
