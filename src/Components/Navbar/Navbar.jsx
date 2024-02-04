
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext/UserContext';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  let navigate = useNavigate();

  function handleLogoutAndRedirect() {
    setIsLoggedIn(false); // Update login status on logout
    navigate('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light py-2">
      <div className="container">
        <h1 className="  me-5">noxe</h1>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          {isLoggedIn && (
            <ul className="navbar-nav d-flex row m-0 align-items-center list-unstyled">
              <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }} className="nav-link px-2 mt-1 col-md-3 nav-btn"> <Link to='home'>Home</Link></motion.li>
              <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }} className="nav-link px-2 mt-1 col-md-3 nav-btn"> <Link to='movies'>Movies</Link></motion.li>
              <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }} className="nav-link px-2 mt-1 col-md-3 ps-4 nav-btn"> <Link to='tv'>TV</Link></motion.li>
              <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }} className="nav-link px-2 mt-1 col-md-3 nav-btn"> <Link to='people'>People</Link></motion.li>
            </ul>
          )}

          <div className="right-nav d-flex align-items-center ms-auto">
            {!isLoggedIn && (
              <>
                <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }} className="nav-link px-2 nav-btn"> <Link to='login'>Login</Link> </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }} className="nav-link px-2 nav-btn"> <Link to="/">Register</Link> </motion.li>
              </>
            )}
            {isLoggedIn && (
              <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }} className="nav-link px-2 cursor-pointer nav-btn" onClick={handleLogoutAndRedirect}>Logout</motion.li>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
