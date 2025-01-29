import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx'
import Features from './components/Features/Features.jsx'
import Pricing from './components/Pricing/Pricing.jsx'
import FAQ from './components/FAQ/FAQ.jsx'
import How from './components/How/How.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />} >
    <Route path='' element={<Home/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Features' element={<Features/>}/>
    <Route path='/HowitWorks' element={<How/>}/>
    <Route path='/Pricing' element={<Pricing/>}/>
    <Route path='/FAQ' element={<FAQ/>}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
