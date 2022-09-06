import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Profile = () => {
  const { id } = useParams()
  return (
    <>
      <h1>hi {id}</h1>
      <Link to='/profile/ray'>ray</Link><br />
      <Link to='/profile/new'>New Profile</Link>
    </>
  )
}

export default Profile