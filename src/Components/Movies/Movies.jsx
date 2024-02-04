import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

export default function Movies() {
  const [Movies_page, setMovies_page] = useState([])

  async function getMovies_page(){
let {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=777f1c858ab1eaa7aecb0085ebcaff9b`)
setMovies_page(data.results)
  }
  useEffect(()=>{
    getMovies_page()

  },[])


  return <>
  <Helmet>
                <meta charSet="utf-8" />
                <title>Movies</title>
            </Helmet>
  <div className='row py-5'>
    <div className="col-sm-3 col-md-12 py-3 " >
      <div>
      <div className="brdr w-50 mb-3 r"></div>
      <h2 >Trendin  Movies to watch now</h2>
        <p className=' pt-3 subtitle_home'>Most watched movies by days</p>
      <div className="brdr w-50 mt-3"></div>
   </div>
    </div>
    
   {Movies_page.map((item , key)=>
    <Link className='col-md-3' to={`/ItemDetails /${item.id} /${item.media_type} `}>
    <div key={key} className=' hover_img'> 
    <div className='position-relative my-3'>
    <img src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} className='w-100 ' alt="" />
    <h3 className='h6 my-3'>{item.title}</h3>
    <div className='vote p-2  position-absolute top-0 end-0'>{item.vote_average?.toFixed(1)}</div>
    </div>
    </div>
    </Link>
)}

   </div> {/* movies */}
  
  </>
}
