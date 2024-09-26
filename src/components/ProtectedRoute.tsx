import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

interface ProtectedRouteProps {
  component: React.ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  // If authentication is still loading, you can show a spinner/loader
  if (isLoading) {
    return <div className='text-center'>Loading...</div>;
  }

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    alert("Please Login To Your account");
    return <Navigate to="/" />;
  }

  // If authenticated, render the protected component
  return <Component />;
};

export default ProtectedRoute;
