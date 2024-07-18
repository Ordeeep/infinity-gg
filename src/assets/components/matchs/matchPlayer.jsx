import './matchPlayer.css'
import react, { Component } from 'react';

class matchPlayer extends Component {

   render() {

      const { matchData, userPUUID, BASE_URL, getUserMatchData } = this.props;
      console.log(getUserMatchData)

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

      matchData.info.participants.map((item) => {
         if (item.puuid === userPUUID) {
            let playerSearchData = {
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
            console.log(playerSearchData)
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
      return (

         <>
            <div className={`playerHistoryMatchQuad + ${matchData.info.win}`}>
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
               <p>{playerSearchData ? 'Oláa': 'nãooo'}</p>
               <div className='matchChampionBuildContainer'>
                  <div>
                     <div className='championTalents'>
                        <img
                           id='championIcon'
                          /*  src={playerSearchData ? `${BASE_URL}/championIcon/${playerSearchData.championName}` : 'hi'} */
                           alt="icone do champion" />
                        <div>
                           <img
                              src="https://fakeimg.pl/30x30?font=bebas"
                              alt="" />
                           <img
                              src="https://fakeimg.pl/30x30?font=bebas"
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
                           <span id='matchKDA' className='matchKDA'>9/14/6</span>
                           <span id='matchKDATotal' className='matchKDATotal'>KDA: 1.21</span>
                        </div>

                        <div>
                           <hr />
                        </div>
                     </div>
                  </div>
                  <div id='matchPlayerBuild' className='matchPlayerBuild'>
                     <img
                        src="https://fakeimg.pl/30x30?font=bebas"
                        alt="" />
                     <img
                        src="https://fakeimg.pl/30x30?font=bebas"
                        alt="" />
                     <img
                        src="https://fakeimg.pl/30x30?font=bebas"
                        alt="" />
                     <img
                        src="https://fakeimg.pl/30x30?font=bebas"
                        alt="" />
                     <img
                        src="https://fakeimg.pl/30x30?font=bebas"
                        alt="" />
                     <img
                        src="https://fakeimg.pl/30x30?font=bebas"
                        alt="" />
                     <img
                        src="https://fakeimg.pl/30x30?font=bebas"
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
                                    <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                                    <a href="#">{playerInMatchData.blueSide[0].riotIdGameName}</a>
                                 </li>
                                 <li>
                                    <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                                    <a href="#">{playerInMatchData.blueSide[1].riotIdGameName}</a>
                                 </li>
                                 <li>
                                    <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                                    <a href="#">{playerInMatchData.blueSide[2].riotIdGameName}</a>
                                 </li>
                                 <li>
                                    <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                                    <a href="#">{playerInMatchData.blueSide[3].riotIdGameName}</a>
                                 </li>
                                 <li>
                                    <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                                    <a href="#">{playerInMatchData.blueSide[4].riotIdGameName}</a>
                                 </li>
                              </ul>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <ul>
                                 <li>
                                    <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                                    <a href="#">{playerInMatchData.redSide[5].riotIdGameName}</a>
                                 </li>
                                 <li>
                                    <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                                    <a href="#">{playerInMatchData.redSide[6].riotIdGameName}</a>
                                 </li>
                                 <li>
                                    <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                                    <a href="#">{playerInMatchData.redSide[7].riotIdGameName}</a>
                                 </li>
                                 <li>
                                    <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                                    <a href="#">{playerInMatchData.redSide[8].riotIdGameName}</a>
                                 </li>
                                 <li>
                                    <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                                    <a href="#">{playerInMatchData.redSide[9].riotIdGameName}</a>
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