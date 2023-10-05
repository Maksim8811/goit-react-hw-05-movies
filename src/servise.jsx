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


