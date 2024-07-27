import './TrMatchContainer.css';

const TrMatchContainer = (props) => {
   const { BASE_URL, matchData, player, maiorDanoDaPartida } = props
   let playerAllData = player

   for (let key in matchData.info.participants) {
      if (player.riotIdGameName == matchData.info.participants[key].riotIdGameName) {
         playerAllData = {
            ...playerAllData,
            role: matchData.info.participants[key].role,
            farm: matchData.info.participants[key].totalMinionsKilled,
            damage: matchData.info.participants[key].totalDamageDealtToChampions,
            build: {
               item_0: matchData.info.participants[key].item0,
               item_1: matchData.info.participants[key].item1,
               item_2: matchData.info.participants[key].item2,
               item_3: matchData.info.participants[key].item3,
               item_4: matchData.info.participants[key].item4,
               item_5: matchData.info.participants[key].item5,
               item_6: matchData.info.participants[key].item6,
            },
            kda: {
               kills: matchData.info.participants[key].kills,
               deaths: matchData.info.participants[key].deaths,
               assists: matchData.info.participants[key].assists,
            },
            talents: {
               talent_0: matchData.info.participants[key].summoner1Id,
               talent_1: matchData.info.participants[key].summoner2Id
            },
            runes: {
               runes_0: matchData.info.participants[key].perks.styles[0].selections[0].perk,
               runes_1: matchData.info.participants[key].perks.styles[1].style
            }

         }
      }
   }
   console.log((playerAllData.damage / (playerAllData.damage + maiorDanoDaPartida) * 100).toFixed(2))
   return (

      <>
         <tr className='tablePlayerContainer'>
            <td>
               <div className='firstContainer'>
                  <img className='playerChampionIcon' src={`${BASE_URL}championIcon/${playerAllData.championName}`} alt="" />
                  <div className='iconTalentsContainer'>
                     <img src={BASE_URL + `talentIcon/${playerAllData.talents.talent_0}`} alt="" />
                     <img src={BASE_URL + `talentIcon/${playerAllData.talents.talent_1}`} alt="" />
                  </div>
                  <div className='iconTalentsContainer'>
                     <img src={BASE_URL + `runeIcon/${playerAllData.runes.runes_0}`} alt="" />
                     <img src={BASE_URL + `runeSecondaryIcon/${playerAllData.runes.runes_1}`} alt="" />
                  </div>
                  <div className='playerEloContainer'>
                     <span>E4</span>
                  </div>
                  <span className='playerNickName'>{player.riotIdGameName + '#' + player.riotIdTagline}</span>
               </div>
            </td>
            <td className='textCenter'>
               <div>
                  <span className='playerMatchScore'>5.5</span>
               </div>
            </td>
            <td className='textCenter'>
               <div>
                  <span className='playerKDA'>{playerAllData.kda.kills}/{playerAllData.kda.deaths}/{playerAllData.kda.assists}</span>
               </div>
            </td>
            <td className='textCenter'>
               <div>
                  <span>{playerAllData.damage}</span>
                  <div className='damageBarContainer'>
                     <div className="damageBarTotal" style={{
                        width: `${(playerAllData.damage / (playerAllData.damage + maiorDanoDaPartida) * 100).toFixed(2)}%`
                     }}></div>
                  </div>
               </div>
            </td>
            <td className='textCenter'>
               <div>
                  <span>{playerAllData.farm}</span>
               </div>
            </td>
            <td className='tableMatchPlayerBuild'>
               <div className='matchPlayerBuild'>
                  <img
                     src={BASE_URL + `itemIcon/${playerAllData.build.item_0}`}
                     alt="" />
                  <img
                     src={BASE_URL + `itemIcon/${playerAllData.build.item_1}`}
                     alt="" />
                  <img
                     src={BASE_URL + `itemIcon/${playerAllData.build.item_2}`}
                     alt="" />
                  <img
                     src={BASE_URL + `itemIcon/${playerAllData.build.item_3}`}
                     alt="" />
                  <img
                     src={BASE_URL + `itemIcon/${playerAllData.build.item_4}`}
                     alt="" />
                  <img
                     src={BASE_URL + `itemIcon/${playerAllData.build.item_5}`}
                     alt="" />
                  <img
                     src={BASE_URL + `itemIcon/${playerAllData.build.item_6}`}
                     alt="" />
               </div>
            </td>
         </tr>
      </>
   )

}

export default TrMatchContainer