import { useState, useEffect } from "react"
import {useLocation, useParams, Link, Outlet} from 'react-router-dom';
import {getMoviesId} from "../servise"




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
         

        const backLinkHref = location.state?.from ?? "/movies"
      
    return(
        <>
        <Link to={backLinkHref}>Go to back</Link>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.original_title}/>
        <h2>{movie.original_title}</h2>
        <p> <b>Rating:</b> {`${movie.vote_average}`}</p>
        <p> <b>Owerview:</b> <br/> {`${movie.overview}`}</p>
        <p> <b>Popularity:</b> {`${movie.popularity}`}</p>
        
        <Link to="cast">Cast</Link>
        <Outlet/>
      
       
        
        </>
    )
}