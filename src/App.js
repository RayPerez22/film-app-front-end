import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FilmList from './components/FilmList';
import FilmListHeading from './components/FilmListHeading';
import SearchField from './components/SearchField';
import AddFav from './components/AddFav';

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


    <div className="container-fluid film-app">
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <FilmListHeading heading='Films' />
        <SearchField searchValue={searchValue} setSearchValue={setSearchValue} />

      </div>
      <Router>
        <Routes>
          <Route path='/' element={<FilmList film={film} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
