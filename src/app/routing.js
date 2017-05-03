import HomeComponent from './components/Home/Home.component'

routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

export default function routing($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $stateProvider.state('home', {
    url: '/',
    template: require('./components/Home/Home.html'),
    controller: HomeComponent,
    controllerAs: 'home',
    resolve: {
      pokemon: ['$http', '$state', function($http, $state){
        return $http.get("/auth/steam/return")
            .then((res)=>{
              console.log(res.data);
              $state.go('home')
              return res
            })
            .catch((err)=>{
              console.log(err, "error");
              return err
            })
          }]
    }
  })
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $httpProvider.interceptors.push(function($location) {
      return {
        response: function(response) {
          // do something on success
          console.log(response, "front end");
          return response;
        },
        responseError: function(response) {
          if (response.status === 401)
            $location.url('/');
          return response;
        }
      };
    });
}
