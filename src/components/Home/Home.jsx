import {getTrendingMovies} from "../../servise"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export const Home = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
    getTrendingMovies().then(setMovies)
        }, [])

    return (
        <div>
        {movies.map((movie) => {
            return (
                <ul key={movie.id}>
                    <li><Link>{movie.original_title || movie.name}</Link></li>
                </ul>
            )
        })}
        </div>
    )
}