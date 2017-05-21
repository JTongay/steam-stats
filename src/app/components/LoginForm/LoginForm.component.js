require('./LoginForm.scss')

export default class LoginFormComponent {

  constructor(login, $localStorage){
    '$inject'
    this._login = login
    this._$localStorage = $localStorage
  }

  sendLogin(usr, pass){
    return this._login.handleLogin(usr, pass).then((res)=>{
    	console.log(res, "result validation")
    	if(res.status != 200){
    		console.log("you fucked this up")
    	} else {
    		this._$localStorage.$default(res.data)
    	}

    })

  }

}
