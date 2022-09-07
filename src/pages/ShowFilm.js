import React from 'react'
import { getFilmId } from '../services/films-api'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShowFilm = () => {
    const [film, setFilm] = useState('')
    const {id} = useParams()

    useEffect(() => {
      getFilmId(id)
      .then(res => setFilm(res.data))
      console.log(film)
    }, [])
    


  return (
    <div>
        <img src={film.Poster}></img>
        <h2>Title: {film.Title}</h2>
        <h2>Year: {film.Year}</h2>
        <p>Plot: {film.Plot}</p>
        <h4>imdbRating: {film.imdbRating}</h4>
    </div>
  )
}

export default ShowFilm