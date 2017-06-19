export default class GameComponent {

  constructor(user, steamSearchService){
    '$inject'
    this._user = user
    this._steamSearchService = steamSearchService
    this.playedGames = this._user.grabPlayedGamesData()
    this.ownedGamesInfo = []
    //Get game information for each game owned.
    this.playedGames.forEach((game)=>{
      this._steamSearchService.getGameInfo(game.appid).then((res, err)=>{
        //sometimes games dont exist with a certain ID. Filter out bad requests
        if(res.data[game.appid].success){
          this.ownedGamesInfo.push(res.data[game.appid].data)
        }
      })
    })
    console.log(this.ownedGamesInfo, "ownedGamesInfo");

  }

  selectThisGame(game){
    return this._user.stashGameData(game)
  }

}
