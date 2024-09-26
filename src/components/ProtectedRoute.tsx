import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { toast } from 'react-toastify';
// this file is to check whether our routes are authenticated or not?
interface ProtectedRouteProps {
  component: React.ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  // If authentication is still loading, we can show a spinner/loader for better UX
  if (isLoading) {
    return <div className='text-center'>Loading...</div>;
  }

  // If  user is not authenticate, redirect to the login page and show are toast error
  if (!isAuthenticated) {
    toast.error('Please, Login to your account!', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return <Navigate to="/" />;
  }

  // If authenticated, render the protected component
  return <Component />;
};

export default ProtectedRoute;
