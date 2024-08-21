import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
function Nav() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default Nav
