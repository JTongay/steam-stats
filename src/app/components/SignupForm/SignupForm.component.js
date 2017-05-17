require('./SignupForm.scss')

export default class SignupFormComponent {

  constructor(login){
    '$inject'
    this._login = login
  }

  sendSignup(usr, pass){
    return this._login.handleSignup(usr, pass)
  }

}
