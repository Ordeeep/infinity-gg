import SearchPlayer from "../../components/searchPlayer";
import MatchPlayer from "../../components/matchs/matchPlayer";
import axios from 'axios';
import React from "react";
import { useState } from 'react'

import "./ProfileViewer.css";

function ProfileViewer() {
  const BASE_URL = 'http://localhost:3333/14.13.1/'
  const [userData, setUserData] = useState([])

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      let inputValue = event.target.value;
      inputValue = inputValue.split('#');
      if (inputValue === '') {
        console.log('Digite um valor válido');
        return;
      } else {
        requestApi(inputValue);
      }
    }
  };

  async function requestApi(inputValue) {
    try {
      //loadingDiv.style.display = 'flex';
      const response = await axios.get(`http://localhost:3333/user/${inputValue[0]}/${inputValue[1]}`);
      if (response.status === 200) {
        //loadingDiv.style.display = 'none';
        setUserData(response.data)
      } else {
        window.alert("Algo deu errado...");
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function requestApiToReload() {
    try {
      const response = await axios.get(`http://localhost:3333/user/${userData.gameName}/${userData.tagLine}`)
      if (response.status === 200) {
        //loadingDiv.style.display = 'none';
        setUserData(response.data)
        //  console.log(userData)
      } else {
        window.alert("Algo deu errado...");
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="profileContainer">
      <header className="profileHeader">
        <nav className="profileNav">
          <a href="#" className="profileLogo">
            INFINITY.GG
          </a>
          <div className="navContainer">
            <SearchPlayer teste={handleKeyDown} />
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
                  <img
                    src={`http://localhost:3333/14.13.1/playerIcon/${userData.profileIconId}`}
                    alt="" />
                  <div>
                    <span id="playerLevel">{userData ? userData.summonerLevel : 'NULL'}</span>
                  </div>
                </div>

                {/*Nome + Level do player junto ao botão de att*/}
                <div className="playerNameContainertwo">
                  <div>
                    <span id="playerName" className="playerName">
                      {userData.gameName ? `${userData.gameName}#${userData.tagLine}` : 'No data'}
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={requestApiToReload}
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
                      <img src={userData.ranked ? BASE_URL + "elo/" + userData.ranked.solo_duo.tier : `http://localhost:3333/14.13.1/playerIcon/undefined`} alt="elo" />
                      <div>
                        <span id="playerEloNameSoloDuo">{userData.ranked ? userData.ranked.solo_duo.tier : 'No data tier'}</span>
                        <span id="playerEloPdlSoloDuo">{userData.ranked ? userData.ranked.solo_duo.pdl + ' Pdl' : 'No data pdl'}</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <span>
                          <span id="playerTotalWinsSoloDuo">{userData.ranked ? userData.ranked.solo_duo.wins + 'V' : 'No data'} / {userData.ranked ? userData.ranked.solo_duo.losses + 'L' : 'No data'}</span>
                        </span>
                      </div>
                      <span className="playerEloWinrate">Winrate: {userData.ranked ? ((userData.ranked.solo_duo.wins / (userData.ranked.solo_duo.wins + userData.ranked.solo_duo.losses)) * 100).toFixed(0) : 'No data'}%</span>
                    </div>
                  </div>
                </div>

                <div className="eloContainer">
                  <span>Ranqueada Flex</span>

                  <div className="eloContainer2">

                    <div>
                      <img
                        src={userData.ranked ? BASE_URL + "elo/" + userData.ranked.flex.tier : `http://localhost:3333/14.13.1/playerIcon/undefined`}
                        alt="elo" />
                      <div>
                        <span id="playerEloNameFlex">{userData.ranked ? userData.ranked.flex.tier : 'No data tier'}</span>
                        <span id="playerEloPdlFlex">{userData.ranked ? userData.ranked.flex.pdl + ' Pdl' : 'No data pdl'}</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <span>
                          <span id="playerTotalWinsSoloDuo">{userData.ranked ? userData.ranked.flex.wins + 'V' : 'No data'} / {userData.ranked ? userData.ranked.flex.losses + 'L' : 'No data'}</span>
                        </span>
                      </div>
                      <span className="playerEloWinRate">Winrate: {userData.ranked ? ((userData.ranked.flex.wins / (userData.ranked.flex.wins + userData.ranked.flex.losses)) * 100).toFixed(0) : 'No data'}%</span>
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
              <div className="playerHistoryTopContainer">
                grafico aqui
              </div>
              <div className="playerHistoryMatchsContainer">
                <MatchPlayer matchData={userData} />

              </div>
            </section>
          </div>
        </div>
      </main>
      <div className='modalLoading' id="modalLoading">
        <img src="../../../../gradient-5812_256.gif" alt="" />
      </div>

    </div>
  );
}
export default ProfileViewer;
