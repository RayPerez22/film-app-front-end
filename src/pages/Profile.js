
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getFilmPro } from '../services/films-api'

const Profile = () => {
  const { id } = useParams()
  const [films, setFilm] = useState([])
  useEffect(() => {
    getFilmPro()
      .then(res => setFilm(res.data)) 
  }, [])
  console.log(films)


  return (
    <>
      <h1>Hi {id}</h1>      
      <Link to='/profile/new'>Create Profile</Link>
      <ul>
                {films.map((film) => {
                    return (
                        <li><a href={`/${film._id}`}>{film.user}</a>
                        </li>
                    )
                })}

            </ul>
    </>
  )
}

export default Profile