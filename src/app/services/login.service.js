export default class LoginService {

  constructor($http){
    '$inject'
    this._$http = $http
  }

  handleSignup(username, password){
    return this._$http.post('https://api-steam-stats.herokuapp.com/signup', {user: username, pass: password}).then((res, err)=>{
      console.log(res, "signup result");
    })
  }

  handleLogin(username, password){
    console.log(username);
    console.log(password);
    return this._$http.post('https://api-steam-stats.herokuapp.com/login', {user: username, pass: password}).then((res, err)=>{
      return res
    })
  }

}
