import React, { useEffect, useState} from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import "./Banner.css"

const Banner = () => {
const [movie,setMovie] = useState()

  useEffect(() =>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
      console.log(Response.data.results[0])
      setMovie(Response.data.results[Math.floor(Math.random()*Response.data.results.length)])
    })
  }, [])
  const playClick =()=>{

    return(
      alert("Please Subscribe")
    )
  }
  return (
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
    className='banner'>
      <div className='content'>
        <h3 className='title'>{movie ? movie.title:""}</h3>
        <div className='banner-buttons'>
            <button className='button' onClick={playClick}>Play</button>
        </div>
        <p className='description'>{movie ? movie.overview:""}</p>
      </div>
      <div className='fade_bottom'></div>

    </div>
  )
}

export default Banner
