import './matchPlayer.css'
import react, { Component } from 'react';

class matchPlayer extends Component {

   render() {

      const { matchData, userPUUID, BASE_URL, getUserMatchData } = this.props;
      console.log(matchData)
      const playerInMatchData = getUserMatchData.playerSearchData
      const allPlayersMatchData = getUserMatchData.playerInMatchData
      return (

         <>
            <div className={`playerHistoryMatchQuad + ${matchData ? matchData.info.win : 'win'}`}>
               <div className='playerHistoryMatchContainer'>
                  <div className='matchQueueDataContainer'>
                     <div>
                        <span className='matchQueueType'>{matchData.info.queueId}</span>
                        <span className='matchWinOrLoser'>{matchData.info.win ? 'Vitória' : 'Derrota'}</span>
                        <span className='matchDataOld'>21 horas atras</span>
                     </div>
                     <div>
                        <span className='matchTotalMinutes' id='matchTotalMinutes'>Duração 32:21M</span>
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
                              src={BASE_URL+`talentIcon/${playerInMatchData.playerTalents.id_0}`}
                              alt="" />
                           <img
                              src={BASE_URL+`talentIcon/${playerInMatchData.playerTalents.id_1}`}
                              alt="" />
                        </div>
                        <div>
                           <img
                              src="https://fakeimg.pl/30x30?font=bebas"
                              alt="" />
                           <img
                              src="https://fakeimg.pl/30x30?font=bebas"
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

         </>
      )
   }
}

export default matchPlayer