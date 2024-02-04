import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem'
import {Helmet} from "react-helmet";

export default function Home() {
  const [trendingMovies, settrendingMovies] = useState([])
  const [trendingTv, settrendingTv] = useState([])
  const [trindingpeople, settrindingpeople] = useState([])

 async function gettrinding(TypeTrinding , callback){
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${TypeTrinding}/week?api_key=777f1c858ab1eaa7aecb0085ebcaff9b`)
    callback(data.results)
    console.log(data.results)
  }


  useEffect(()=>{
  gettrinding('movie' , settrendingMovies)
   gettrinding('tv' , settrendingTv)
  gettrinding('person' , settrindingpeople)
},[])

  return <>
  <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
  <div className='row home-div '>
    <div className="col-sm-3 col-md-4">
      <div>
      <div className="brdr w-25 mb-3"></div>
      <h2 >Trendin <br /> Movies <br />to watch now</h2>
      <div>
        <p className=' pt-3 subtitle_home'>Most watched movies by days</p>
      </div>
      <div className="brdr w-100 mt-3"></div>
   </div>
    </div>
    {trendingMovies.slice(0,10).map((Item , key)=><MediaItem key={key} Item={Item}/>)}
   </div> {/* movies */}

  <div className='row my-5'>
    <div className="col-sm-3 col-md-4">
      <div>
      <div className="brdr w-25 my-3"></div>
      <h2 >Trendin <br /> Tv shows <br />to watch now</h2>
        <p className=' pt-3 subtitle_home'>Most watched Tv shows by days</p>
      <div className="brdr w-100 my-3"></div>
   </div>
    </div>
    {trendingTv.slice(0,10).map((Item , key)=><MediaItem key={key} Item={Item}/>)}
  </div>{/* Tv */}

  <div className='row my-5'>
    <div className="col-sm-3 col-md-4">
      <div>
      <div className="brdr w-25 my-3"></div>
      <h2 >Trendin <br /> People <br />to watch now</h2>
        <p className=' pt-3 subtitle_home'>Most watched People by days</p>
      <div className="brdr w-100 my-3"></div>
   </div>
    </div>
    {trindingpeople.filter((person)=> person.profile_path !== null).slice(0,10).map((Item , key)=><MediaItem key={key} Item={Item}/>)}
  </div>{/* people */}
  
  
  </>
}
