import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Getsimilar() {
    const [similarmovie, setsimilarmovie] = useState([])
    let {id , media_type } = useParams()


    async function Getsimilarmovie(id, mediaType){
        let {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=777f1c858ab1eaa7aecb0085ebcaff9b`)
        console.log(data.results)
        setsimilarmovie(data.results)
        
    }
    useEffect(()=>{
         Getsimilarmovie(id ,media_type )
    },[])
  


  return (
    <>
    <h1 className='py-4'>Similar :</h1>
    {similarmovie.slice(0,6).map((item , id)=>
        <div className="col-md-2 p-1">
      {item.poster_path? <img src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} className='w-100 ' alt="" /> :
      <img src={'https://image.tmdb.org/t/p/w500/'+item.profile_path} className='w-100' alt="" />}
      <h3 className='h6  my-3 text-center'>{item.title}{item.name}</h3>
  </div>
      
      )}</>
      
     
  )
}
