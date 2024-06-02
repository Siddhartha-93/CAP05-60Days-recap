import { useState } from 'react'
import './App.css'
import NavBar from './component/NavBar'
import AllRouts from './component/routing/AllRouts'

function App() {
  const [count, setCount] = useState()

  return (
     <>
     <NavBar/>
     <AllRouts/>
     </>
  )
}

export default App
