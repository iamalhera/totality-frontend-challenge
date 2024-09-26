import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Header: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Ref for dropdown
  // console.log({user});
  // Effect to handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false); // Close dropdown when clicking outside
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
        
        {/* Logo / Title */}
        <div className="mb-2 sm:mb-0">
          <Link to="/" className="text-2xl font-bold text-blue-600">StayEase</Link>
        </div>

        {/* Middle Links */}
        <nav className="mb-2 sm:mb-0">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/" className="text-gray-600 hover:text-blue-600">News</Link>
            <Link to="/property-listing" className="text-gray-600 hover:text-blue-600">Rental Properties</Link>
            <Link to="/wishlist" className="text-gray-600 hover:text-blue-600">Your Favourites</Link>
          </div>
        </nav>

        {/* Right section: Auth Links */}
        <div className="relative">
          {!isAuthenticated ? (
            <button
              onClick={() => loginWithRedirect()}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Log In
            </button>
          ) : (
            <div className="flex items-center space-x-3 hover:bg-gray-100 p-1 rounded-lg">
              {/* User name and photo */}
              <span
                onClick={() => setShowDropdown(!showDropdown)}
                className="cursor-pointer text-gray-600"
              >
                {user?.name}
              </span>
              <img
                onClick={() => setShowDropdown(!showDropdown)}
                src={user?.picture}
                alt="User avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
              />

              {/* Dropdown */}
              {showDropdown && (
                <div ref={dropdownRef} className="absolute right-0 mt-12 w-48 bg-white shadow-md rounded-lg py-2">
                  <button
                    onClick={() => logout({
                      logoutParams: { returnTo: window.location.origin }
                    })}
                    className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 "
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
