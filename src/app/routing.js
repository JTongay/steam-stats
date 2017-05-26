import HomeComponent from './components/Home/Home.component'
import LoginComponent from './components/Login/Login.component'
import SignupComponent from './components/Signup/Signup.component'

routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

export default function routing($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

  const login = {
    url: '/login',
    template: require('./components/Login/Login.html'),
    controller: LoginComponent,
    controllerAs: 'login'
  }

  const signup = {
    url: '/signup',
    template: require('./components/Signup/Signup.html'),
    controller: SignupComponent,
    controllerAs: 'signup'
  }

  $stateProvider.state('login', login)
  $stateProvider.state('signup', signup)
  $stateProvider.state('home', {
    url: '/',
    template: require('./components/Home/Home.html'),
    controller: HomeComponent,
    controllerAs: 'home',
    resolve: {
      steamUser: ['$http', '$state', '$localStorage', function($http, $state, $localStorage){
       if(!$localStorage.steamID || !$localStorage.token){
        return $http.get("/auth/steam/checkuser")
            .then((res)=>{
              console.log(res, "in the front end");
              // $state.go('home')
              $localStorage.steamID = res.data.id
              $http({
                method: "PUT",
                url: "/add-steam",
                data: {
                  userID: $localStorage.id,
                  steamID: res.data.id
                }
              }).then((user)=>{
                return user
              }).catch((err)=>{
                return err
              })
              // return res
            })
            .catch((err)=>{
              console.log(err, "error in the front end");
              // return err
            })
        } else {

        }
      }]
    }
  })
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

}
