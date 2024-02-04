// NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className='d-flex justify-content-center align-items-center  h-75'>
      <p className='h3 text-danger'>Oops! The page you're looking for doesn't exist.</p>
    </div>
  );
}

export default NotFoundPage;
