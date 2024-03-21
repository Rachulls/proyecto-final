import './index.css'
import { useState } from 'react'
import { LandingPage } from './pages/LandingPage'
import { MyRouters } from './Routers/Routes'
import { SideBar } from './components/Header/SideBar'
import { PromocionesPage } from './pages/PromocionesPage'


function App() {

  return (
    <>
        <LandingPage>
        <MyRouters />
        </LandingPage>

    </>
  )
}

export default App
