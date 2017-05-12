require('./LoginForm.scss')

export default class LoginFormComponent {

  constructor(login){
    '$inject'
    this._login = login
  }

  sendLogin(usr, pass){
    return this._login.handleSignup(usr, pass)
  }

}
