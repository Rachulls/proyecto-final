import './index.css'
import { useState } from 'react'
import { Header } from './components/Header/FirstHalfHeader'
import { LandingPage } from './pages/LandingPage'

function App() {
  const [] = useState(0)

  return (
    <>
      <Header/>
      <LandingPage/>
    </>
  )
}

export default App
