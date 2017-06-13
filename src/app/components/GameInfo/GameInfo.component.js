export default class GameInfoComponent {

  constructor(steamSearchService, user){
    '$inject'
    this._steamSearchService = steamSearchService
    this._user = user
    this.game = user.grabGameData()
    console.log(this.game)
  }

}
