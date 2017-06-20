import HomeComponent from './components/Home/Home.component'
import LoginComponent from './components/Login/Login.component'
import SignupComponent from './components/Signup/Signup.component'
import GameComponent from './components/Game/Game.component'
import GameInfoComponent from './components/GameInfo/GameInfo.component'

routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

export default function routing($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

  const home = {
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
                url: "https://api-steam-stats.herokuapp.com/add-steam",
                data: {
                  userID: $localStorage.id,
                  steamID: res.data.id
                }
              }).then((user)=>{
                console.log(user, "added steam id to db");
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
          //do something
        }
      }]
    }
  }

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

  const game = {
    url: '/game',
    template: require('./components/Game/Game.html'),
    controller: GameComponent,
    controllerAs: 'game'
  }

  const gameInfo = {
    url: '/game/:selectedGame',
    template: require('./components/GameInfo/GameInfo.html'),
    controller: GameInfoComponent,
    params: {
      selectedGame: null
    },
    controllerAs: 'gameInfo'
  }

  //register states
  $stateProvider.state('home', home)
  $stateProvider.state('login', login)
  $stateProvider.state('signup', signup)
  $stateProvider.state('game', game)
  $stateProvider.state('gameinfo', gameInfo)

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');

}
