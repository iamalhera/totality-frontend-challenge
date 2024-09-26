// NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8 text-lg">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
