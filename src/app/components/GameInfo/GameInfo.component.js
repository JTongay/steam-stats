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
        let playerAchievement = res.data.playerstats.achievements
        this._steamSearchService.getGlobalAchievementPercentForGame(this.game.steam_appid).then((res, err)=>{
          let globalAchievement = res.data.achievementpercentages.achievements
          playerAchievement.forEach((achievement, pIndex)=>{
            globalAchievement.forEach((globalAchievement, gIndex)=>{
              if(achievement.apiname === globalAchievement.name){
                achievement.globalPercent = globalAchievement.percent
              }
            })
          })
          this.playerAchievement = playerAchievement
          console.log(this.playerAchievement, "playerAchievement");
      })
    })
    this._steamSearchService.getGameSchema(this.game.steam_appid).then((res, err)=>{
      this.gameSchema = res.data.game.availableGameStats.achievements
      return this.gameSchema
    })
  }
}
