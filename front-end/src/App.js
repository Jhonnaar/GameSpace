import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.js"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
