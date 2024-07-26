import './matchPlayer.css';
import TrMatchContainer from './trMatch/TrMatchContainer'
import React, { useState } from 'react';

const MatchPlayer = (props) => {
   const [match, openMatch] = useState(false);
   const { matchData, BASE_URL, getUserMatchData } = props;
   /* console.log(matchData.info.participants[0])
   console.log(matchData.info.participants[0].perks) */

   const onClickMatch = () => {
      openMatch(!match);
      console.log(matchData)
      //console.log(!match)
      if (!match === true) {
      } else console.log('fecheiiii')
   }

   let gameEndTimestamp = matchData.info.gameEndTimestamp; // Tempo que a partida acabou
   let dateMatchEnd = new Date(gameEndTimestamp);
   let dateGameDuration = new Date(matchData.info.gameDuration * 1000)

   let gameAllHours = {
      duracao_partida: {
         minutos: dateGameDuration.getMinutes(),
         segundos: dateGameDuration.getSeconds()
      },
      horas_partida_final: {
         horas: dateMatchEnd.getHours(),
         minutos: dateMatchEnd.getMinutes(),
         segundos: dateMatchEnd.getSeconds(),
      }
   }
   const playerInMatchData = getUserMatchData.playerSearchData;
   const allPlayersMatchData = getUserMatchData.playerInMatchData;
   return (
      <div >
         <div className={`playerHistoryMatchQuad ${matchData ? matchData.info.win : 'win'} ${!match ? '' : 'playerHistoryMatchQuadOpen'}`} onClick={onClickMatch}>
            <div className='playerHistoryMatchContainer'>
               <div className='matchQueueDataContainer'>
                  <div>
                     <span className='matchQueueType'>{matchData.info.queueId}</span>
                     <span className='matchWinOrLoser'>{matchData.info.win ? 'Vitória' : 'Derrota'}</span>
                  </div>
                  <div>
                     <span className='matchTotalMinutes' id='matchTotalMinutes'>{` ${gameAllHours.duracao_partida.minutos}m:${gameAllHours.duracao_partida.segundos}s`}</span>
                     <span className='matchElo' id='matchElo'>Esmeralda 2</span>
                  </div>
               </div>
            </div>
            <div className='matchChampionBuildContainer'>
               <div>
                  <div className='championTalents'>
                     <img
                        id='championIcon'
                        src={`${BASE_URL}championIcon/${playerInMatchData.championName}`}
                        alt="icone do champion" />
                     <div>
                        <img
                           src={BASE_URL + `talentIcon/${playerInMatchData.playerTalents.id_0}`}
                           alt="" />
                        <img
                           src={BASE_URL + `talentIcon/${playerInMatchData.playerTalents.id_1}`}
                           alt="" />
                     </div>
                     <div>
                        <img
                           src={BASE_URL + `runeIcon/${playerInMatchData.playerRunes.id_0}`}
                           alt="" />
                        <img
                           src={BASE_URL + `runeIcon/${playerInMatchData.playerRunes.id_1}`}
                           alt="" />
                     </div>

                     <div className='matchKDAContainer'>
                        <span id='matchKDA' className='matchKDA'>{playerInMatchData.playerKDA.kills}/{playerInMatchData.playerKDA.deaths}/{playerInMatchData.playerKDA.assists}</span>
                        <span id='matchKDATotal' className='matchKDATotal'>KDA: 1.21</span>
                     </div>

                     <div>
                        <hr />
                     </div>
                  </div>
               </div>
               <div id='matchPlayerBuild' className='matchPlayerBuild'>
                  <img
                     src={BASE_URL + `itemIcon/${playerInMatchData.playerBuild.item_0}`}
                     alt="" />
                  <img
                     src={BASE_URL + `itemIcon/${playerInMatchData.playerBuild.item_1}`}
                     alt="" />
                  <img
                     src={BASE_URL + `itemIcon/${playerInMatchData.playerBuild.item_2}`}
                     alt="" />
                  <img
                     src={BASE_URL + `itemIcon/${playerInMatchData.playerBuild.item_3}`}
                     alt="" />
                  <img
                     src={BASE_URL + `itemIcon/${playerInMatchData.playerBuild.item_4}`}
                     alt="" />
                  <img
                     src={BASE_URL + `itemIcon/${playerInMatchData.playerBuild.item_5}`}
                     alt="" />
                  <img
                     src={BASE_URL + `itemIcon/${playerInMatchData.playerBuild.item_6}`}
                     alt="" />
                  <div>
                     <span id='playerPositionMatch' className='playerPositionMatch'>6 TH</span>
                  </div>
               </div>
            </div>

            <div className='matchPlayersNamesContainer'>
               <table>
                  <tbody>
                     <tr>
                        <td>
                           <ul>
                              <li>
                                 <img src={BASE_URL + `championIcon/${allPlayersMatchData.blueSide[0].championName}`} alt="" />
                                 <a href="#">{allPlayersMatchData.blueSide[0].riotIdGameName}</a>
                              </li>
                              <li>
                                 <img src={BASE_URL + `championIcon/${allPlayersMatchData.blueSide[1].championName}`} alt="" />
                                 <a href="#">{allPlayersMatchData.blueSide[1].riotIdGameName}</a>
                              </li>
                              <li>
                                 <img src={BASE_URL + `championIcon/${allPlayersMatchData.blueSide[2].championName}`} alt="" />
                                 <a href="#">{allPlayersMatchData.blueSide[2].riotIdGameName}</a>
                              </li>
                              <li>
                                 <img src={BASE_URL + `championIcon/${allPlayersMatchData.blueSide[3].championName}`} alt="" />
                                 <a href="#">{allPlayersMatchData.blueSide[3].riotIdGameName}</a>
                              </li>
                              <li>
                                 <img src={BASE_URL + `championIcon/${allPlayersMatchData.blueSide[4].championName}`} alt="" />
                                 <a href="#">{allPlayersMatchData.blueSide[4].riotIdGameName}</a>
                              </li>
                           </ul>
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <ul>
                              <li>
                                 <img src={BASE_URL + `championIcon/${allPlayersMatchData.redSide[5].championName}`} alt="" />
                                 <a href="#">{allPlayersMatchData.redSide[5].riotIdGameName}</a>
                              </li>
                              <li>
                                 <img src={BASE_URL + `championIcon/${allPlayersMatchData.redSide[6].championName}`} alt="" />
                                 <a href="#">{allPlayersMatchData.redSide[6].riotIdGameName}</a>
                              </li>
                              <li>
                                 <img src={BASE_URL + `championIcon/${allPlayersMatchData.redSide[7].championName}`} alt="" />
                                 <a href="#">{allPlayersMatchData.redSide[7].riotIdGameName}</a>
                              </li>
                              <li>
                                 <img src={BASE_URL + `championIcon/${allPlayersMatchData.redSide[8].championName}`} alt="" />
                                 <a href="#">{allPlayersMatchData.redSide[8].riotIdGameName}</a>
                              </li>
                              <li>
                                 <img src={BASE_URL + `championIcon/${allPlayersMatchData.redSide[9].championName}`} alt="" />
                                 <a href="#">{allPlayersMatchData.redSide[9].riotIdGameName}</a>
                              </li>
                           </ul>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         {match && (
            <div className='showMoreDataContainer'>
               <div className="blueTeamSide">
                  <table className='tabelaDePontuacao'>
                     <thead className='cabecalho'>
                        <tr>
                           <th className='thTeamContainer'>Equipe azul</th>
                           <th className='thCompact'>Pontuação</th>
                           <th className='thCompact'>KDA</th>
                           <th className='thCompact'>Dano</th>
                           <th className='thCompact'>Farm</th>
                           <th className='thTeamBuild'>Build</th>
                        </tr>
                     </thead>
                     <tbody className='true'>
                        {Object.keys(allPlayersMatchData.blueSide).map((key) => (
                           <TrMatchContainer key={key} BASE_URL={BASE_URL} matchData={matchData} player={allPlayersMatchData.blueSide[key]} />
                        ))}

                     </tbody>
                  </table>
                  <table className='tabelaDePontuacao'>
                     <thead>
                        <tr>
                           <th className='thTeamContainer'>Equipe Vermelha</th>
                           <th className='thCompact'>Pontuação</th>
                           <th className='thCompact'>KDA</th>
                           <th className='thCompact'>Dano</th>
                           <th className='thCompact'>Farm</th>
                           <th className='thTeamBuild'>Build</th>
                        </tr>
                     </thead>
                     <tbody className='false'>
                        {Object.keys(allPlayersMatchData.redSide).map((key) => (
                           <TrMatchContainer key={key} BASE_URL={BASE_URL} matchData={matchData} player={allPlayersMatchData.redSide[key]} />
                        ))}

                     </tbody>
                  </table>
               </div>
            </div>
         )}
      </div>
   );
}

export default MatchPlayer;
