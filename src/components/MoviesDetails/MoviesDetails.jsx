import { useState, useEffect } from "react"
import {useLocation, useParams, Link, Outlet} from 'react-router-dom';
import {getMoviesId} from "../../servise"
import {BASE_POSTER_URL, PLACEHOLDER} from "../../utilits/contactsUrl"
import "./MoviesDetails.css"

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
         

        const backLinkHref = location.state?.from ?? "/"
      
    return(
        <>
        <Link to={backLinkHref} >Go to back</Link>
        {/* <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title}/> */}
        <img src={`${
            movie.poster_path
              ? BASE_POSTER_URL + movie.poster_path
              : PLACEHOLDER + '?text=' + movie.original_title
          }`}
          alt={movie.original_title}/>
        <h2>{movie.original_title}</h2>
        <p> <b>Rating:</b> {`${movie.vote_average}`}</p>
        <p> <b>Owerview:</b> <br/> {`${movie.overview}`}</p>
        <p> <b>Popularity:</b> {`${movie.popularity}`}</p>
        
        <ul>
            <li><Link to="cast" state={location.state} className="cast_link">Cast</Link></li>
            <li><Link to="reviews" state={location.state} className="cast_link">Reviews</Link></li>
        </ul>
       
        <Outlet/>
        </>
    )
}