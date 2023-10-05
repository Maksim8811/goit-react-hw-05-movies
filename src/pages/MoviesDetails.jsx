import { useState, useEffect } from "react"
import {useLocation, useParams, Link} from 'react-router-dom';
import {getMoviesId} from "../servise"
import {Cast} from "./Cast"



export const MoviesDetails = () => {
        const location = useLocation()
        const [movie, setMovie] = useState('')
        const {movieId} = useParams()

    useEffect(() => {
       
        const fetchMovieId = async () => {
            try {
                const movieById = await getMoviesId(movieId)
                setMovie(movieById)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchMovieId()

        }, [movieId])
            console.log(movie)

        const backLinkHref = location.state?.from ?? "/movies"
      
    return(
        <>
        <Link to={backLinkHref}>Go to back</Link>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.original_title}/>
        <h2>{movie.original_title}</h2>
        <p> <b>Rating:</b> {`${movie.vote_average}`}</p>
        <p> <b>Owerview:</b> <br/> {`${movie.overview}`}</p>
        <Cast/>
        
        </>
    )
}