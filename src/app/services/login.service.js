export default class LoginService {

  constructor($http){
    '$inject'
    this._$http = $http
  }

  handleSignup(username, password){
    console.log(username);
    console.log(password);
    return this._$http.post('/signup', {user: username, pass: password}).then((res, err)=>{
      console.log(res);
      console.log(err);
    })
  }

  handleLogin(username, password){
    console.log(username);
    console.log(password);
    return this._$http.post('/login', {user: username, pass: password}).then((res, err)=>{
      console.log(res);
      console.log(err);
    })
  }

}
