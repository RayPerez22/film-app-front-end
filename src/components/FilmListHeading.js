
import React from 'react'

const FilmListHeading = (props) => {
  return (
    <nav className="nav">
      <a className="nav-link active" aria-current="page" href="#">{props.heading}</a>
      <a className="nav-link" href="/">Home</a>
      <a className="nav-link" href="/profile">Profile</a>
      <a className="nav-link" href="/profile/new">Create Profile</a>
    </nav>
  )
}

export default FilmListHeading
