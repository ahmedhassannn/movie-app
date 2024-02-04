import React from 'react'
import { Link } from 'react-router-dom'

export default function MediaItem({Item }) {
  return (
    <div className='col-sm-4 col-md-2'>
        <Link to={`/ItemDetails /${Item.id} /${Item.media_type} `}>
        <div className="hover_img position-relative ">
            {Item.poster_path? <img src={'https://image.tmdb.org/t/p/w500/'+Item.poster_path} className='w-100 ' alt="" /> :
            <img src={'https://image.tmdb.org/t/p/w500/'+Item.profile_path} className='w-100' alt="" />}
            <h3 className='h6 my-3'>{Item.title}{Item.name}</h3>
            {Item.vote_average && <div className="vote p-2  position-absolute top-0 end-0">{Item.vote_average?.toFixed(1)}</div> }
        </div>
        </Link>
        
    </div>
  )
}
