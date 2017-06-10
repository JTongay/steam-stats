export default class HomeComponent {

  constructor(steamSearchService, $localStorage, user){
    '$inject'
    this._steamSearchService = steamSearchService
    this.setUserID = null
    console.log($localStorage);
    // this.steamUser = steamUser
    this.user = user
    this.user.getUser($localStorage.id).then((usr, err)=>{
      this.currentUser = usr
      console.log(this.currentUser, "currentUser")
      //Get user profile
      this._steamSearchService.getUserProfile(usr.steamID).then((user, err)=>{
        console.log(user)
        this.steamUser = user
      })
      //Get users owned games
      this._steamSearchService.getOwnedGames(usr.steamID).then((user, err)=>{
        //this response is an array of users owned game IDs
        this.allGames = user.response.game_count
        this.playedGames = user.response.games.filter((game)=>{
          return game.playtime_forever > 0
        })
      })
    })
  }
}








//This can be used later on
// //filter out games that havent been played yet
// this.playedGames = user.response.games.filter((game)=>{
//   return game.playtime_forever > 0
// })
//
// let getGameInfoArr = []
// //Get game information for filtered out games
// this.playedGames.forEach((game)=>{
//   this._steamSearchService.getGameInfo(game.appid).then((info, err)=>{
//     //filter out bad requests
//     getGameInfoArr.push(info)
//
//   })
// })
// console.log(getGameInfoArr);

// this.ownedGamesInfo = []
// //Get game information for each game owned.
// this.playedGames.forEach((game)=>{
//   this._steamSearchService.getGameInfo(game.appid).then((res, err)=>{
//     //sometimes games dont exist with a certain ID. Filter out bad requests
//     if(res.data[game.appid].success){
//       this.ownedGamesInfo.push(res.data[game.appid])
//     }
//   })
// })
// console.log(this.ownedGamesInfo, "ownedGamesInfo");
