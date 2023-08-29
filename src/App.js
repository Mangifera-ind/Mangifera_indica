import "./style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Weather from './routes/Weather'
import React from "react";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/weather" element={<Weather/>}/>
      </Routes>
      
      
 
      
        
    </div>
  );
}

