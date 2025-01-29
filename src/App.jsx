import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default App
