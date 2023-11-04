
import './App.css'
import Home from '@/page/home.tsx'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import About from './page/about.tsx'
import Services from './page/services.tsx'
import Shop from './page/shop.tsx'
import Contact from './page/contact.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
        <Route path='/' element={<Home/>} ></Route>
        <Route path='about' element={<About/>} ></Route>
        <Route path='services' element={<Services/>} ></Route>
        <Route path='shop' element={<Shop/>} ></Route>
        <Route path='contact' element={<Contact/>} ></Route>
    </Route>
  )
)

function App() {

  return ( 
     
        <RouterProvider router={router} />
  )
}

export default App
