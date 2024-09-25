import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import { Cart, Homepage, PropertyListing, Wishlist } from './pages';
import Checkout from './pages/Checkout';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
// import "./index.css";
// import {PropertyListing} from './pages';
// import Profile from './Profile';

const App: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  console.log(user);
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
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
