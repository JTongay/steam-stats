import testService from '../../services/testService'
import testService2 from '../../services/testService2'

export default class HomeComponent {

  constructor(steamSearchService){
    '$inject'
    this._steamSearchService = steamSearchService
    this.setUserID = null
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
