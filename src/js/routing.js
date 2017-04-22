import HomeComponent from './components/Home/Home.component'

routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function routing($stateProvider, $urlRouterProvider, $locationProvider) {
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
}
