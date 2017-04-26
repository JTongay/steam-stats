export default class steamSearch {

  constructor($http){
    '$inject'
    this._$http = $http
  }

  getUserId(user){
    console.log(process.env);
    return this._$http({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=" + process.env.STEAM_API_KEY + "&vanityurl=" + user
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err, "error");
    })
  }

  // getUserProfile(id){
  //   return this._$http({
  //     method: "GET",
  //     url: ""
  //   })
  // }


}
