import React from 'react';
import { useCart } from '../context/Context';
import WishlistSingleProduct from '../components/WishlistSingleProduct'; // Assuming this component is correctly set up
import { Link } from 'react-router-dom';

const Wishlist: React.FC = () => {
  const { cartState: { wishlist } } = useCart();


  return (
    <div className="flex flex-col items-center p-6">
      {/* Conditional Rendering when Wishlist is Empty */}
      {wishlist.length === 0 && (
        <h2 className="text-xl font-semibold text-gray-600 mt-4 flex flex-col items-center">
          Wishlist is empty!
          <br />
          <Link
            className="mt-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full block"
            to="/property-listing"
          >Explore Rental Properties</Link>
        </h2>
      )}

      {/* Rendering Wishlist Products */}
      {wishlist.length > 0 && (
        <div className='flex justify-center flex-wrap gap-4 mx-8'>
          {wishlist.map((wishprprty) => (
            <WishlistSingleProduct key={wishprprty.id} property={wishprprty} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
