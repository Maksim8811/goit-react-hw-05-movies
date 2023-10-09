import { Suspense } from "react"
import {useSearchParams} from "react-router-dom"
import {useEffect, useState } from "react"
import {getSearchMovies} from "../../servise"
import "../Movies/Movies.css"
import  FilmList  from "pages/FilmList/FilmList"

 const Movies = () => {
    const [searchName, setSearchName] = useState([])
    const [searchParam, setSearchParams] = useSearchParams()
    const productName = searchParam.get("query") ?? ""
   
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
      setSearchParams({query: e.target.value})
     }

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="movies_input">
        <form onSubmit={() => handleSubmit(productName)}>
        <input
        type="text"
        name="query"
        placeholder="name movie"
        />

        <button type="submit" className="button_search">Search</button>
        </form>
     

      {<FilmList movies={searchName}/>}
      </div>
      </Suspense>
    )
}

export default Movies