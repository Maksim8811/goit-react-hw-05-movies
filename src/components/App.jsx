import {Routes, Route} from "react-router-dom";
// import {lazy} from "react";

import {Home} from "components/Home/Home";
import {Movies} from "components/Movies/Movies";
import {SharedLayout} from "components/SharedLayout/SharedLayout"

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="*" element={<Home/>}/>
        </Route>

        
      </Routes>


      
    </>
  );
};
