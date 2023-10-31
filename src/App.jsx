

import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Typed from 'typed.js'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Skills from './Component/Skills/Skills'
import Portfolio from './Component/Portfolio/Portfolio'
import Services from './Component/Services/Services'
import Contact from './Component/Contact/Contact'
import AnimationCursor from './Component/AnimationCursor/AnimationCursor'



export default function App() {
 


  let routes = createHashRouter([
    {path : "/" , element : <Layout/> , children : [
      {path : '/' , element : <Home/>},
      {path : 'about' , element : <About/>},
      {path : 'skill' , element : <Skills/>},
      {path : 'portfolio' , element : <Portfolio/>},
      {path : 'services' , element : <Services/>},
      {path : 'contact' , element : <Contact/>},
    ]}
  ])


  return (
    <>
  
    <AnimationCursor/>


       <RouterProvider router={routes}  ></RouterProvider>
   
    </>
  )
}



