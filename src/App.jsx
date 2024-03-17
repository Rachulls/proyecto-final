import './index.css'
import { useState } from 'react'
import { Header } from './components/Header/FirstHalfHeader'
import { SecondHalfHeader } from './components/Header/SecondHalfHeader'


function App() {
  const [] = useState(0)

  return (
    <>
      <Header></Header>
      <SecondHalfHeader></SecondHalfHeader>
    </>
  )
}

export default App
