import { useState } from 'react'
import DynamicFocus from './component/DynamicFocus'
import FromHendel    from './component/fromHendel'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <DynamicFocus/>
  <FromHendel/>
  </>
  )
}

export default App
