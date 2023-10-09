import { Suspense } from "react"
import { NavLink, Outlet } from "react-router-dom"
import "../SharedLayout/SharedLayout.css"

 const SharedLayout = () => {
    return (
        
        <div className="body">
            
            <header className="header">
            <nav>
             <NavLink to="/" className="header_link">Home</NavLink>
             <NavLink to="/movies" className="header_link">Movies</NavLink>
            </nav>
            </header>
            
                 <Suspense fallback={<div>Loading...</div>}>
                 <Outlet />
                 </Suspense>
          
        </div>
       
    )
}

export default SharedLayout