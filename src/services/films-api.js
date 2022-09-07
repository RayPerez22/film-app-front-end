import axios from 'axios'

const baseUrl = 'http://localhost:3001/films'

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



export const createFilmPro = (film) => {
    const url = `${baseUrl}`
    const res = axios.post(url, film)
    return res
}

export const getFilmId = (id) => {
    const url = `http://www.omdbapi.com/?i=${id}&apikey=8defe0a1`
    const res = axios.get(url)
    return res
}