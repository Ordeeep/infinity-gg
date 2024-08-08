import SearchPlayer from "../../components/searchPlayer";
import MatchPlayer from "../../components/matchs/matchPlayer";
import axios from 'axios';
import React from "react";
import { useState } from 'react'

import "./ProfileViewer.css";
import { useTranslation } from "react-i18next";
function ProfileViewer() {
  const BASE_URL = 'http://localhost:3333/'
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)
  const [skeletonCss, setskeletonCss] = useState(false)
  const [select, setSelect] = useState(false)

  const { t, i18n: {
    changeLanguage, language
  } } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(language)

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

  function abrirSelectIdiomas() {
    setSelect(prevSelect => !prevSelect);
  }

  function trocarIdioma(event) {
    const idiomaSelecionado = event.currentTarget.getAttribute('data-value');

    changeLanguage(idiomaSelecionado)
    setCurrentLanguage(idiomaSelecionado)
    setSelect(prevSelect => !prevSelect);
  }

  async function requestApi(inputValue) {
    try {
      setLoading(true)
      const regionValue = document.getElementById('region').value
      const response = await axios.get(`${BASE_URL}user/${inputValue[0]}/${inputValue[1]}/${regionValue}`);
      if (response.status === 200) {
        console.log(response.data.champion_mastery[0][0])
        setLoading(false);
        setUserData(response.data)
        setskeletonCss(true)

      }
    } catch (error) {
      setModal(true)
      setLoading(false);
      setskeletonCss(true)
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
      }
    } catch (error) {
      setLoading(false);
      console.log('abrir modal')
      setModal(true)

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
            id_0: item.perks.styles[0].selections[0].perk,
            id_1: item.perks.styles[1].style
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
          <div>
            <div className="selecionarIdiomaContainer">
              <div className="opcaoSelecionada" onClick={abrirSelectIdiomas}>
                <span>{t(`languages.${currentLanguage}`)}</span>
                <img src="src/assets/img/traducao.png" alt="" />
              </div>
              {select && (
                <div className="outrasOpcao">
                  <div onClick={trocarIdioma} data-value='en'>
                    <span>{t('languages.en')}</span>
                  </div>
                  <div onClick={trocarIdioma} data-value='pt'>
                    <span>{t('languages.pt')}</span>
                  </div>
                </div>
              )}
            </div>
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
                  <div className='playerLevelContainer2'>
                    <span className={skeletonCss ? 'playerLevelSpan' : 'skeleton skeleton-text-level'} >{userData ? userData.summonerLevel : 'NULL'}</span>
                  </div>
                </div>

                {/*Nome + Level do player junto ao botão de att*/}
                <div className="playerNameContainertwo">
                  <div className={skeletonCss ? '' : 'skeleton'}>
                    <span className="playerName">
                      {userData.gameName ? `${userData.gameName}#${userData.tagLine}` : ''}
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={requestApiToReload}
                      className="profilePlayerButton"
                      id="profilePlayerButtonAtt"
                    >
                      {t(`buttons.refresh`)}
                    </button>
                    <button
                      className="profilePlayerButton"
                      id="profilePlayerButtonPlus"
                    >
                      {t(`buttons.view_more`)}
                    </button>
                    <div className={skeletonCss ? '' : 'skeleton'}>
                      <span>
                        {/*{userData ? '' : ''} */}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/*Parte do elo*/}
              <div className="playerEloContainer">
                <div className="eloContainer" >
                  <span>{t(`rank_types.5v5 Ranked Solo games`)}</span>

                  <div className={`eloContainer2 ${skeletonCss ? '' : 'skeleton'}`}>
                    <div>
                      <img src={userData.ranked ? BASE_URL + "elo/" + userData.ranked.solo_duo.tier : `${BASE_URL}elo/undefined`} alt="elo" />
                      <div >
                        <span id="playerEloNameSoloDuo" >{userData.ranked ? t(`elo_names.${userData.ranked.solo_duo.tier}`) : ''}</span>
                        <span id="playerEloPdlSoloDuo" >{userData.ranked ? userData.ranked.solo_duo.pdl + ' Pdl' : ''}</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <span>
                          <span id="playerTotalWinsSoloDuo">{userData.ranked ? userData.ranked.solo_duo.wins + 'V' : ''} {userData.ranked ? userData.ranked.solo_duo.losses + 'L' : ''}</span>
                        </span>
                      </div>
                      <span className="playerEloWinRate">
                        {
                          userData.ranked ?
                            (() => {
                              const winRate = (userData.ranked.solo_duo.wins / (userData.ranked.solo_duo.wins + userData.ranked.solo_duo.losses)) * 100;
                              return isNaN(winRate) ? '0%' : winRate.toFixed(0) + '%';
                            })()
                            : ''
                        }
                      </span>
                    </div>
                  </div>
                </div>

                <div className="eloContainer" >
                  <span>{t(`rank_types.RANKED FLEX GAME`)}</span>


                  <div className={`eloContainer2 ${skeletonCss ? '' : 'skeleton'}`}>

                    <div>
                      <img
                        src={userData.ranked ? BASE_URL + "elo/" + userData.ranked.flex.tier : `${BASE_URL}elo/undefined`}
                        alt="elo" />
                      <div>
                        <span id="playerEloNameFlex">{userData.ranked ? t(`elo_names.${userData.ranked.flex.tier}`) : ''}</span>
                        <span id="playerEloPdlFlex">{userData.ranked ? userData.ranked.flex.pdl + ' Pdl' : ''}</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <span>
                          <span id="playerTotalWinsSoloDuo">{userData.ranked ? userData.ranked.flex.wins + 'V' : ''}  {userData.ranked ? userData.ranked.flex.losses + 'L' : ''}</span>
                        </span>
                      </div>
                      <span className="playerEloWinRate">
                        {
                          userData.ranked ?
                            (() => {
                              const winRate = (userData.ranked.flex.wins / (userData.ranked.flex.wins + userData.ranked.flex.losses)) * 100;
                              return isNaN(winRate) ? '0%' : winRate.toFixed(0) + '%';
                            })()
                            : ''
                        }
                      </span>
                    </div>

                  </div>
                </div>

              </div>

              <div className="playerWinRateChampion">
                <span className="textPlaceHolderHero">Top 5 maestrias</span>
                <div className="championsWinRateContainer">
                  <table>
                    <thead>
                      <tr>
                        <th>Campeão</th>
                        <th>Nivel</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userData.champion_mastery ? (
                        userData.champion_mastery[0].map((item, index) => (
                          index <= 4 ? (
                            <tr>
                              <td>
                                <img
                                  src={`${BASE_URL}championIcon/${userData.champion_mastery[0][index].championName}`}
                                  alt="elo"
                                  id="championWinRateIcon"
                                />
                                <span>{userData.champion_mastery[0][index].championName}</span>

                              </td>

                              <td className="championWinRateNameContainer">
                                <span id="championWinRateName">{userData.champion_mastery[0][index].championLevel}</span>

                              </td>
                            </tr>

                          ) : null

                        ))
                      ) : (

                        <>
                          <tr className="noDataMaestry ">
                            <td className="skeleton"></td>
                          </tr>
                          <tr className="noDataMaestry ">
                            <td className="skeleton"></td>
                          </tr>
                          <tr className="noDataMaestry ">
                            <td className="skeleton"></td>
                          </tr>
                          <tr className="noDataMaestry ">
                            <td className="skeleton"></td>
                          </tr>
                          <tr className="noDataMaestry ">
                            <td className="skeleton"></td>
                          </tr>
                        </>

                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </aside>
            <section className="playerHistoryContainer">
              <div className={`playerHistoryTopContainer ${skeletonCss ? '' : 'skeleton'}`} >
                {userData.history ? (
                  <div>
                    grafico aqui
                  </div>
                ) : ' '}
              </div>
              <div className="playerHistoryMatchsContainer">
                {userData.history ? (
                  userData.history.matchs.map((item, index) => (
                    <MatchPlayer key={index} matchData={item} BASE_URL={BASE_URL} getUserMatchData={getUserMatchData(item)} />
                  ))
                ) : (
                  <>
                    <div className="skeleton skeleton-container">
                    </div>
                    <div className="skeleton skeleton-container">
                    </div>
                    <div className="skeleton skeleton-container">
                    </div>
                    <div className="skeleton skeleton-container">
                    </div>
                  </>
                )}
              </div>{/* ${skeletonCss ? '' : 'skeleton'} */}
              <div className="searchMoreMatchsContainer">
                <button className={`searchMoreMatchsButton ${skeletonCss ? '' : 'skeleton'}`}> {skeletonCss ? t(`buttons.search_more_matchs`) : ' '}</button>
              </div>
            </section>
          </div>
        </div>
      </main>
      {
        loading && (
          <div className='modalLoading' id="modalLoading">
            <img src="../../../../gradient-5812_256.gif" alt="" />
          </div>
        )
      }
      {
        modal && (
          <div className="modalErrorContainer">
            <div>
              <span>Jogador não encontrado!</span>
            </div>
            <hr />
            <div className="containerPLayerHolder-apenas-parasla">
              <span>Pedimos que verifique se o usuário está correto</span>
            </div>

            <div className="loadingAnimation"></div>
          </div>
        )
      }
    </div >
  );

}
export default ProfileViewer;
