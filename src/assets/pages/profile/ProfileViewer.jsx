import SearchPlayer from "../../components/searchPlayer";
import "./ProfileViewer.css";
function ProfileViewer() {
  return (
    <>
      <header className="profileHeader">
        <nav className="profileNav">
          <a href="#" className="profileLogo">
            INFINITY.GG
          </a>

          <div className="navContainer">
          <SearchPlayer />

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
          </div>
        </nav>
      </header>

      <main>
        
      </main>
    </>
  );
}
export default ProfileViewer;
