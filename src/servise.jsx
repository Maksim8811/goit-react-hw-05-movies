import axios from "axios"

const KEY = "0374e7ed31d5e8507eaf6ae86e4e0e15"


export const getTrendingMovies = async() => {
 const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`)
 return data.results
}

export const getMoviesId = async movieId => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US` )
    return data 
}

export const getCast = async movieId => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
   
    return data.cast
}

export const getReviews = async movieId => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`)
    return data.results

}

export const getSearchMovies = async query => {

    const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}&include_adult=false&language=en-US&page=1`)
  
    console.log('nameMovie', data.results)
    return data.results
}


