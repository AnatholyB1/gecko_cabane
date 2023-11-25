
import './App.css'
import Home from '@/page/home.tsx'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import About from './page/about.tsx'
import Services from './page/services.tsx'
import Shop from './page/shop.tsx'
import Contact from './page/contact.tsx'
import Privacypolicy from './page/privacy-policy.tsx'
import NotFound from './page/404notfound.tsx'
import Menu from './page/menu.tsx'
import { ThemeProvider } from "@/components/theme-provider"
import CGU from './page/cgu.tsx'
import { MenuProvider } from './Provider/MenuProvider.tsx'
import { Toaster } from "@/components/ui/toaster"
import { CookiesProvider } from 'react-cookie'
import Admin from './page/admin.tsx'
import { AdminProvider } from './Provider/admin-provider.tsx'
import Settings from './page/settings.tsx'

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
        <Route path='*' element={<NotFound/>} ></Route>
        <Route path='menu' element={<Menu/>} ></Route>
        <Route path='admin' element={<Admin/>} ></Route>
        <Route path='settings' element={<Settings/>} ></Route>
    </Route>
  )
)

function App() {

  return (
    <CookiesProvider>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <MenuProvider>
        <AdminProvider>
          <RouterProvider router={router}   />
        </AdminProvider>
        <Toaster />
      </MenuProvider>
    </ThemeProvider>
    </CookiesProvider>
  )
}

export default App

