import React from 'react'
import { getFilmId, sendFilm, sendTest, getFilmPro } from '../services/films-api'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ShowFilm = () => {
    const [film, setFilm] = useState('')
    const [profiles, setProfiles] = useState('')
    const [prof, setProf] = useState('')
    const { id } = useParams()
    const nav = useNavigate()

    useEffect(() => {
        getFilmId(id)
            .then(res => setFilm(res.data))
        getFilmPro(id)
            .then(res => setProfiles(res.data))
            .then(console.log(profiles))
    }, [])

    useEffect(() => {
      console.log(prof)
    }, [prof])
    

    const addFilm = (e) => {
        console.log(id, film)
        e.preventDefault()
        sendFilm(prof, film)
        nav('/profile')
    }


    return (
        <div>
            <img src={film.Poster}></img>
            <h2>Title: {film.Title}</h2>
            <h2>Year: {film.Year}</h2>
            <p>Plot: {film.Plot}</p>
            <h4>imdbRating: {film.imdbRating}</h4>
            <form onSubmit={addFilm}>

                <select className="form-select w-25" aria-label="Default select example" onChange={(e)=> setProf(e.target.value)}>
                    <option defaultValue>Select User</option>
                    
                    {profiles && profiles.map((profile, i) =>{
                        return (
                            <option value={profile._id} key={i} >{profile.user}</option>
                        )
                    })}
                </select>
                <button type="submit">Add Film</button>
            </form>
        </div>
    )
}

export default ShowFilm