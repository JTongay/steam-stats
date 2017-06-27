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
    this.usersSteamID = this._$localStorage.steamID

    this._steamSearchService.getPlayerAchievementsForGame(
      this.usersSteamID,
      this.game.steam_appid
    ).then((res, err)=>{
        this.playerAchievement = res.data.playerstats.achievements
        this._steamSearchService.getGlobalAchievementPercentForGame(this.game.steam_appid).then((res, err)=>{
          this.globalAchievement = res.data.achievementpercentages.achievements
          this.playerAchievement.map((achievement, index)=>{
            achievement.globalPercent = this.globalPercent[index]
          })
          console.log(this.playerAchievement, "playerAchievement");
      })
    })

    console.log(this.playerAchievement, 'playerAchievement');
    this._steamSearchService.getGameSchema(this.game.steam_appid).then((res, err)=>{
      this.gameSchema = res.data.game.availableGameStats.achievements
      return this.gameSchema
    })
    console.log(this.gameSchema, "gameSchema");
  }
}
