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

  getGameInfo(gameID, steamID){
    return this._$http({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=" + gameID + "&key=" + process.env.STEAM_API_KEY + "&steamid=" + steamID
    }).then((res)=>{
      console.log(res);
      return res
    }).catch((err)=>{
      console.log(err);
    })
  }
  // getGameInfo(){
  //   return this._$http({
  //     method: "GET",
  //     url: "https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=440&key=9ED35D99E28A767772C00F503530363F&steamid=76561197972495328"
  //   }).then((res)=>{
  //     console.log(res);
  //     return res
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // }


}
