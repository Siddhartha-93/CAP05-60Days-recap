import { useState } from 'react'
import Focusable from './component/Focusable'
import Uncontrolled from './component/Uncontrolled'
import DomEvent from './component/DomEvent'
import './App.css'

function App() {
  return (
    <>
    <h2>Exploring useRef Hook</h2>
    <Focusable/>
    <Uncontrolled/>
    <DomEvent/>
    </>
  )
}

export default App
