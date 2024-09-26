import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { Cart, Homepage, NotFound, PropertyListing, Wishlist } from './pages';
import Checkout from './pages/Checkout';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {

  return (
    <div className="w-full">
      <Header />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/property-listing' element={<PropertyListing />} />

        {/* Protected routes */}
        <Route
          path="/checkout"
          element={<ProtectedRoute component={Checkout} />}
        />
        <Route
          path="/wishlist"
          element={<ProtectedRoute component={Wishlist} />}
        />
        <Route
          path="/cart"
          element={<ProtectedRoute component={Cart} />}
        />

        {/* not found route */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
