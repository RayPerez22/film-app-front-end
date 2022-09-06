import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FilmList from './components/FilmList';
import FilmListHeading from './components/FilmListHeading';
import SearchField from './components/SearchField';
// import AddFav from './components/AddFav';
import Home from './pages/Home';
import Show from './pages/Show';
import Profile from './components/Profile';
import NewProfile from './components/NewProfile';
import NotFound from './pages/NotFound';


function App() {
  //state
  const [film, setFilm] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const getFilmReq = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=8defe0a1`

    const res = await fetch(url)
    const resJson = await res.json()

    if (resJson.Search) {
      setFilm(resJson.Search)
    }
    //22:50
  }

  useEffect(() => {
    getFilmReq(searchValue)
  }, [searchValue])


  return (
    <div className="row container-fluid film-app">
      <div className='col'>
        <FilmListHeading heading='Films' />
        <SearchField searchValue={searchValue} setSearchValue={setSearchValue} />
        <FilmList film={film} />
      </div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/:id" element={<Show />} />
          <Route path='/profile'>
            <Route index element={<Profile />} />
            <Route path=':id' element={<Profile />} />
            <Route path='new' element={<NewProfile />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}
//row d-flex align-items-center mt-4 mb-4
export default App;
