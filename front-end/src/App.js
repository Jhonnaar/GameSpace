import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.js"
import Statistics from "./pages/statistics.js"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} ></Route>
        <Route exact path="/statistics" element={<Statistics/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
