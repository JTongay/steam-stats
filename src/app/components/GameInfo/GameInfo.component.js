export default class GameInfoComponent {

  constructor(steamSearchService, user, $localStorage){
    '$inject'
    this._steamSearchService = steamSearchService
    this._user = user
    this._$localStorage = $localStorage
  }

  $onInit(){
    this.game = this._user.grabGameData()
    console.log(this.game)
    // this.usersSteamID = $localStorage.steamID
    // this.globalAchievement = steamSearchService.getGlobalAchievementPercentForGame(this.game.steam_appid)
    // console.log(this.globalAchievement, 'globalAchievement');
    // steamSearchService.getPlayerAchievementsForGame(this.usersSteamID, this.game.steam_appid).then((res, err)=>{
    //   this.playerAchievement = res.data.playerstats.achievements
    //   console.log(this.playerAchievement, 'playerAchievement');
    // })
    // steamSearchService.getGameSchema(this.game.steam_appid).then((res, err)=>{
    //   this.gameSchema = res.data.game.availableGameStats.achievements
    //   console.log(this.gameSchema, "gameSchema");
    // })
  }

}
