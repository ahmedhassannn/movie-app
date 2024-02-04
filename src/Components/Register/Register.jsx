import React ,{ useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Joi from 'joi'
import {Helmet} from "react-helmet";
import {motion} from 'framer-motion'



export default function Register() {

  let navigate = useNavigate()
  const [errorList, seterrorList] = useState([])
  const [isloadin, setisloadin] = useState(false)
   const [error, seterror] = useState('')
   const [user, setUser] = useState({
    first_name:'',
    last_name:'',
    age: 0,
    email:'',
    Password:''
   })

  function validationRegisterForm (){
    let scheme =  Joi.object({
      first_name: Joi.string().pattern(/^[A-Z]/).min(3).max(10).required(),
      last_name: Joi.string().min(3).max(10).required(),
      age: Joi.number().min(16).max(80).required(),   
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      Password: Joi.string().min(8).required(), 
    })

    return scheme.validate(user , {abortEarly:false})
    

  }

   function getuserdata(eventInfo){
     let myUser = {...user}
     myUser[eventInfo.target.name] = eventInfo.target.value
     setUser(myUser)
   }

   async function senddatatoapi(){
   let{data} = await axios.post(`https://route-egypt-api.herokuapp.com` , user)
   if(data.message === 'success'){

    setisloadin(false);

   }
   else{
    seterror(data.message)
   }

   }

   function submitform(e){
    setisloadin(true);
    e.preventDefault();
    let valid = validationRegisterForm();
    if(valid.error){
      setisloadin(false)
      seterrorList(valid.error.details)
    }
    else{
      setTimeout(() => {
        navigate('/login')
      }, 3000);
    }

    //senddatatoapi();
    validationRegisterForm()

   }



  return <>
   <Helmet>
                <meta charSet="utf-8" />
                <title>Register</title>
            </Helmet>
   <div className='justify-content-center align-items-center register-div'>
<form onSubmit={submitform} >

<label htmlFor="first_name" className='mt-2' >First name :</label>
<input onChange={getuserdata} type="text" className='form-control my-inbut my-2' name='first_name' id='first_name'/>
{
  errorList.filter((err)=>err.context.label === 'first_name')[0]?<div className='alert alert-danger'> 
  {errorList.filter((err)=>err.context.label === 'first_name')[0]?.message}
   </div> : ''
}


<label htmlFor="las_-name" className='mt-2'>Last name :</label>
<input onChange={getuserdata} type="text" className='form-control my-inbut my-2' name='last_name' id='last_name'/>
{
  errorList.filter((err)=>err.context.label === 'last_name')[0]?<div className='alert alert-danger'> 
  {errorList.filter((err)=>err.context.label === 'last_name')[0]?.message}
   </div> : ''
}

<label htmlFor="age" className='mt-2'>Age :</label>
<input onChange={getuserdata} type="number" className='form-control my-inbut my-2' name='age' id='age'/>
{
  errorList.filter((err)=>err.context.label === 'age')[0]?<div className='alert alert-danger'> 
  {errorList.filter((err)=>err.context.label === 'age')[0]?.message}
   </div> : ''
}

<label htmlFor="email" className='mt-2'>Email:</label>
<input onChange={getuserdata} type="email" className='form-control my-inbut my-2' name='email' id='email'/>
{
  errorList.filter((err)=>err.context.label === 'email')[0]?<div className='alert alert-danger'> 
  {errorList.filter((err)=>err.context.label === 'email')[0]?.message}
   </div> : ''
}

<label htmlFor="Password" className='mt-2'>Password :</label>
<input onChange={getuserdata} type="Password" className='form-control my-inbut my-2' name='Password' id='Password'/>
{
  errorList.filter((err)=>err.context.label === 'Password')[0]?<div className='alert alert-danger'> 
  {errorList.filter((err)=>err.context.label === 'Password')[0]?.message}
   </div> : ''
}


<motion.button 
whileHover={{scale :1.1 }}
transition={{type:'spring' , stiffness:300 , }}
 type='submit' 
 className='btn btn-info my-5'>
  {isloadin === true ? <i className='fas fa-spinner fa-spin'></i> : 'Register'}
</motion.button>

</form>
</div>
  
  </>
}
