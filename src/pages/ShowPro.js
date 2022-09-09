import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFilmProId } from '../services/films-api'

const Show = () => {
    const { id } = useParams()
    const [showPro, setShowPro] = useState([])

    useEffect(() => {
        getFilmProId(id)
        .then(res => setShowPro(res.data))
    }, [])
    


    return (
        <div>
            <h2>{showPro.user}</h2>
             <ul>
                {showPro.fav_films && showPro.fav_films.map((Pro) => {
                    return (
                        <>
                         <h1>{Pro.Title}</h1>
                        
                        </>
                       
                    )
                })}

            </ul>
            
        </div>
    )
}

export default Show