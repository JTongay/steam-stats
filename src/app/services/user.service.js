export default class UserService {

	constructor($http, $localStorage){
		'$inject'
		this._$http = $http
		this._$localStorage = $localStorage
	}

	getUser(userID){
		return this._$http({
			method: "POST",
			url: "/user",
			data: {userID: userID}
		}).then((user, err)=>{
			console.log(user);
			return user
		})
	}

}
