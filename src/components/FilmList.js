import React from "react";

const FilmList = (props) => {
    return(
        <>
            {props.film.map((film, index)=> (
                <div className=''>
        
                
            <div className="image-container d-flex justify-content-start m-3 ">
                <img src={film.Poster} alt='film'></img>
                <div className="overlay d-flex align-items-center justify-content-center"></div>
            </div>
            </div>
            ))}
        </>
    )
}

export default FilmList