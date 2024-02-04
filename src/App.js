import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Offline,  } from "react-detect-offline"
import Layout from './Components/Layout/Layout'
import Movies from './Components/Movies/Movies'
import Login from './Components/Login/Login'
import People from './Components/People/People'
import Tv from './Components/Tv/Tv'
import Register from './Components/Register/Register'
import Home from './Components/Home/Home'
import { useEffect, useState } from 'react';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import Getsimilar from './Components/Getsimilar/Getsimilar';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary'

function App() {
  
  
  const [userData, setuserData] = useState(false)
  function saveuserdata(){
    let x = localStorage.getItem('userToken')
    setuserData(x)
  }

  

  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      setIsLoggedIn(true);
    }
  }, []);
  function handleLogin() {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  }
  
  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');

  }

  let routers = createBrowserRouter([
    {path:'/' , element:<Layout  userData={userData}  handleLogout={handleLogout} isLoggedIn={isLoggedIn} />  , children:[
      {path:'home' , element: <Home/>},
      {path:'movies' , element: <Movies/>},
      {path:'people' , element: <People/>},
      {path:'tv' , element: <Tv/>},
      {path:'ItemDetails /:id/:media_type' , element : <ItemDetails/>},
      {path:'Getsimilar /:id/:media_type' , element : <Getsimilar/>},
      {path:'login' , element: <Login saveuserdata={saveuserdata} handleLogin={handleLogin}/>},
      { index: true, element: <Register />},
      { path: '*', element: <ErrorBoundary /> }
  
    ]}
    
  ])
  
  return <>
  <div>
    <Offline ><div className='offline'> You are offline </div></Offline>
  </div>
  <RouterProvider router={routers}/>
  
  </>
  
  
 
  
}
export default App;
