import React from "react";
import SearchPlayer from "../../components/searchPlayer";
import "./HomePage.css";

function App() {
  return (
    <div className="homeContainer">
      <header className="homeHeader">
        <nav className="homeNav">
          <a href="#" className="homeLogo">
            INFINITY.GG
          </a>
          <ul>
            <li>
              <a href="/profile">Inicio</a>
            </li>
            <li>
              <a href="#">Análise de campeões</a>
            </li>
            <li>
              <a href="#">Estatísticas</a>
            </li>
            <li>
              <a href="#">Classificações</a>
            </li>
            <li>
              <a href="#">PatchNotes 16.4</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="homeMain">
        <div>
          <h1>
            INFINITY.<span className="latterStrongLogo">GG</span>
          </h1>
          <SearchPlayer />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
