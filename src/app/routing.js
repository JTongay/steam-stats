import HomeComponent from './components/Home/Home.component'

routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$q', '$location'];

export default function routing($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $q, $location) {
  $stateProvider.state('home', {
    url: '/',
    template: require('./components/Home/Home.html'),
    controller: HomeComponent,
    controllerAs: 'home',
    resolve: {
      pokemon: ['$http', function($http){
        return $http.get("http://pokeapi.co/api/v2/pokemon/1")
            .then((res)=>{
              console.log(res.data);
              return res
            })
            .catch((err)=>{
              console.log(err);
              return err
            })
          }]
    }
  })
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $httpProvider.interceptors.push(function($q, $location) {
      return {
        response: function(response) {
          // do something on success
          return response;
        },
        responseError: function(response) {
          if (response.status === 401)
            $location.url('/login');
          return $q.reject(response);
        }
      };
    });
}
