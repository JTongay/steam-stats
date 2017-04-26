import testService from '../../services/testService'
import testService2 from '../../services/testService2'

export default class HomeComponent {

  constructor(steamSearchService){
    '$inject'
    this._steamSearchService = steamSearchService
  }

  searchForUser(e,user){
    e.preventDefault()
    this._steamSearchService.getUserId(user).then((res)=>{
      this.setUser = res
    })
    console.log(this.setUser);
    console.log(user);
  }


}
