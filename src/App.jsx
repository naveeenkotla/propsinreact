import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import All from './all'
import './App.css'
let marks ={m:22,p:55,e:99}
function App() {
  return (
    <>
      <All usere="naveen" ide="99" mark={marks} />
      <hr></hr>
      <All usere="nav" ide="9" mark={marks} />

    </>
  )
}

export default App
