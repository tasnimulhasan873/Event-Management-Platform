import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <Link to="/" className="mt-6 btn btn-primary">Go Home</Link>
    </div>
  );
};

export default NotFound;
