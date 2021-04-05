import React from "react";
import './App.css';
import Appbar from "./components/AppBar";
import NavTab from "./components/InfoPanel";



function App() {
  return (
    <div className="App"> 
    <Appbar />
    <NavTab/>
    </div>
  );
}

export default App;
