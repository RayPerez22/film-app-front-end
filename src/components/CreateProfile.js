import { useNavigate } from "react-router-dom"
import { createFilmPro } from "../services/films-api"




const CreateProfile = () => {
  const nav = useNavigate()

  const createTheFilm = (e) => {
    const film = {user: e.target.user.value}
    createFilmPro(film)
    nav('/profile')
  }
  
  return (
    <form onSubmit={createTheFilm}>
      <h1>Create Profile</h1>
      <div className="mb-3 w-25">
        <label htmlFor="exampleFormControlInput1"
          className="form-label">User Name</label>
        <input
          type="text"
          className="form-control" id="exampleFormControlInput1" placeholder="User Name" />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">Submit</button>
      </div>
    </form>
  )
}

export default CreateProfile