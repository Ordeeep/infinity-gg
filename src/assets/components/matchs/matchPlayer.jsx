import './matchPlayer.css'
import { Component } from 'react';

class matchPlayer extends Component {

   render() {
      let count = 0
      const { matchData } = this.props;

      console.log(matchData)

      let playerInMatchData = {

         bluseSide: {
            0: {
               summonerName: '',
               riotIdGameName: '',
               riotIdTagline: '',
               win: false,
               championId: 0
            },
            1: {
               summonerName: '',
               riotIdGameName: '',
               riotIdTagline: '',
               win: false,
               championId: 0
            },
            2: {
               summonerName: '',
               riotIdGameName: '',
               riotIdTagline: '',
               win: false,
               championId: 0
            },
            3: {
               summonerName: '',
               riotIdGameName: '',
               riotIdTagline: '',
               win: false,
               championId: 0
            },
            4: {
               summonerName: '',
               riotIdGameName: '',
               riotIdTagline: '',
               win: false,
               championId: 0
            }
         },
         redSide: {
            5: {
               summonerName: '',
               riotIdGameName: '',
               riotIdTagline: '',
               win: false,
               championId: 0
            },
            6: {
               summonerName: '',
               riotIdGameName: '',
               riotIdTagline: '',
               win: false,
               championId: 0
            },
            7: {
               summonerName: '',
               riotIdGameName: '',
               riotIdTagline: '',
               win: false,
               championId: 0
            },
            8: {
               summonerName: '',
               riotIdGameName: '',
               riotIdTagline: '',
               win: false,
               championId: 0
            },
            9: {
               summonerName: '',
               riotIdGameName: '',
               riotIdTagline: '',
               win: false,
               championId: 0
            }
         }
      }

      //console.log(playerInMatchData)
      matchData.info.participants.map((item) => {
         if (item.teamId == 100) {
            playerInMatchData.bluseSide[count] = {
               summonerName: item.summonerName,
               riotIdGameName: item.riotIdGameName,
               riotIdTagline: item.riotIdTagline,
               win: item.win,
               championId: item.championId
            }
         } else {
            playerInMatchData.redSide[count] = {
               summonerName: item.summonerName,
               riotIdGameName: item.riotIdGameName,
               riotIdTagline: item.riotIdTagline,
               win: item.win,
               championId: item.championId
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
               <div className='matchChampionBuildContainer'>
                  <div>
                     <div className='championTalents'>
                        <img
                           id='championIcon'
                           src="https://fakeimg.pl/60x60?font=bebas"
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
                                    <a href="#">{playerInMatchData.bluseSide[0].riotIdGameName}</a>
                                 </li>
                                 <li>
                                    <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                                    <a href="#">{playerInMatchData.bluseSide[1].riotIdGameName}</a>
                                 </li>
                                 <li>
                                    <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                                    <a href="#">{playerInMatchData.bluseSide[2].riotIdGameName}</a>
                                 </li>
                                 <li>
                                    <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                                    <a href="#">{playerInMatchData.bluseSide[3].riotIdGameName}</a>
                                 </li>
                                 <li>
                                    <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                                    <a href="#">{playerInMatchData.bluseSide[4].riotIdGameName}</a>
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