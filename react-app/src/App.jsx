import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [churchName, setChurchName] = useState('');
  const [isChristian, setChristian] = useState(true);

  const handlePostButtonClick = async (e) => {
    e.preventDefault();
    console.log('handlePostButtonClick: ', {churchName, isChristian});
    // TODO - fetch POST endpoint

  } 

  const handleChristianCheckboxChange = (e) => {
    console.log('handleChristianCheckboxChange e: ', e);
    setChristian(e);
  }

  return (
    <>
      <h1>Churches</h1>
      <h2>GET</h2>

      <h2>POST</h2>
      <form>
        <input type="text" name='church-name-input' placeholder='Church name...' onChange={(e) => setChurchName(e.target.value)}/>
        <input type="checkbox" name='church-is-christian-checkbox' value={isChristian} checked={isChristian} onChange={handleChristianCheckboxChange} />Is Christian?
        <button onClick={ handlePostButtonClick }>
          Submit Post
        </button>
      </form>
    </>
  )
}

export default App
