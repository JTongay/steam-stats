export default class GameInfoComponent {

  constructor(steamSearchService, user, $localStorage){
    '$inject'
    this._steamSearchService = steamSearchService
    this._user = user
    this._$localStorage = $localStorage
    this.usersSteamID = $localStorage.steamID
    this.game = user.grabGameData()
    console.log(this.game)
    this.globalAchievement = steamSearchService.getGlobalAchievementPercentForGame(this.game.steam_appid)
    console.log(this.globalAchievement, 'globalAchievement');
    this.playerAchievement = steamSearchService.getPlayerAchievementsForGame(this.usersSteamID, this.game.steam_appid)
    console.log(this.playerAchievement, 'playerAchievement');
    steamSearchService.getGameSchema(this.game.steam_appid).then((res, err)=>{
      this.gameSchema = res.data.game.availableGameStats.achievements
      console.log(this.gameSchema, "gameSchema");
    })
  }

}
