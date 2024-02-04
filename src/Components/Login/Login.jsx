import React, {  useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Helmet} from "react-helmet";
import { motion } from 'framer-motion';
import { UserContext } from '../../UserContext/UserContext';



export default function Login( ) {
  const [isloading, setisloadin] = useState(false)
  let navigate = useNavigate()

  const { setIsLoggedIn } = useContext(UserContext);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  

  function submitform(e){
    setisloadin(true);
    e.preventDefault();
    localStorage.setItem('userToken', 'your_user_token');
      setTimeout(() => {
        navigate('/home')
      }, 0);
      handleLogin()
   }

  return <>
<Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
            </Helmet>
<form className='py-5 login-div' onSubmit={submitform}>

<label htmlFor="email" className='mt-2' >Email :</label>
<input type="text" className='form-control my-inbut my-2' name='email' id='first_name'/>

<label htmlFor="Password" className='mt-2'>Password :</label>
<input type="Password" className='form-control my-inbut my-2' name='Password' id='Password'/>

<motion.button
whileHover={{scale :1.1 }}
transition={{type:'spring' , stiffness:300 , }}
 onClick={handleLogin} type='submit' className='btn btn-info my-5'>
  {isloading === true ? <i className='fas fa-spinner fa-spin'></i> : 'login'}
</motion.button>



    </form>
  
  
  </>
  
}
