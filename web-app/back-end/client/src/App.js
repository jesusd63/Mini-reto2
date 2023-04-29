import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home"
import Put from "./Pages/Put"
import Add from "./Pages/Add"

function App() {

  return (
    <BrowserRouter> 
      <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/put/:id" element={<Put />}/>
        <Route path="/add" element={<Add />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;