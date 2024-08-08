import './matchPlayer.css';
import TrMatchContainer from './trMatch/TrMatchContainer'
import { useTranslation } from 'react-i18next';

import React, { useState } from 'react';

const MatchPlayer = (props) => {
   const [match, openMatch] = useState(false);
   const { t } = useTranslation();

   const { matchData, BASE_URL, getUserMatchData } = props;
   let maiorDanoDaPartida = 0
   let totalGoldGanho = {
      blue_team: 0,
      red_team: 0
   }
   for (let key in matchData.info.participants) {
      if (matchData.info.participants[key].teamId == 100) {
         //Calculando o total de ouro de cada time, 100 sendo azul e 200 sendo o vermelho
         totalGoldGanho.blue_team = totalGoldGanho.blue_team + matchData.info.participants[key].goldEarned
      } else {
         totalGoldGanho.red_team = totalGoldGanho.red_team + matchData.info.participants[key].goldEarned
      }
      if (matchData.info.participants[key].totalDamageDealtToChampions > maiorDanoDaPartida) {
         maiorDanoDaPartida = matchData.info.participants[key].totalDamageDealtToChampions
      }
   }
   const onClickMatch = () => {
      openMatch(!match);
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

   let maiorNumeroDeKills
   if (matchData.info.teams[0].objectives.champion.kills >= matchData.info.teams[1].objectives.champion.kills) {
      maiorNumeroDeKills = matchData.info.teams[0].objectives.champion.kills
   } else {
      maiorNumeroDeKills = matchData.info.teams[1].objectives.champion.kills

   }
   const playerInMatchData = getUserMatchData.playerSearchData;
    
   const allPlayersMatchData = getUserMatchData.playerInMatchData;
   return (
      <div >
         <div className={`playerHistoryMatchQuad ${matchData ? matchData.info.win : 'win'} ${!match ? '' : 'playerHistoryMatchQuadOpen'}`} onClick={onClickMatch}>
            <div className='playerHistoryMatchContainer'>
               <div className='matchQueueDataContainer'>
                  <div>
                     <span className='matchQueueType'>{t(`rank_types.${matchData.info.queueId}`)} </span>
                     <span className='matchWinOrLoser'>{matchData.info.win ? t(`match_win_or_loser.${matchData.info.win}`) : t(`match_win_or_loser.${matchData.info.win}`)}</span>
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
                           src={BASE_URL + `runeSecondaryIcon/${playerInMatchData.playerRunes.id_1}`}
                           alt="" />
                     </div>

                     <div className='matchKDAContainer'>
                        <span id='matchKDA' className='matchKDA'>{playerInMatchData.playerKDA.kills}/{playerInMatchData.playerKDA.deaths}/{playerInMatchData.playerKDA.assists}</span>
                        <span id='matchKDATotal' className='matchKDATotal'>{`${((playerInMatchData.playerKDA.kills + playerInMatchData.playerKDA.assists) / playerInMatchData.playerKDA.deaths).toFixed(2)}`}</span>
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
                           <TrMatchContainer key={key} BASE_URL={BASE_URL} matchData={matchData} player={allPlayersMatchData.blueSide[key]} maiorDanoDaPartida={maiorDanoDaPartida} />
                        ))}

                     </tbody>
                  </table>
                  <div className='moreMatchDataContainer'>
                     <div className='teamObjKills'>
                        <div className="firstLine">
                           <div>
                              <img src="src/assets/img/baron-blue-icon.png" alt="baron_time_azul" />
                              <span>{matchData.info.teams[0].objectives.baron.kills}</span>
                           </div>
                           <div>
                              <img src="src/assets/img/drake-blue-icon.png" alt="dragões_time_azul" />
                              <span>{matchData.info.teams[0].objectives.dragon.kills}</span>
                           </div>
                           <div>
                              <img src="src/assets/img/arauto-blue-icon.png" alt="arautos_time_azul" />
                              <span>{matchData.info.teams[0].objectives.riftHerald.kills}</span>
                           </div>
                        </div>
                        <div className="secondaryLine">
                           <div>
                              <img src="src/assets/img/voidgrub-blue-icon.png" alt="vastilarvas_time_azul" />
                              <span>{matchData.info.teams[0].objectives.horde.kills}</span>
                           </div>
                           <div>
                              <img src="src/assets/img/tower-blue-icon.png" alt="torres_time_azul" />
                              <span>{matchData.info.teams[0].objectives.tower.kills}</span>
                           </div>
                           <div>
                              <img src="src/assets/img/inibidor-blue-icon.png" alt="inibidores_time_azul" />
                              <span>{matchData.info.teams[0].objectives.inhibitor.kills}</span>
                           </div>
                        </div>
                     </div>
                     <div className='barraDeObjetivosContainer'>
                        <div className="killsBar">
                           <div className='realBarColorRed' style={{
                              width: `${matchData.info.teams[0].objectives.champion.kills / (matchData.info.teams[0].objectives.champion.kills + matchData.info.teams[1].objectives.champion.kills) * 100}%`
                           }}>
                           </div>

                           <div className="blueTeam">{matchData.info.teams[0].objectives.champion.kills}</div>
                           <div className="heroText">Total de kills</div>
                           <div className="redTeam">{matchData.info.teams[1].objectives.champion.kills}</div>

                        </div>
                        <div className="goldBar">
                           <div className='realBarColorRed' style={{
                              width: `${totalGoldGanho.blue_team / (totalGoldGanho.blue_team + totalGoldGanho.red_team) * 100}%`
                           }}>
                           </div>

                           <div className="blueTeam">{totalGoldGanho.blue_team}</div>
                           <div className="heroText">Total de gold</div>
                           <div className="redTeam">{totalGoldGanho.red_team}</div>
                        </div>
                     </div>
                     <div className='teamObjKills'>
                        <div className="firstLine">
                           <div>
                              <img src="src/assets/img/baron-red-icon.png" alt="baron_time_vermelho" />
                              <span>{matchData.info.teams[1].objectives.baron.kills}</span>
                           </div>
                           <div>
                              <img src="src/assets/img/drake-red-icon.png" alt="dragões_time_vermelho" />
                              <span>{matchData.info.teams[1].objectives.dragon.kills}</span>
                           </div>
                           <div>
                              <img src="src/assets/img/arauto-red-icon.png" alt="arautos_time_vermelho" />
                              <span>{matchData.info.teams[1].objectives.riftHerald.kills}</span>
                           </div>
                        </div>
                        <div className="secondaryLine">
                           <div>
                              <img src="src/assets/img/voidgrub-red-icon.png" alt="vastilarvas_time_vermelho" />
                              <span>{matchData.info.teams[1].objectives.horde.kills}</span>
                           </div>
                           <div>
                              <img src="src/assets/img/tower-red-icon.png" alt="torres_time_vermelho" />
                              <span>{matchData.info.teams[1].objectives.tower.kills}</span>
                           </div>
                           <div>
                              <img src="src/assets/img/inibidor-red-icon.png" alt="inibidores_time_vermelho" />
                              <span>{matchData.info.teams[1].objectives.inhibitor.kills}</span>
                           </div>
                        </div>
                     </div>
                  </div>
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
                           <TrMatchContainer key={key} BASE_URL={BASE_URL} matchData={matchData} player={allPlayersMatchData.redSide[key]} maiorDanoDaPartida={maiorDanoDaPartida} />
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
