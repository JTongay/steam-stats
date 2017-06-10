export default class GameComponent {

  constructor(user, steamSearchService){
    '$inject'
    this._user = user
    this._steamSearchService = steamSearchService
    this.playedGames = this._user.grabPlayedGamesData()
    console.log(this.playedGames)
  }

}
