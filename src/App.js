import React, { useContext } from "react";
// import { UserContext } from '../App'
import { Usecontext1 } from "./UserContext/Usercontext1";

import Home from "./Componenta/Home";
import Login from "./Componenta/Login";
import Register from "./Componenta/Register";

import Feeds from "./Componenta/Feeds";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Album from "./Componenta/Album";

export default function App() {
  const { flag, setFlag } = useContext(Usecontext1);

  return (
    <>
    <Router>
      {flag == 0 || flag == 2 ? <Login /> : <Home />}
      {/* {flag ===0 && <Login/>} */}
      {/* {flag ===1 && <Home/>} */}
      {flag === 2 && <Register />}

      
        
        <Routes>
          <Route path="/feeds" index element={<Feeds />}></Route>
          {/* <Route path="/post" element={<Post />}></Route> */}
          <Route path="/album" element={<Album />}></Route>
        </Routes>
      </Router>
    </>
  );
}