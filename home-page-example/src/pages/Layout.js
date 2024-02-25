import React from "react"
import MyNavBar from "../components/MyNavBar"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
const Layout = () => {
    return(
        <>
        <MyNavBar/>
        <Outlet/>
        <Footer/>
        
        </>
    )
}

export default Layout