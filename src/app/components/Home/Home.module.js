import HomeController from './Home.component'

const HomeModule = {
  template: require('./Home.html'),
  controller: HomeController,
  bindings: {
    home: '<'
  }
}
