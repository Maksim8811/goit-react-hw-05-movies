import axios from "axios"

const KEY = "0374e7ed31d5e8507eaf6ae86e4e0e15"


export const getTrendingMovies = async() => {
 const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`)
 return data.results
}

