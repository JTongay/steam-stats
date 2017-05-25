require('./SignupForm.scss')

export default class SignupFormComponent {

  constructor(login, $state){
    '$inject'
    this._login = login
    this._$state = $state
  }

  sendSignup(usr, pass){
    return this._login.handleSignup(usr, pass).then((res)=>{
    	
    })
  }

}
