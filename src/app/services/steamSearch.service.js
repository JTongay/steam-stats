export default class steamSearch {

  constructor($http){
    '$inject'
    this._$http = $http
  }

  getUserInfo(){
    return this._$http({
      method: "GET",
      url: "/auth/steam/checkuser"
    }).then((res)=>{
      return res
    }).catch((err)=>{
      console.log(err, "error")
      return err
    })
  }

  getUserProfile(id){
    return this._$http({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=" + process.env.STEAM_API_KEY + "&steamids=" + id
    }).then((res)=>{
      console.log(res);
      return res
    }).catch((err)=>{
      console.log(err, "error fam");
    })
  }

  getOwnedGames(id){
    return this._$http({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + process.env.STEAM_API_KEY + "&steamid=" + id
    }).then((res)=>{
      console.log(res);
      return res.data
    }).catch((err)=>{
      console.log(err);
    })
  }

  getGameUserStats(gameID, steamID){
    return this._$http({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=" + gameID + "&key=" + process.env.STEAM_API_KEY + "&steamid=" + steamID
    }).then((res)=>{
      return res
    }).catch((err)=>{
      console.log(err);
    })
  }

  getGameInfo(gameID){
    return this._$http({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/http://store.steampowered.com/api/appdetails?appids=" + gameID
    }).then((res)=>{
      return res
    }).catch((err)=>{
      console.log(err);
    })
  }

  getGlobalAchievementPercentForGame(gameID){
    return this._$http({
      method: "GET",
      url: ` https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=${gameID}&format=json
      `
    }).then((res)=>{
      console.log(res, "getGlobalAchievementPercentForGame");
      return res
    }).catch((err)=>{
      console.log(err, "getGlobalAchievementPercentForGame error");
      return err
    })
  }

  getPlayerAchievementsForGame(userID, gameID){
    return this._$http({
      method: "GET",
      url: `https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${gameID}&key=${process.env.STEAM_API_KEY}&steamid=${userID}`
    }).then((res)=>{
      console.log(res, "getPlayerAchievementsForGame");
      return res
    }).catch((err)=>{
      console.log(err, "getPlayerAchievementsForGame error");
      return err
    })
  }

  getGameSchema(gameID){
    return this._$http({
      method: "GET",
      url: ` https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${process.env.STEAM_API_KEY}&appid=${gameID}
      `
    }).then((res)=>{
      return res
      console.log(res, "getGameSchema");
    }).catch((err)=>{
      return err
      console.log(err, "getGameSchema error");
    })
  }

  getBadges(userID){
    return this._$http({
      method: "GET",
      url: `https://cors-anywhere.herokuapp.com/https://api.steampowered.com/IPlayerService/GetBadges/v1/?key=${process.env.STEAM_API_KEY}&steamid=${userID}`
    }).then((res)=>{
      console.log(res, "getBadges");
      return res
    }).catch((err)=>{
      console.log(err, "getBadges error");
      return err
    })
  }

  getCurrentNumberOfPlayers(gameID){
    return this._$http({
      method: "GET",
      url: `https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?key=${process.env.STEAM_API_KEY}&appid=${gameID}`
    }).then((res)=>{
      console.log(res, "getCurrentNumberOfPlayers");
      return res
    }).catch((err)=>{
      console.log(err, "getCurrentNumberOfPlayers error");
      return err
    })
  }


}
