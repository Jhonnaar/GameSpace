import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filters from "./pages/filters.js";
import Home from "./pages/home.js"
import Inventory from "./pages/inventory.js";
import Statistics from "./pages/statistics.js"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} ></Route>
        <Route exact path="/statistic" element={<Statistics/>} ></Route>
        <Route exact path="/filter/:keyFilter/:valueFilter" element={<Filters/>} ></Route>
        <Route exact path="/inventory/:action" element={<Inventory/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
