import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItemById } from '../utils/cardSlice';  // Ensure this import is correct
import { CDN_URL } from '../utils/constant';

const ItemList = ({ items, onAddItem, onRemoveItem }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));  // Correctly dispatch 'addItem'

    if (typeof onAddItem === 'function') {
      onAddItem(); // Update cart monitor
    }
  };

  const handleDeleteItem = (id) => {
    dispatch(removeItemById(id));

    
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.card?.info?.id} className="p-2 m-2 border-b-2 border-black flex">
          <div className="w-9/12">
            <span>{item.card?.info?.name}</span>
            <span> - ₹ {item.card?.info?.price ? item.card.info.price / 100 : item.card?.info?.defaultPrice / 100}</span>
            <p className="text-xs">{item.card?.info?.description}</p>
            <p>Quantity: {item.quantity}</p> {/* Display the quantity */}
          </div>

          <div className="w-3/12 ml-4 flex-shrink-0 relative">
            <img 
              src={CDN_URL + item.card?.info?.imageId}
              alt={item.card?.info?.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <button
              className="absolute bottom-2 right-0 p-1 rounded-lg bg-white shadow-lg"
              onClick={() => handleAddItem(item)} // Increase quantity
            >
              Add +
            </button>
            <button
              className="absolute bottom-2 right-16 p-1 rounded-lg bg-white shadow-lg"
              onClick={() => handleDeleteItem(item.card?.info?.id)} // Decrease quantity/remove item
            >
              Remove -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
