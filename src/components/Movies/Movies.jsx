import { useSearchParams } from "react-router-dom"
import {useEffect, useState } from "react"
import {getSearchMovies} from "../../servise"
import "../Movies/Movies.css"

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


    return (
        <div className="movies_input">
       <form>
      <input
        type="text"
        value={productName}
        onChange={evt => {
          evt.preventDefault()

          setSearchParams({name: evt.target.value})}}
        placeholder="name movie"
      />

      <button type="submit" className="button_search" onClick={() => getSearchMovies(productName)}>Search</button>
      </form>
      {searchName.map(({original_title, id}) => {
        return (
          <ul key={id}>
            <li>{original_title}</li>
          </ul>
        )
      })}
      </div>
       
    )
}