export default class UserService {

	constructor($http, $localStorage){
		'$inject'
		this._$http = $http
		this._$localStorage = $localStorage
	}

	getUser(userID){
		return this._$http({
			method: "GET",
			url: "https://api-steam-stats.herokuapp.com/user/" + userID
		}).then((user, err)=>{
			if(err){
				return null
			}
			return user.data
		})
	}

}
