import React from 'react'
import {Outlet, } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


export default function Layout({userData ,  handleLogout, isLoggedIn }) {
    
  return (
    <>
     <Navbar   handleLogout={handleLogout} isLoggedIn={isLoggedIn}/>
    <div className="container">
    <Outlet></Outlet>
    </div>
    
    <Footer isLoggedIn={isLoggedIn}/>
    </>

     
  )
}
