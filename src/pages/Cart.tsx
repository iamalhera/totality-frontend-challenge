import React from 'react';
import { useCart } from '../context/Context';
import { Link } from 'react-router-dom';
import CartSingleProperty from '../components/CartSingleProperty';

const Cart: React.FC = () => {
  const { cartState: { cart } } = useCart();


  return (
    <div className="flex flex-col items-center p-6">
      {/* Conditional Rendering when Cart is Empty */}
      {cart.length === 0 && (
        <h2 className="text-xl font-semibold text-gray-600 mt-4 flex flex-col items-center">
          Cart is empty!
          <br />
          <Link
            className="mt-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full block"
            to="/property-listing"
          >Explore Rental Properties</Link>
        </h2>
      )}

      {/* Rendering Cart Products */}
      {cart.length > 0 && (
        <div className='flex flex-col items-center'>

          <div className='flex justify-center flex-wrap gap-4 mx-8'>
            {cart.map((cartProperty) => (
              <CartSingleProperty key={cartProperty.id} property={cartProperty} />
            ))}
          </div>

          <Link
            to="/checkout" 
            className="mt-8 max-w-72 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full block"
          >Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
