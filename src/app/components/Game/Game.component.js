export default class GameComponent {

  constructor(user, steamSearchService, $state){
    '$inject'
    this._user = user
    this._$state = $state
    this._steamSearchService = steamSearchService
  }

  $onInit(){
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
    this._user.stashGameData(game)
    console.log(game)
    return this._$state.go('gameinfo', {
      selectedGame: game.steam_appid
    })
  }

}
