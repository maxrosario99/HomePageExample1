import React from "react";
import { Link } from "react-router-dom";
import { pages } from "../App";

const MyNavBar = () => {
  return (
    <ul id="nav-container">
       <li>
        <Link to="/">
    <img   src="https://shorturl.at/druxL" height= "100px"/>
   </Link>

      </li> 
      {pages.map((page, index) => {

          let myPath = ""
        if(!index === 0){
          myPath = "/" + page.path
        } else {
          myPath = page.path
        }
        return (
          <li key={index}>
            <Link to={myPath}>{page.name} </Link>
          </li>
        )
      })}
      {/* // <li>
      //   <Link to="/">Home</Link>
      // </li>
      // <li>
      //   <Link to="/contact">Contact</Link>
      // </li>
      // <li>
      //   <Link to="/info">Info</Link>
      // </li>

      // <li>
      //   <Link to="/form">Form Page</Link>
      // </li>
       */}
    </ul>
  );
};

export default MyNavBar;
