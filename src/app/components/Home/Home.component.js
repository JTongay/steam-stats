export default class HomeComponent {

  constructor(steamSearchService, $localStorage, user){
    '$inject'
    this._steamSearchService = steamSearchService
    this.setUserID = null
    // this.steamUser = steamUser
    this.user = user
    this.user.getUser($localStorage.id).then((usr, err)=>{
      this.currentUser = usr
      console.log(this.currentUser)
      this._steamSearchService.getUserProfile(usr.steamID).then((user, err)=>{
        console.log(user)
        this.steamUser = user
      })
    })
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
