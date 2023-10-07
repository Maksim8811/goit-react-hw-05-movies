import {Routes, Route} from "react-router-dom";
import {MoviesDetails} from "pages/MoviesDetails";
// import {lazy} from "react";

import {Home} from "components/Home/Home";
import {Movies} from "components/Movies/Movies";
import {SharedLayout} from "components/SharedLayout/SharedLayout"
import {Cast} from "pages/Cast"

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/movies" element={<Movies/>}/>
          <Route path="/movies/:movieId" element={<MoviesDetails/>}>
            <Route path="cast" element={<Cast/>}/>
          </Route>
            <Route path="*" element={<Home/>}/>
        </Route>

        
      </Routes>


      
    </>
  );
};
