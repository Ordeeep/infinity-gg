import './matchPlayer.css'
function matchPlayer() {
   return (
      <>
         <div className="playerHistoryMatchQuad">
            <div className='playerHistoryMatchContainer'>
               <div className='matchQueueDataContainer'>
                  <div>
                     <span id='matchQueueType' className='matchQueueType'>Ranqueada Solo</span>
                     <span id='matchWinOrLoser' className='matchWinOrLoser'>Vitoria</span>
                     <span id='matchDataOld' className='matchDataOld'>21 horas atras</span>
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
                  <tr>
                     <td>
                        <ul>
                           <li>
                              <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                              <a href="#">Player 1</a>
                           </li>
                           <li>
                              <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                              <a href="#">Player 1</a>
                           </li>
                           <li>
                              <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                              <a href="#">Player 1</a>
                           </li>
                           <li>
                              <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                              <a href="#">Player 1</a>
                           </li>
                           <li>
                              <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                              <a href="#">Player 1</a>
                           </li>
                        </ul>
                     </td>
                  </tr>
                  <tr>
                     <td>Vs</td>
                  </tr>
                  <tr>
                     <td>
                     <ul>
                           <li>
                              <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                              <a href="#">Player 1</a>
                           </li>
                           <li>
                              <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                              <a href="#">Player 1</a>
                           </li>
                           <li>
                              <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                              <a href="#">Player 1</a>
                           </li>
                           <li>
                              <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                              <a href="#">Player 1</a>
                           </li>
                           <li>
                              <img src="https://fakeimg.pl/15x15?font=bebas" alt="" />
                              <a href="#">Player 1</a>
                           </li>
                        </ul>
                     </td>
                  </tr>
               </table>
            </div>
         </div>

      </>
   )
}

export default matchPlayer