export default class UserService {

	constructor($http, $localStorage){
		'$inject'
		this._$http = $http
		this._$localStorage = $localStorage
	}

	getUser(userID){
		return this._$http({
			method: "GET",
			url: "/user/" + userID
		}).then((user, err)=>{
			if(err){
				console.log(err, "error in the service")
				return null
			}
			console.log(user.data, "user in the service")
			return user.data
		})
	}

}
