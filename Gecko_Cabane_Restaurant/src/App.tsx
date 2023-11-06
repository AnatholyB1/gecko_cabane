
import './App.css'
import Home from '@/page/home.tsx'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import About from './page/about.tsx'
import Services from './page/services.tsx'
import Shop from './page/shop.tsx'
import Contact from './page/contact.tsx'
import Privacypolicy from './page/privacy-policy.tsx'
import NotFound from './page/404notfound.tsx'
import { ThemeProvider } from "@/components/theme-provider"
import CGU from './page/cgu.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  errorElement={<NotFound/>} >
        <Route path='/' element={<Home/>}  ></Route>
        <Route path='about' element={<About/>}  ></Route>
        <Route path='services' element={<Services/>}  ></Route>
        <Route path='shop' element={<Shop/>}  ></Route>
        <Route path='contact' element={<Contact/>} ></Route>
        <Route path='privacy-policy' element={<Privacypolicy/>}  ></Route>
        <Route path='cgu' element={<CGU/>} ></Route>
        <Route path='not-found' element={<NotFound/>} ></Route>
    </Route>
  )
)

function App() {

  return ( 
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router}   />
    </ThemeProvider>)
}

export default App

