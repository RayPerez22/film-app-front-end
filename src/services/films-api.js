import axios from 'axios'

const baseUrl = 'https://back-end-films.herokuapp.com/films'

export const getFilmPro = () => {
    const url = `${baseUrl}`
    const res = axios.get(url)
    return res
}

export const getFilmProId = (id) => {
    const url = `${baseUrl}/${id}`
    const res = axios.get(url)
    return res
}

export const createFilmPro = (profile) => {
    const url = `${baseUrl}`
    const res = axios.post(url, {
        user: profile})
    return res
}

export const getFilmId = (id) => {
    const url = `http://www.omdbapi.com/?i=${id}&apikey=8defe0a1`
    const res = axios.get(url)
    return res
}

export const sendFilm = (id, film) => {
    const url = `${baseUrl}/addfilms`
    const res = axios.put(url, {id: id, film: film})
    return res
}
