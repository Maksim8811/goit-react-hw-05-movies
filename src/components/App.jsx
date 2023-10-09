import {lazy} from "react"
import {Routes, Route} from "react-router-dom"

const Home = lazy(() => import("./Home/Home"))
const MoviesDetails = lazy(() => import("./MoviesDetails/MoviesDetails"))
const Movies = lazy(() => import("./Movies/Movies"))
const SharedLayout = lazy(() => import("./SharedLayout/SharedLayout"))
const Cast = lazy(() => import("./Cast/Cast"))
const Reviews = lazy(() => import("./Reviews/Reviews"))


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/movies" element={<Movies/>}/>
          <Route path="/movies/:movieId" element={<MoviesDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
            <Route path="*" element={<Home/>}/>
        </Route>

        
      </Routes>


      
    </>
  );
};
