import {useSearchParams} from "react-router-dom"
import {useEffect, useState } from "react"
import {getSearchMovies} from "../../servise"
import "../Movies/Movies.css"
import { FilmList } from "pages/FilmList/FilmList"

export const Movies = () => {
    const [searchName, setSearchName] = useState([])
    const [searchParam, setSearchParams] = useSearchParams()
    const productName = searchParam.get("name") ?? ""
   
   
    useEffect(() => {

      const  fetchMoviesName = async () => {
        try{
          const movies = await getSearchMovies(productName)
          setSearchName(movies)
        }
        catch(err) {
          console.log(err)
        }
      }
      fetchMoviesName()
    },[productName])

    const handleSubmit = e => {
      e.preventDefault()
      setSearchParams({name: e.target.value})
     
    
      }

      console.log('searchName', searchName)

    return (
        <div className="movies_input">
        
       <form onSubmit={() => handleSubmit(productName)}>
      <input
        type="text"
        name="name"
        placeholder="name movie"
      />

      <button type="submit" className="button_search">Search</button>
      </form>
     

      {<FilmList movies={searchName}/>}
      </div>
       
    )
}