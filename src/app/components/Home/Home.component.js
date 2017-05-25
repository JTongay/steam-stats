export default class HomeComponent {

  constructor(steamSearchService, steamUser){
    '$inject'
    this._steamSearchService = steamSearchService
    this.setUserID = null
    this.steamUser = steamUser
    console.log(this.steamUser)
  }

  searchForUser(e,user){
    e.preventDefault()
    this._steamSearchService.getUserId(user).then((res)=>{
      var userId = res.data.response.steamid
      // console.log(res.data.response.steamid);
      return this._steamSearchService.getUserProfile(userId).then((result)=>{
        console.log(result);
      })
    })
  }


}
