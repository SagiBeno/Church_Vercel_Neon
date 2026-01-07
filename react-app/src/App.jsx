import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Churches</h1>
      <h2>GET</h2>

      <h2>POST</h2>
      <form>
        <input type="text" name='church-name-input' placeholder='Church name...'/>
        <input type="checkbox" name='church-is-christian-checkbox' />Is Christian?
        <button>
          
        </button>
      </form>
    </>
  )
}

export default App
