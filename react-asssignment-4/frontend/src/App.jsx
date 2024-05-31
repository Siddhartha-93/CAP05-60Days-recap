import { useState } from 'react'
import AllRoutes from './component/AllRoutes'
import NavBer from './component/NavBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBer/>
     <AllRoutes />
    </>
  )
}

export default App
