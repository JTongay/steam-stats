import HomeComponent from './components/Home/HomeComponent'

routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function routing($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider.state('home', {
    url: '/',
    template: require('./components/Home/Home.html'),
    controller: HomeComponent,
    controllerAs: 'home'
  })
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}
