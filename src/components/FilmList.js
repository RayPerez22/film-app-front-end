import React from "react";

const FilmList = (props) => {
    return (
        <>
            {props.film.map((film, index) => (
                <div className='d-flex flex-row m-3'>
                    <div className="image-container d-flex justify-content-start m-3 ">
                        <a href={`/film/${film.imdbID}`}><img src={film.Poster} alt='film'></img></a>
                        <div className="overlay d-flex align-items-center justify-content-center"></div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default FilmList