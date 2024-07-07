import SearchPlayer from "../../components/searchPlayer";
import "./ProfileViewer.css";
function ProfileViewer() {
  return (
    <div className="profileContainer">
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

      <main className="profileMain">
        <div className="profileContainer">
          <div className="navPlayerData">
            <nav>
              <ul>
                <li>Resumo</li>
                <li>Campeões</li>
                <li>
                  Jogo ao vivo <span>LIVE</span>
                </li>
              </ul>
            </nav>
          </div>
          <div className="playerDataContainer">
            <aside className="playerResumeDataContainer">
              {/*Parte da imagem e level do player*/}
              <div className="playerNameContainer">
                <div className="playerLevelContainer">
                  <img src="https://fakeimg.pl/90x90?font=bebas" alt="" />
                  <div>
                    <span id="playerLevel">526</span>
                  </div>
                </div>

                {/*Nome + Level do player junto ao botão de att*/}
                <div className="playerNameContainertwo">
                  <div>
                    <span id="playerName" className="playerName">Nome da conta#0000</span>
                    <span className="playerOldName">Anterior: <span id="playerOldName">Não sei pingar</span></span>
                  </div>
                  <div>
                    <button
                      className="profilePlayerButton"
                      id="profilePlayerButtonAtt"
                    >
                      Atualizar
                    </button>
                    <button
                      className="profilePlayerButton"
                      id="profilePlayerButtonPlus"
                    >
                      Ver mais
                    </button>
                    <span id="playerProfileLastUpdated">
                      Ultima vez atualizado: 8 horas.
                    </span>
                  </div>
                </div>
              </div>

              {/*Parte do elo*/}
              <div className="playerEloContainer">
                <div className="eloContainer">
                  <span>Ranqueada Solo/Duo</span>

                  <div className="eloContainer2">

                    <div>
                      <img src="https://fakeimg.pl/70x70?font=bebas" alt="elo" />
                      <div>
                        <span id="playerEloNameSoloDuo">Desafiante</span>
                        <span id="playerEloPdlSoloDuo">1200PDL</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <span>
                          <span id="playerTotalWinsSoloDuo">36</span>V
                          <span id="playerTotalLosersSoloDuo">00</span>L
                        </span>
                      </div>
                      <span id="playerEloPdlSoloDuo">Winrate 50%</span>
                    </div>

                  </div>
                </div>

                <div className="eloContainer">
                  <span>Ranqueada Flex</span>

                  <div className="eloContainer2">

                    <div>
                      <img src="https://fakeimg.pl/70x70?font=bebas" alt="elo" />
                      <div>
                        <span id="playerEloNameFlex">Desafiante</span>
                        <span id="playerEloPdlFlex">1200PDL</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <span>
                          <span id="playerTotalWinsFlex">36</span>V
                          <span id="playerTotalLosersFlex">00</span>L
                        </span>
                      </div>
                      <span id="playerEloWinRateFlex">Winrate 50%</span>
                    </div>

                  </div>
                </div>

              </div>

              <div className="playerWinRateChampion">
                <span className="textPlaceHolderHero">Taxa de vitoria em ranqueadas nos últimos 7 dias</span>
                <div className="championsWinRateContainer">
                  <table>
                    <thead>
                      <tr>
                        <th>Campeão</th>
                        <th>Taxa de vitória</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="https://fakeimg.pl/32x32?font=bebas"
                            alt="elo"
                            id="championWinRateIcon"
                          />
                          <span id="championWinRateName">Amumu</span>
                        </td>
                        <td>
                          <div className="championWinRateBarContainer">
                            <div className="winRateBar">
                              <span>18V</span>
                            </div>
                            <div className="loserRateBar">
                              <span>20L</span>
                            </div>
                          </div>
                          <span className="winRateChampion" id="winRateChampion">58%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://fakeimg.pl/32x32?font=bebas"
                            alt="elo"
                            id="championWinRateIcon"
                          />
                          <span id="championWinRateName">Amumu</span>
                        </td>
                        <td>
                          <div className="championWinRateBarContainer">
                            <div className="winRateBar">
                              <span>18V</span>
                            </div>
                            <div className="loserRateBar">
                              <span>20L</span>
                            </div>
                          </div>
                          <span className="winRateChampion" id="winRateChampion">58%</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </aside>
            <section className="playerHistoryContainer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem ducimus distinctio voluptatibus iste animi accusantium atque autem expedita laborum culpa quae officia, iure reprehenderit magnam quam! Voluptate, odio quae.
            </section>
          </div>
        </div>

      </main>
    </div>
  );
}
export default ProfileViewer;
