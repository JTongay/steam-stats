import HomeComponent from './components/Home/Home.component'
import LoginComponent from './components/Login/Login.component'

routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

export default function routing($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  const login = {
    url: '/login',
    template: require('./components/Login/Login.html'),
    controller: LoginComponent,
    controllerAs: 'login'
  }
  $stateProvider.state('login', login)
  $stateProvider.state('home', {
    url: '/',
    template: require('./components/Home/Home.html'),
    controller: HomeComponent,
    controllerAs: 'home'
    // resolve: {
    //   steamUser: ['$http', '$state', function($http, $state){
    //     return $http.get("/auth/steam/return")
    //         .then((res)=>{
    //           console.log(res, "in the front end");
    //           // $state.go('home')
    //           return res
    //         })
    //         .catch((err)=>{
    //           console.log(err, "error in the front end");
    //           return err
    //         })
    //       }]
    // }
  })
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  // $httpProvider.interceptors.push(function($location) {
  //     return {
  //       response: function(response) {
  //         // do something on success
  //         console.log(response, "front end");
  //         return response;
  //       },
  //       responseError: function(response) {
  //         if (response.status === 401)
  //           $location.url('/');
  //         return response;
  //       }
  //     };
  //   });
}
