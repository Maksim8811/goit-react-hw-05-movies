import { useParams} from 'react-router-dom';
import {useEffect, useState, } from "react"
import {getCast} from "../servise"


export const Cast = () => {

    const [cast, setCast] = useState([])
    const {movieId} = useParams()
   

    useEffect(() => {
       
        const fetchCast = async () => {
            try {
                const cast = await getCast(movieId)
                setCast(cast)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchCast()

        }, [movieId])

        console.log('actors', cast)

    return (
        <>
        {cast.map(({id, original_name, character, profile_path}) => {
            return (
                <ul key={id}>
                    <li>
                        <img src="" alt={original_name}/>
                        <p><b>Actor:</b> {original_name}</p>
                        <p><b>Character:</b> {character}</p>
                    </li>
                </ul>
                
            )
        })}
        </>
    )
}