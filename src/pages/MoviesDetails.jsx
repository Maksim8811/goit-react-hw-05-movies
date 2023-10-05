
import {getMoviesId} from "../servise"
import { useState, useEffect } from "react"
import {useLocation, useParams} from 'react-router-dom';
import {Link} from "react-router-dom"



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
        <h2>MoviesDetails</h2>
        <p>{movieId}</p>
        
        </>
    )
}