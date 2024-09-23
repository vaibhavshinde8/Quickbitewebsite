import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeItemById, addItem } from '../utils/cardSlice';  // Ensure this import is correct
import ItemList from './ItemList';
import UserContext from '../utils/UserContext';
import PaymentForm from './PaymentForm';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const { loggedInUser } = useContext(UserContext);

  const [isFormVisible, setFormVisible] = useState(false);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItemById(id));
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));  // Correctly dispatch 'addItem'
  };

  const totalAmount = cartItems.reduce((acc, item) => 
    acc + (item?.card?.info?.price / 100 ?? item?.card?.info?.defaultPrice / 100) * item.quantity, 0);

  return (
    <div className="text-center w-full p-4">
      <h1 className="text-2xl font-bold">{cartItems.length} Items in Cart</h1>
      <div className="w-6/12 mx-auto">
        <ItemList
          items={cartItems}
          onRemoveItem={handleRemoveItem}
          onAddItem={handleAddItem}  // Pass handleAddItem to ItemList
        />

        <button
          className="bg-black text-white py-2 px-4 mt-4 rounded"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

        {cartItems.length > 0 && (
          <button
            className="bg-green-500 text-white py-2 px-4 mt-4 rounded"
            onClick={() => setFormVisible(true)}
          >
            Proceed to Pay ₹{totalAmount}
          </button>
        )}

        {isFormVisible && (
          <PaymentForm
            totalAmount={totalAmount}
            onClose={() => setFormVisible(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
