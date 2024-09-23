import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
//import ShimmerRestaurantCategory from "./ShimmerRestaurantCategory";
import Footer from "./Footer";

const RestaurantCategory = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const [showItems, setShowItems] = useState(false); // Local state for toggling

  useEffect(() => {
    if (data) {
      // Simulate data loading time
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // Adjust time as needed

      return () => clearTimeout(timer);
    }
  }, [data]);

  const handleClick = () => {
    setShowItems((prev) => !prev); // Toggle the showItems state
  };
/*
  if (loading) {
    return <ShimmerRestaurantCategory />;
  }
    */
    

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? '🔼' : '🔽'}</span> {/* Change icon based on state */}
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
