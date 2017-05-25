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

  getUserId(user){
    return this._$http({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=" + process.env.STEAM_API_KEY + "&vanityurl=" + user
    }).then((res)=>{
      // console.log(res);
      return res
    }).catch((err)=>{
      console.log(err, "error");
    })
  }

  getUserProfile(id){
    return this._$http({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=" + process.env.STEAM_API_KEY + "&steamids=" + id
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err, "error fam");
    })
  }


}
