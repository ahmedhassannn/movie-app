import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Helmet} from "react-helmet";
import Getsimilar from '../Getsimilar/Getsimilar';
import {motion} from 'framer-motion'
import img1 from '../ItemDetails/imges/Flag_of_Palestine.svg.png'


export default function ItemDetails() {
    let {id , media_type } = useParams()
    const [ItemDetails, setItemDetails] = useState({})




    async function GetItemDetails(id , mediaType){
        let {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=777f1c858ab1eaa7aecb0085ebcaff9b&language=en-US`)
        setItemDetails(data)
    }
    
    


    useEffect(()=>{
        GetItemDetails(id , media_type)
    },[])

    
  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>{ItemDetails.title}</title>
</Helmet>
     <div className='row item-details  align-items-center'>
        <div className='col-md-3 '>
            {ItemDetails.poster_path? <img img src={'https://image.tmdb.org/t/p/w500/'+ItemDetails.poster_path} className='w-100 ' alt="" /> :
            <img img src={'https://image.tmdb.org/t/p/w500/'+ItemDetails.profile_path} className='w-100 ' alt="" />
            }
        </div>
        <div className="col-md-6 ">
        <h1>{ItemDetails.title} {ItemDetails.name}</h1>
        {ItemDetails.birthday? <h5 className='pt-3'>birthday : {ItemDetails.birthday}</h5>: ''}
        {ItemDetails.place_of_birth? <h5 className='pt-3'>place of birth : {ItemDetails.place_of_birth}</h5>: ''}
        {ItemDetails.known_for_department ?  <h5 className='pt-3'> known for department : {ItemDetails.known_for_department}</h5> : ''}
        {ItemDetails.vote_average? <h5 className='pt-3'>Vote : {ItemDetails.vote_average?.toFixed(1)}</h5>: ''}
        {ItemDetails.vote_count ? <h5 className='py-2'>Vote count : {ItemDetails.vote_count?.toFixed(1)}</h5> :''}
        <h5 className='py-2'>Popularity : {ItemDetails.popularity}</h5>
        </div>

        <div className='col-md-3 '>
      <img src={img1} className='w-100 h-100 side-bar-ads' alt="" />
     </div>
     
     <div className='row mt-5 '>{media_type === 'person'? " ":<Getsimilar/>}
     </div>

     </div>
     

     
    
     
    </>
  )
}
