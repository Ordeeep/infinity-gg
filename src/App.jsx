import React from 'react';
import SearchPlayer from "./assets/components/searchPlayer"
import "./index.css"

function App() {
  return (
    <>
      <header className='homeHeader'>
        <nav className='homeNav'>
          <a href="#" className='homeLogo'>INFINITY.GG</a>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Análise de campeões</a></li>
            <li><a href="#">Estatísticas</a></li>
            <li><a href="#">Classificações</a></li>
            <li><a href="#">PatchNotes 16.4</a></li>
          </ul>
        </nav>
      </header>
      <main className='homeMain'>
        <div>
          <h1>INFINITY.GG</h1>
          <SearchPlayer />
        </div>
      </main>
      <footer>
      </footer>
    </>
  )
}

export default App
