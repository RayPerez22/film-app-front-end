
import React from 'react'

const FilmListHeading = (props) => {
  return (
    <nav className="nav col">
      <a className="nav-link active" aria-current="page" href="#">{props.heading}</a>
      <a className="nav-link" href="/">Home</a>
      <a className="nav-link" href="/profile">Profile</a>
      <a className="nav-link disabled">Disabled</a>
    </nav>
    // <div className='col'>
    //     <h1>{props.heading}</h1>
    // </div>
  )
}

export default FilmListHeading
