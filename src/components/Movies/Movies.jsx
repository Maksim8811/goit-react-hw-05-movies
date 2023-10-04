import "../Movies/Movies.css"

export const Movies = () => {
    return (
        <div className="movies_input">
        
      <input
        type="text"
        value={null}
        onChange={null}
      />

      <button type="submit" className="button_search">Search</button>

      </div>
       
    )
}