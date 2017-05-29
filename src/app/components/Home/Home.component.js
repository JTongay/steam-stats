export default class HomeComponent {

  constructor(steamSearchService, $localStorage, user){
    '$inject'
    this._steamSearchService = steamSearchService
    this.setUserID = null
    // this.steamUser = steamUser
    this.user = user
    this.user.getUser($localStorage.id).then((usr, err)=>{
      this.currentUser = usr
      console.log(this.currentUser)
      //Get user profile
      this._steamSearchService.getUserProfile(usr.steamID).then((user, err)=>{
        console.log(user)
        this.steamUser = user
      })
      //Get users owned games
      this._steamSearchService.getOwnedGames(usr.steamID).then((user, err)=>{
        //filter out games that havent been played yet
        this.playedGames = user.response.games.filter((game)=>{
          return game.playtime_forever > 0
        })
        // this._steamSearchService.getGameInfo().then((info,err)=>{
        //   console.log(info, "game info");
        // })
        this.playedGames.forEach((game)=>{
          this._steamSearchService.getGameInfo(game.appid, usr.steamID).then((info, err)=>{
            console.log(info, "game info");
            this.usersGameInfo = info
          })
        })
      })
    })
  }

  // getGameInfo(gameID){
  //   this.ownedGames.response.games.forEach((game)=>{
  //
  //   })
  // }

}
