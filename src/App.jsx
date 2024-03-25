import { useState } from 'react';
import './App.css'
import { loginTest } from './chat';


export default function App() {
  function search() {
    const input = document.getElementById("inputed")
    const key = input.value;
  
    window.location.href = `https://www.google.com/search?q=${key}`
  
  }
  const [inputValue, inputedValue] = useState('');

  const handleInputChange = (event) => {
    inputedValue(event.target.value)
  }

  window.addEventListener('keypress', (e)=>{
    if(e.key === "Enter") {
      search()
    }
  })

  return (



    <div className='All'>
      <div className='lightflare1'></div>
      <main>


        <div className="searcher">
          <div className='heading'>
            <h1>
              IntellectProbe
            </h1>
            <h2>
              The Searcher that use other searchers!
            </h2>
          </div>
          <div className="ui-input">
            <ul className="ui-inut-ultimate">
              <input
                id='inputed'
                name='pesquisa'
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder='What you want to search today?'
                />
              <button>IA</button>
            </ul>
          </div>


          <ul className='buttons-searcher'>
            <button onClick={search}>Search</button>
            <button>View Documentation</button>
          </ul>
        </div>
      </main>
    </div>
  );
}
