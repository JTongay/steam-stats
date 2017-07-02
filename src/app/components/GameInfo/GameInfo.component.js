export default class GameInfoComponent {

  constructor(steamSearchService, user, $localStorage, $stateParams){
    '$inject'
    this._steamSearchService = steamSearchService
    this._user = user
    this._$localStorage = $localStorage
    this._$stateParams = $stateParams
  }

  $onInit(){
    this._steamSearchService.getGameInfo(this._$stateParams.selectedGame).then((res, err)=>{
      this.game = res.data[this._$stateParams.selectedGame].data
    })
    console.log(this)
    this.usersSteamID = this._$localStorage.steamID

    this._steamSearchService.getPlayerAchievementsForGame(
      this.usersSteamID,
      this.game.steam_appid
    ).then((res, err)=>{
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
      console.log(this.gameSchema);
    })
  }
}
