import { useState } from 'react'
import './App.css'

async function getData(setChurches) {
  
}

function App() {
  const [churches, setChurches] = useState([]);
  const [churchName, setChurchName] = useState('');
  const [isChristian, setChristian] = useState(true);

  const handlePostButtonClick = async (e) => {
    e.preventDefault();
    console.log('handlePostButtonClick: ', {churchName, isChristian});

    // fetch POST endpoint
    const resJson = await fetch('/api/churches', {
      method: 'POST',
      body: JSON.stringify( { name: churchName, is_christian: isChristian } )
    });

    console.log('resJson: ', resJson);
    const resObj = await resJson.json();
    console.log('resObj: ', resObj);

  } 

  const handleChristianCheckboxChange = (e) => {
    console.log('handleChristianCheckboxChange e: ', e);
    setChristian(e.target.checked);
  }

  return (
    <>
      <h1>Churches</h1>
      <div className='card'>
        <h2>GET</h2>

      </div>
      
      <div className='card'>
        <h2>POST</h2>
        <form>
          <input type="text" name='church-name-input' placeholder='Church name...' onChange={(e) => setChurchName(e.target.value)}/>
          <input type="checkbox" name='church-is-christian-checkbox' value={isChristian} checked={isChristian} onChange={handleChristianCheckboxChange} />Is Christian?
          <button onClick={ handlePostButtonClick }>
            Submit Post
          </button>
        </form>
      </div>
    </>
  )
}

export default App
