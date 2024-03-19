import './index.css'
import { useState } from 'react'
import { LandingPage } from './pages/LandingPage'
import { MyRouters } from './Routers/Routes'


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
