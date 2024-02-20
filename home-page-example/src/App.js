import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import MyNavBar from "./components/MyNavBar";
import Welcome from "./components/Welcome";
import Contact from "./pages/Contact.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./pages/info.js";
import Form from "./pages/Form.js";


function App() {
  return (
    <div>
      <MyNavBar/>
      <BrowserRouter>
      <Routes>

        <Route index element={<Welcome />} />
        <Route index element={<MyNavBar />} />

        <Route path="/contact" element ={<Contact />} />
        <Route path="/info" element ={<Info />} />
        <Route path="/welcome" element ={<Welcome/>} />
        <Route path="/form" element ={<Form/>} />



      </Routes>
      
      </BrowserRouter>
      
     
      
      
      
      
      
      
     
     </div>
  );
}

export default App;
