import React from 'react';
import { UserState } from '../contexts/userProvider';
import { useNavigate } from 'react-router-dom';

const Middleware = ({ children }) => {
  const { user } = UserState();
  const navigate = useNavigate();

  if (!user) {
    console.log("User not authenticated. Redirecting to login.");
    navigate('/login');
    return null; // or you can render a loading indicator or a message
  }

  console.log("User authenticated. Rendering children.");
  return <>{children}</>;
};

export default Middleware;
