import {getTrendingMovies} from "../../servise"
import { useEffect, useState } from "react"
import FilmList  from "pages/FilmList/FilmList"
import "../Home/Home.css"


 const Home = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
    getTrendingMovies().then(setMovies)
        }, [])

    return (
        <div>
            <h1 className="title">Trending today</h1>
            <FilmList movies={movies}/>
        </div>
    )
}

export default Home