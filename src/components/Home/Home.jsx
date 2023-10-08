import {getTrendingMovies} from "../../servise"
import { useEffect, useState } from "react"
import { FilmList } from "pages/FilmList/FilmList"


export const Home = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
    getTrendingMovies().then(setMovies)
        }, [])
console.log('movies', movies)
    return (
        <div>
            <h1>Trending today</h1>
            <FilmList movies={movies}/>
        </div>
    )
}