import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import'@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import { UserContext, UserProvider } from './UserContext/UserContext';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <React.StrictMode>
       <App />
  </React.StrictMode>
  </UserProvider>
  
);


reportWebVitals();
