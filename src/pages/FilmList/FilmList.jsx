
import {Link, useLocation} from "react-router-dom"
import "../FilmList/FilmList.css"

export const FilmList = ({movies}) => {
    const location = useLocation()
    
    return(
        <>
        {movies.map(({id, original_title, name}) => {
            return (
                <ul key={id}>
                    <li><Link to={`/movies/${id}`} state={{from: location}} className="link">{original_title || name}</Link></li>
                </ul>
            )
        })}
        </>
    )
}