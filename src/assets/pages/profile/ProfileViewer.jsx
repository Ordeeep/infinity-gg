import SearchPlayer from "../../components/searchPlayer";
import MatchPlayer from "../../components/matchs/matchPlayer";
import axios from 'axios';
import React from "react";
import { useState } from 'react'

import "./ProfileViewer.css";

function ProfileViewer() {
  const BASE_URL = 'http://localhost:3333/'
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)

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
      setLoading(true)
      const regionValue = document.getElementById('region').value
      const response = await axios.get(`${BASE_URL}user/${inputValue[0]}/${inputValue[1]}/${regionValue}`);
      if (response.status === 200) {
        setLoading(false);
        setUserData(response.data)
      } else {
        window.alert("Algo deu errado...");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  async function requestApiToReload() {
    try {
      setLoading(true)
      const regionValue = document.getElementById('region').value
      const response = await axios.get(`${BASE_URL}user/${userData.gameName}/${userData.tagLine}/${regionValue}`)
      if (response.status === 200) {
        setLoading(false);
        setUserData(response.data)
      } else {
        setLoading(false);
        window.alert("Algo deu errado...");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  function getUserMatchData(match) {

    let playerSearchData = null

    let playerInMatchData = {
      blueSide: {
        0: {
          summonerName: '',
          riotIdGameName: '',
          riotIdTagline: '',
          win: false,
          championName: 0
        },
        1: {
          summonerName: '',
          riotIdGameName: '',
          riotIdTagline: '',
          win: false,
          championName: 0
        },
        2: {
          summonerName: '',
          riotIdGameName: '',
          riotIdTagline: '',
          win: false,
          championName: 0
        },
        3: {
          summonerName: '',
          riotIdGameName: '',
          riotIdTagline: '',
          win: false,
          championName: 0
        },
        4: {
          summonerName: '',
          riotIdGameName: '',
          riotIdTagline: '',
          win: false,
          championName: 0
        }
      },
      redSide: {
        5: {
          summonerName: '',
          riotIdGameName: '',
          riotIdTagline: '',
          win: false,
          championName: 0
        },
        6: {
          summonerName: '',
          riotIdGameName: '',
          riotIdTagline: '',
          win: false,
          championName: 0
        },
        7: {
          summonerName: '',
          riotIdGameName: '',
          riotIdTagline: '',
          win: false,
          championName: 0
        },
        8: {
          summonerName: '',
          riotIdGameName: '',
          riotIdTagline: '',
          win: false,
          championName: 0
        },
        9: {
          summonerName: '',
          riotIdGameName: '',
          riotIdTagline: '',
          win: false,
          championName: 0
        }
      }
    }
    let count = 0

    match.info.participants.map((item) => {
      if (item.puuid === userData.puuid) {
        playerSearchData = {
          championName: item.championName,
          role: item.role,
          playerKDA: {
            kills: item.kills,
            deaths: item.deaths,
            assists: item.assists,
          },
          playerTalents: {
            id_0: item.summoner1Id,
            id_1: item.summoner2Id
          },
          playerRunes: {
            id_0: 0,
            id_1: 0
          },
          playerBuild: {
            item_0: item.item0,
            item_1: item.item1,
            item_2: item.item2,
            item_3: item.item3,
            item_4: item.item4,
            item_5: item.item5,
            item_6: item.item6
          },
        }
      }
      if (item.teamId == 100) {
        playerInMatchData.blueSide[count] = {
          summonerName: item.summonerName,
          riotIdGameName: item.riotIdGameName,
          riotIdTagline: item.riotIdTagline,
          win: item.win,
          championName: item.championName
        }
      } else {
        playerInMatchData.redSide[count] = {
          summonerName: item.summonerName,
          riotIdGameName: item.riotIdGameName,
          riotIdTagline: item.riotIdTagline,
          win: item.win,
          championName: item.championName
        }
      }
      count = count + 1
    })

    return { playerSearchData, playerInMatchData }
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
                    src={`${BASE_URL}playerIcon/${userData.profileIconId}`}
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
                      <img src={userData.ranked ? BASE_URL + "elo/" + userData.ranked.solo_duo.tier : `${BASE_URL}elo/undefined`} alt="elo" />
                      <div>
                        <span id="playerEloNameSoloDuo">{userData.ranked ? userData.ranked.solo_duo.tier : 'No data tier'}</span>
                        <span id="playerEloPdlSoloDuo">{userData.ranked ? userData.ranked.solo_duo.pdl + ' Pdl' : 'No data pdl'}</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <span>
                          <span id="playerTotalWinsSoloDuo">{userData.ranked ? userData.ranked.solo_duo.wins + 'V' : '0V'} / {userData.ranked ? userData.ranked.solo_duo.losses + 'L' : '0L'}</span>
                        </span>
                      </div>
                      <span className="playerEloWinRate">
                        Winrate: {
                          userData.ranked ?
                            (() => {
                              const winRate = (userData.ranked.solo_duo.wins / (userData.ranked.solo_duo.wins + userData.ranked.solo_duo.losses)) * 100;
                              return isNaN(winRate) ? 'No data' : winRate.toFixed(0);
                            })()
                            : '0'
                        }%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="eloContainer">
                  <span>Ranqueada Flex</span>

                  <div className="eloContainer2">

                    <div>
                      <img
                        src={userData.ranked ? BASE_URL + "elo/" + userData.ranked.flex.tier : `${BASE_URL}elo/undefined`}
                        alt="elo" />
                      <div>
                        <span id="playerEloNameFlex">{userData.ranked ? userData.ranked.flex.tier : 'No data tier'}</span>
                        <span id="playerEloPdlFlex">{userData.ranked ? userData.ranked.flex.pdl + ' Pdl' : 'No data pdl'}</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <span>
                          <span id="playerTotalWinsSoloDuo">{userData.ranked ? userData.ranked.flex.wins + 'V' : '0V'} / {userData.ranked ? userData.ranked.flex.losses + 'L' : '0L'}</span>
                        </span>
                      </div>
                      <span className="playerEloWinRate">
                        Winrate: {
                          userData.ranked ?
                            (() => {
                              const winRate = (userData.ranked.flex.wins / (userData.ranked.flex.wins + userData.ranked.flex.losses)) * 100;
                              return isNaN(winRate) ? 'No data' : winRate.toFixed(0);
                            })()
                            : '0'
                        }%
                      </span>
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
                {userData.history ? (
                  userData.history.matchs.map((item, index) => (
                    <MatchPlayer key={index} matchData={item} userPUUID={userData.puuid} BASE_URL={BASE_URL} getUserMatchData={getUserMatchData(item)} />
                  ))
                ) : (
                  'Eu não estou aqui'
                )}
              </div>

            </section>
          </div>
        </div>
      </main>
      {loading && (
        <div className='modalLoading' id="modalLoading">
          <img src="../../../../gradient-5812_256.gif" alt="" />
        </div>
      )}

    </div>
  );

}
export default ProfileViewer;
