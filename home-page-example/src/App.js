import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import MyNavBar from "./components/MyNavBar";
import Welcome from "./components/Welcome";
import Contact from "./pages/Contact.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./pages/info.js";
import Form from "./pages/Form.js";
import Layout from "./pages/Layout.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";

export const pages = [
  {
    name: "Home",
    path: "/",
    element: <Welcome />
  },

  {
    name: "Contact",
    path: "/contact",
    element: <Contact />
  },
  {
    name: "Info",
    path: "/info",
    element: <Info />
  },
  {
    name: "Form",
    path: "/form",
    element: <Form />
  },

  {
    name: "Login",
    path: "/login",
    element: <Login />
  },
  {
    name: "Register",
    path: "/register",
    element: <Register />
  }
]


function App() {
  return (
    
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>

        {pages.map((page, index) =>  {
          return (
          <Route key={index} path={page.path} element={page.element} />
          )
          })}
        {/* <Route index element={<Welcome />} />
        <Route index element={<MyNavBar />} />

        <Route path="contact" element ={<Contact />} />
        <Route path="info" element ={<Info />} />
        <Route path="welcome" element ={<Welcome/>} />
        <Route path="form" element ={<Form/>} /> */}
</Route>

      </Routes>
      
      </BrowserRouter>
      
     
      
      
      
      
      
      
     
    
  );
}

export default App;
